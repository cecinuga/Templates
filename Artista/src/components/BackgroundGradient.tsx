import { useMouseMove } from "../lib/lib";
import { MouseEvent } from "react";

type BackgroundGradientProps = {
    bgColor: string;
}

export default function BackgroundGradient(props: BackgroundGradientProps){
    const {x, y, handleMouseMove} = useMouseMove()

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
                className="mouse-cursor-gradient-tracking" 
                onMouseMove={update} 
                onMouseLeave={update} 
                style={{backgroundColor: props.bgColor, width: "100vw", height: "100vh", zIndex: 0, position: "absolute", top:"0", overflow: "hidden"}}>
            </div>
        </>
    )
}