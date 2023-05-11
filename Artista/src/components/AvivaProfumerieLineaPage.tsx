import { SimpleGrid, Text } from "@mantine/core";
import AvivaWrapper from "./AvivaWrapper";
import { Link } from "react-router-dom";
import viacavour from "../public/aviva/profumerie/lineabellezza/oristano/oristano_01_on.jpg"
import chiocciola from "../public/aviva/profumerie/lineabellezza/cagliari/paoli_01_on.jpg"

export default function AvivaProfumerieLineaPage(){

    return(
        <>
            <AvivaWrapper>
                <>
                    <SimpleGrid cols={4} spacing={5}>
                        <Link to="/aviva/profumerie/linea-bellezza/oristano"><img src={viacavour} /></Link>
                        <Link to="/aviva/profumerie/linea-bellezza/cagliari"><img src={chiocciola} /></Link>
                    </SimpleGrid>
                    <Text c="white" fz={20} pt={30} align="center" >Linea Bellezza</Text>
                </>
            </AvivaWrapper>
        </>
    )
}