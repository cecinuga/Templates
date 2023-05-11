import { SimpleGrid, Text } from "@mantine/core";
import AvivaWrapper from "./AvivaWrapper";
import { Link } from "react-router-dom";
import viacavour from "../public/aviva/ristoranti/aulla_01_on.jpg"
import chiocciola from "../public/aviva/ristoranti/budapest_01_on.jpg"
import body from "../public/aviva/ristoranti/civitavecchia_01_on.jpg"
import viacavour2 from "../public/aviva/ristoranti/cronta_01_on.jpg"
import chiocciola2 from "../public/aviva/ristoranti/faenza_01_on.jpg"
import viacavour3 from "../public/aviva/ristoranti/firenze_01_on.jpg"
import chiocciola3 from "../public/aviva/ristoranti/ipandipino_01_on.jpg"
import body3 from "../public/aviva/ristoranti/loungebar_01_on.jpg"
import viacavour4 from "../public/aviva/ristoranti/newyork_01_on.jpg"
import chiocciola4 from "../public/aviva/ristoranti/pune_01_on.jpg"
import chiocciola5 from "../public/aviva/ristoranti/seuropa_01_on.jpg"

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
                        <Link to=""><img src={viacavour3} /></Link>
                        <Link to=""><img src={chiocciola3} /></Link>
                        <Link to=""><img src={body3} /></Link>

                        <Link to=""><img src={viacavour4} /></Link>
                        <Link to=""><img src={chiocciola4} /></Link>
                        <Link to=""><img src={chiocciola5} /></Link>
                        
                    </SimpleGrid>
                    <Text c="white" fz={20} pt={30} align="center" >Ristoranti</Text>
                </>
            </AvivaWrapper>
        </>
    )
}