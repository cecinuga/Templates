import { SimpleGrid, Text } from "@mantine/core";
import AvivaWrapper from "./AvivaWrapper";
import { Link } from "react-router-dom";
import viacavour from "../public/aviva/profumerie/pinalli/sarzana/sarzana_01_on.jpg"
import chiocciola from "../public/aviva/profumerie/pinalli/laspezia/laspezia_01_on.jpg"
import viacavour2 from "../public/aviva/profumerie/pinalli/chiavali/chiavari_01_on.jpg"
import chiocciola2 from "../public/aviva/profumerie/pinalli/piacenza/piacenza_01_on.jpg"

export default function AvivaProfumeriePinalliPage(){

    return(
        <>
            <AvivaWrapper>
                <>
                    <SimpleGrid cols={4} spacing={5}>
                        <Link to="/aviva/profumerie/pinalli/sarzana"><img src={viacavour} /></Link>
                        <Link to="/aviva/profumerie/pinalli/laspezia"><img src={chiocciola} /></Link>
                        <Link to="/aviva/profumerie/pinalli/chiavali"><img src={viacavour2} /></Link>
                        <Link to="/aviva/profumerie/pinalli/piacenza"><img src={chiocciola2} /></Link>
                    </SimpleGrid>
                    <Text c="white" fz={20} pt={30} align="center" >PROFUMERIE Pinalli</Text>
                </>
            </AvivaWrapper>
        </>
    )
}