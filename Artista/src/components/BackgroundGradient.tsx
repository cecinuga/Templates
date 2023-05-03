import { useMediaQuery } from "@mantine/hooks";
import { useMouseMove } from "../lib/lib";
import { MouseEvent } from "react";

type BackgroundGradientProps = {
    bgColor: string;
    gradient: boolean;
    move?: boolean;
}

export default function BackgroundGradient(props: BackgroundGradientProps){
    const {x, y, handleMouseMove} = useMouseMove()
    const xs = useMediaQuery("(max-width: 500px)")
    const md = useMediaQuery("(max-width: 1400px)")

    const update = (e: MouseEvent) => {
        console.log(e, x, y)
        document.getElementById("mouse-cursor-gradient-tracking")?.style.setProperty('--x', x + 'px');
        document.getElementById("mouse-cursor-gradient-tracking")?.style.setProperty('--y', y + 'px');

        handleMouseMove(e)
    }

    return(
        <>
            <div 
                id="mouse-cursor-gradient-tracking" 
                className={props.gradient?"mouse-cursor-gradient-tracking":""} 
                onMouseMove={props.move?update:()=>{}} 
                onMouseLeave={props.move?update:()=>{}} 
                style={{backgroundColor: props.bgColor, width: "100vw", height: xs?"700vh":md?"500vh":"120vh", zIndex: 0, position: "absolute", top:"0", overflow: "hidden"}}>
            </div>
        </>
    )
}