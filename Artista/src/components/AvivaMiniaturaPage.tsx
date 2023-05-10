import { ReactElement } from "react";
import AvivaWrapper from "./AvivaWrapper";
import { Group, Stack, Text } from "@mantine/core";

type Riga = {
    foto: string;
    descrizione: string | ReactElement;
}

type AvivaMiniaturaPageProps = {
    righe: Riga[]
    footer?: ReactElement
}

export default function AvivaMiniaturaPage(props: AvivaMiniaturaPageProps){
    return(
        <AvivaWrapper>
                <>
                    <div style={{height:"50vh", overflowY: "scroll"}}>
                        {props.righe.map((item, i) => 
                            {return i==0||i%2==0?<Group align="center" w={"70%"} position="center" pos="relative" left="50%" style={{transform:"translate(-50%)"}} pb={10}>
                                        <img src={item.foto}></img><Text w={"60%"} fz={11} c="white">{item.descrizione}</Text>
                                    </Group>:
                                    <Group align="center" w={"70%"} position="center" pos="relative" left="50%" style={{transform:"translate(-50%)"}} pb={10}>
                                        <Text  w={"60%"} fz={11} c="white">{item.descrizione}</Text><img src={item.foto}></img>
                                    </Group>}
                        )}
                    </div>
                    <Stack>
                        <Group position="center" style={{display:"flex", paddingTop:"0.6rem"}}>
                            {props.footer}
                        </Group>
                    </Stack>
                </>
        </AvivaWrapper>
    )
}