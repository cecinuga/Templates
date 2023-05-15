import { ReactElement, ReactFragment } from "react"
import AvivaWrapper from "./AvivaWrapper"
import { SimpleGrid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

type AvivaSimpleGrid = {
    children: ReactFragment | ReactElement
    title: string;
}

export default function AvivaSimpleGrid(props: AvivaSimpleGrid){
    const xl = useMediaQuery("(max-width: 1700px)")
    const lg = useMediaQuery("(max-width: 1400px)")
    const md = useMediaQuery("(max-width: 1024px)")
    const sm = useMediaQuery("(max-width: 768px)")
    const xs = useMediaQuery("(max-width: 512px)")

    return (
        <div style={{bottom:"10rem"}}>
            <AvivaWrapper>
                <>
                    <SimpleGrid cols={4} w={"50%"} spacing={xs?130:sm?115:md?130:lg?120:xl?70:0} pos="relative"  left={xs?"-70%":sm?"-25%":md?"-10%":lg?"10%":xl?"15%":"20%"}>
                        {props.children}
                    </SimpleGrid>
                    <Text c="white" fz={20} pt={30} align="center">{props.title}</Text>
                </>
            </AvivaWrapper>
        </div>
    )
}