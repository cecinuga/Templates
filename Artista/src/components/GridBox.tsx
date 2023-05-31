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
            <img src={props.src} width={props.width} style={{backgroundColor:"red", opacity:hover?0.7:1}}/>
        </div>
    )
}

