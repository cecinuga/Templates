import { SimpleGrid } from "@mantine/core";
import { ReactElement, useState } from "react";

type MiniGridBoxProps = {
    color: string;
    hoveredColor: string;
    children: ReactElement[]
}

export default function MiniGridBox(props: MiniGridBoxProps){
    const [hover, setHover] = useState<boolean>(false)
    return(
        <div 
            style={{position: "relative", cursor: "pointer"}} 
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >
            <div 
                style={{
                    width: "10rem",
                    height: "10rem",
                    zIndex: hover?"1":"3",
                    position: "relative",
                }}>
            </div>
            <div style={{
                zIndex: "2",
                position: "absolute",
                bottom: "12%",
            }}> 
                <SimpleGrid 
                    cols={2}
                    spacing={0}
                >
                    {props.children}
                </SimpleGrid>
            </div>
        </div>
    )
}

