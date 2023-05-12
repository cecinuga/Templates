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
                        <Link to="/aviva/uffici/areonautica"><img src={viacavour} /></Link>
                        <Link to="/aviva/uffici/agora"><img src={chiocciola} /></Link>
                        <Link to="/aviva/uffici/minsk"><img src={body} /></Link>
                        <Link to="/aviva/uffici/oberon"><img src={viacavour2} /></Link>

                        <Link to="/aviva/uffici/welleng"><img src={chiocciola2} /></Link>
                    </SimpleGrid>
                    <Text c="white" fz={20} pt={30} align="center" >Uffici</Text>
                </>
            </AvivaWrapper>
        </>
    )
}