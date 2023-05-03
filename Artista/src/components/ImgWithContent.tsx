import { ReactNode } from "react";

type ImgWithContentsProps = {
    img: string;
    width: string;
    height?: string;
    className?: string;
    children?: ReactNode;
    light?: string;
}

export default function ImgWithContents(props: ImgWithContentsProps){
    return(
        <div style={{zIndex:3,background: "url("+props.img+")",backgroundSize:"cover", position:"relative", width:props.width, height:props.height, margin:"auto"}}>
            <div style={{position:"absolute", left:"50%", top:"50%", transform: "translateX(-50%) translateY(-50%)"}}>
                {props.children}
            </div>
        </div>
    )
}