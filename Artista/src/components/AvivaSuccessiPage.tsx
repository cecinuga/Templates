import { SimpleGrid, Text } from "@mantine/core";
import AvivaWrapper from "./AvivaWrapper";
import viacavour from "../public/aviva/successi/cavour_01_on.jpg"
import body from "../public/aviva/successi/body_01_on.jpg"
import cosmiz from "../public/aviva/successi/cosmix_01_on.jpg"
import chiocciola from "../public/aviva/successi/lachiocciola_01_on.jpg"
import prof from "../public/aviva/successi/prof_idea_on.jpg"
import prof2 from "../public/aviva/successi/prof_pinalli_on.jpg"
import Miniatura from "./Miniatura";
import pdf from "../public/aviva/successi/redpinalli.pdf"

export default function AvivaSuccessiPage(){

    return(
        <>
            <AvivaWrapper >
                <>
                    <SimpleGrid
                        cols={2}
                        spacing={5}
                        pr={0}
                    >   
                        <Miniatura to="/i-nostri-successi/via-cavour" foto={viacavour} desc={"..un suggestivo chiostro settecentesco reinventato si trasforma.."}/>
                        <Miniatura to="/i-nostri-successi/body-parfum" foto={body} desc={"..quando la scelta filosoficasi è confermata scelta stilistica.."}/>

                        <Miniatura to="/i-nostri-successi/cosmix-store" foto={cosmiz} desc={"..come un magazzinopossa essere trasformato in una profumeria dall’atmosfera molto esclusiva.."}/>
                        <Miniatura to="/i-nostri-successi/la-chiocciola" foto={chiocciola} desc={"..quando l'azienda di arredi incontra il profumiere/imprenditore che ha entusiasmo e coraggio è possibile.."}/>

                        <Miniatura to="/i-nostri-successi/idea-bellezza" foto={prof} desc={"	..la razionale organizzazione degli spazi espositivi consente al cliente di scegliere.."}/>
                        <Miniatura to={pdf} external foto={prof2} desc={"..l'obiettivo del format è quello di avvicinare un maggior numero di persone ai prodotti top di gamma.."}/>
                        <Text c="white" pt={76}><strong>I Nostri Successi</strong></Text>

                    </SimpleGrid>
                </>
            </AvivaWrapper>
        </>
    )
}