import AvivaWrapper from "./AvivaWrapper";
import { CarouselFoto } from "./CarouselFoto";
import { Text } from "@mantine/core"

type AvivaCarouselProps = {
    data: string[];
    title: string
}

export default function AvivaCarousel(props: AvivaCarouselProps){
    return(
        <AvivaWrapper>
            <div style={{position:"relative",width:"35rem", height:"50rem"}}>
                <CarouselFoto relative slide={1} slideSize="100%" height="100%" width="100%" imageHeight="100%" data={props.data.map(item=>({image:item}))} />
                <Text c="white" align="center" fz={20}>{props.title}</Text>
            </div>
        </AvivaWrapper>
    )
}