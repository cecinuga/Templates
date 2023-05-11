import { SimpleGrid, Text } from "@mantine/core";
import AvivaWrapper from "./AvivaWrapper";
import { Link } from "react-router-dom";
import viacavour from "../public/aviva/fashion/braarezzo_01_on.jpg"
import chiocciola from "../public/aviva/fashion/bramilano_01_on.jpg"
import body from "../public/aviva/fashion/brany_01_on.jpg"
import cosmix from "../public/aviva/fashion/nnarezzo_06_on.jpg"
import marianna from "../public/aviva/fashion/nnmilano_01_on.jpg"


export default function AvivaSuccessiIdeaBellezzaPage(){

    return(
        <>
            <AvivaWrapper>
                <>
                    <SimpleGrid cols={4} spacing={5}>
                        <Link to="/aviva/fashion/braarezzo"><img src={viacavour} /></Link>
                        <Link to="/aviva/fashion/bramilano"><img src={chiocciola} /></Link>
                        <Link to="/aviva/fashion/newyork"><img src={body} /></Link>
                        <Link to="/aviva/fashion/nnarezzo"><img src={cosmix} /></Link>

                        <Link to="/aviva/fashion/nnmilano"><img src={marianna} /></Link>
                    </SimpleGrid>
                    <Text c="white" fz={20} pt={30} align="center" >Fashion</Text>
                </>
            </AvivaWrapper>
        </>
    )
}