import { SimpleGrid, Text } from "@mantine/core";
import AvivaWrapper from "./AvivaWrapper";
import { Link } from "react-router-dom";
import viacavour from "../public/aviva/uffici/aeronautica_01_on.jpg"
import chiocciola from "../public/aviva/uffici/agora_01_on.jpg"
import body from "../public/aviva/uffici/minsk_01_on.jpg"
import viacavour2 from "../public/aviva/uffici/oberon_01_on.jpg"
import chiocciola2 from "../public/aviva/uffici/welleng_01_on.jpg"

export default function AvivaSuccessiIdeaBellezzaPage(){

    return(
        <>
            <AvivaWrapper>
                <>
                    <SimpleGrid cols={4} spacing={5}>
                        <Link to=""><img src={viacavour} /></Link>
                        <Link to=""><img src={chiocciola} /></Link>
                        <Link to=""><img src={body} /></Link>
                        <Link to=""><img src={viacavour2} /></Link>

                        <Link to=""><img src={chiocciola2} /></Link>
                    </SimpleGrid>
                    <Text c="white" fz={20} pt={30} align="center" >Uffici</Text>
                </>
            </AvivaWrapper>
        </>
    )
}