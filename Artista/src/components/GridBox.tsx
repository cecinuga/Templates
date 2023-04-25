import { ReactElement, useState } from "react"
import { useSpring, animated } from '@react-spring/web'

type GridBoxProps = {
    color: string;
    hoveredColor: string;
    children: string | ReactElement
}

export default function GridBox(props: GridBoxProps){
    const [hover, setHover] = useState<boolean>(false)
    const gridBoxAni = useSpring({
        from: {
            top: "-600%"
        },
        to: {
            top: "0%",
        },
        config: {
            mass: 2*Math.random(),
            friction: 20*Math.random(),
            tension: 40*Math.random(),
        }
    })

    return(
        <animated.div style={{...gridBoxAni, position: "relative"}}>
            <div 
                onMouseEnter={()=>setHover(true)}
                onMouseLeave={()=>setHover(false)}
                style={{
                    backgroundColor: hover?`${props.hoveredColor}50`:`${props.color}50`, 
                    width: "10rem",
                    height: "10rem",
                    zIndex: "2",
                    position: "relative"
                }}>
            </div>
            <div style={{
                zIndex: "1",
                position: "absolute",
                bottom: "50%",
                left: "6%",
                transform: "translateY(50%)"
            }}>{props.children}</div>
        </animated.div>
    )
}

