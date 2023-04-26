import { ReactElement, useState } from "react"
import { useSpring, animated } from '@react-spring/web'
import { getRandomInt } from "../lib/lib";
import { useMediaQuery } from "@mantine/hooks";

type GridBoxProps = {
    color: string;
    hoveredColor: string;
    children: string | ReactElement
}

export default function GridBox(props: GridBoxProps){
    const [hover, setHover] = useState<boolean>(false)
    const lg = useMediaQuery("(min-width: 500px)")
    const gridBoxAni = useSpring({
        from: {
            top: "-600%"
        },
        to: {
            top: "0%",
        },
        config: {
            mass: 3*getRandomInt(1, 2),
            friction: 30*getRandomInt(1, 2),
            tension: 45*getRandomInt(1, 2),
        }
    })

    return(
        <animated.div 
            style={{...lg?gridBoxAni:{}, position: "relative", cursor: "pointer"}} 
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >
            <div 
                style={{
                    backgroundColor: hover?`${props.hoveredColor}50`:`${props.color}50`, 
                    width: "10rem",
                    height: "10rem",
                    zIndex: hover?"1":"3",
                    position: "relative",
                    borderRadius: "5%"
                }}>
            </div>
            <div style={{
                zIndex: "2",
                position: "absolute",
                bottom: "50%",
                left: "6%",
                transform: "translateY(50%)"
            }}>{props.children}</div>
        </animated.div>
    )
}

