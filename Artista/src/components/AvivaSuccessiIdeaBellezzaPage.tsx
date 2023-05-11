import { SimpleGrid, Text } from "@mantine/core";
import AvivaWrapper from "./AvivaWrapper";
import cavalerizza from "../public/aviva/successi/ideabellezza/cavallerizza_01_on.jpg"
import bari from "../public/aviva/successi/ideabellezza/bari_01_on.jpg"
import battipaglia from "../public/aviva/successi/ideabellezza/battipaglia_05_on.jpg"
import fuorigrotta from "../public/aviva/successi/ideabellezza/fuorigrotta_03_on.jpg"
import foggia from "../public/aviva/successi/ideabellezza/foggia_01_on.jpg"
import matera from "../public/aviva/successi/ideabellezza/matera_02_on.jpg"
import potenza from "../public/aviva/successi/ideabellezza/potenza_01_on.jpg"
import robologna from "../public/aviva/successi/ideabellezza/robologna_01_on.jpg"
import salerno from "../public/aviva/successi/ideabellezza/salerno_01_on.jpg"
import sorrento from "../public/aviva/successi/ideabellezza/sorrento_01_on.jpg"
import valmontone from "../public/aviva/successi/ideabellezza/valmontone_01_on.jpg"
import vitteman from "../public/aviva/successi/ideabellezza/vitteman_01_on.jpg"
import { Link } from "react-router-dom";

export default function AvivaSuccessiIdeaBellezzaPage(){

    return(
        <>
            <AvivaWrapper>
                <>
                    <SimpleGrid cols={4} spacing={5}>
                        <Link to="/aviva/i-nostri-successi/idea-bellezza/cavallerizza"><img src={cavalerizza} /></Link>
                        <Link to="/aviva/i-nostri-successi/idea-bellezza/bari"><img src={bari} /></Link>
                        <Link to="/aviva/i-nostri-successi/idea-bellezza/battipaglia"><img src={battipaglia} /></Link>
                        <Link to="/aviva/i-nostri-successi/idea-bellezza/fuorigrotta"><img src={fuorigrotta} /></Link>

                        <Link to="/aviva/i-nostri-successi/idea-bellezza/foggia"><img src={foggia} /></Link>
                        <Link to="/aviva/i-nostri-successi/idea-bellezza/matera"><img src={matera} /></Link>
                        <Link to="/aviva/i-nostri-successi/idea-bellezza/potenza"><img src={potenza} /></Link>
                        <Link to="/aviva/i-nostri-successi/idea-bellezza/robologna"><img src={robologna} /></Link>

                        <Link to="/aviva/i-nostri-successi/idea-bellezza/salerno"><img src={salerno} /></Link>
                        <Link to="/aviva/i-nostri-successi/idea-bellezza/sorrento"><img src={sorrento} /></Link>
                        <Link to="/aviva/i-nostri-successi/idea-bellezza/valmontone"><img src={valmontone} /></Link>
                        <Link to="/aviva/i-nostri-successi/idea-bellezza/vitteman"><img src={vitteman} /></Link>
                    </SimpleGrid>
                    <Text c="white" fz={20} pt={30} align="center" >Idea Bellezza</Text>
                </>
            </AvivaWrapper>
        </>
    )
}