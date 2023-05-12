import { Link } from "react-router-dom";
import AvivaWrapper from "./AvivaWrapper";
import { CarouselFoto } from "./CarouselFoto";
import { Button, Group, Text } from "@mantine/core"

type AvivaCarouselProps = {
    data: string[];
    title: string;
    bottone?: string; 
    pdf?: string;
}

export default function AvivaCarousel(props: AvivaCarouselProps){
    return(
        <AvivaWrapper>
            <div style={{position:"relative",width:"35rem", height:"50rem"}}>
                <CarouselFoto slide={1} slideSize="100%" height="100%" width="100%" imageHeight="100%" data={props.data.map(item=>({image:item}))} />
                <Group style={{justifyContent:"space-between"}}><Text c="white" align="center" fz={20}>{props.title}</Text>{props.bottone&&<Link to={props.pdf!} target="_blank"><Button variant="gradient" gradient={{from:"white", to:"black"}}>{props.bottone}</Button></Link>}</Group>
            </div>
        </AvivaWrapper>
    )
}