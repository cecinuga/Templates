import { SimpleGrid, Text } from "@mantine/core";
import AvivaWrapper from "./AvivaWrapper";
import { Link } from "react-router-dom";
import viacavour from "../public/aviva/wellness/benessere_01_on.jpg"
import chiocciola from "../public/aviva/wellness/olbia_01_on.jpg"
import body from "../public/aviva/wellness/moschettini_03_on.jpg"

export default function AvivaSuccessiIdeaBellezzaPage(){

    return(
        <>
            <AvivaWrapper>
                <>
                    <SimpleGrid cols={4} spacing={5}>
                        <Link to=""><img src={viacavour} /></Link>
                        <Link to=""><img src={chiocciola} /></Link>
                        <Link to=""><img src={body} /></Link>
                    </SimpleGrid>
                    <Text c="white" fz={20} pt={30} align="center" >Wellness</Text>
                </>
            </AvivaWrapper>
        </>
    )
}