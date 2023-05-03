import { useState } from "react";
import { useNavigate } from "react-router";

type GridBoxProps = {
    color: string;
    hoveredColor: string;
    src: string;
    href: string,
    width?: string;
    _blank?: boolean;
    small?: boolean;
}

export default function GridBox(props: GridBoxProps){
    const [hover, setHover] = useState<boolean>(false)
    const navigate = useNavigate()
    return(
        <div 
            style={{position: "relative", cursor: "pointer"}} 
            onClick={props._blank?()=>location.href=props.href:()=>navigate(props.href)}
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >
            <div 
                style={{
                    backgroundColor: props.color=="transparent"?props.color:hover?`${props.hoveredColor}50`:`${props.color}50`, 
                    width: props.small?"2.5rem":"10rem",
                    height: props.small?"2.5rem":"10rem",
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
            }}>
                <img src={props.src} width={props.width}/>
            </div>
        </div>
    )
}

