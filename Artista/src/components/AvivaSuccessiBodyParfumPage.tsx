import AvivaMiniaturaPage from "./AvivaMiniaturaPage";
import foto1 from '../public/aviva/successi/parfum/body_01_on.jpg'
import foto2 from '../public/aviva/successi/parfum/body_02_on.jpg'
import foto3 from '../public/aviva/successi/parfum/body_03_on.jpg'
import foto4 from '../public/aviva/successi/parfum/body_04_on.jpg'
import foto5 from '../public/aviva/successi/parfum/body_05_on.jpg'
import foto6 from '../public/aviva/successi/parfum/body_06_on.jpg'
import { Stack, Text } from "@mantine/core";

export default function AvivaSuccessiBodyParfumPage(){
    return(
        <>
            <AvivaMiniaturaPage righe={[{
                foto: foto1,
                descrizione: "Il punto vendita Body & Parfum ci consente di mostrare come anche un anonimo magazzino possa essere trasformato in una profumeria dall’atmosfera molto esclusiva. Attraverso l’uso di elementi architettonici effimeri, l’accostamento di materiali diversi come legno e acciaio inox, vetro e alluminio, AVIVA costruisce l’immagine della catena Body & Parfum; la reiterazione degli elementi caratterizzanti accomuna le profumerie con questa insegna.                "
            },
            {
                foto: foto2,
                descrizione:"L’ampio parcheggio, segnato da percorsi pedonali in marmo bianco di Carrara, prepara l’accesso alla profumeria. Lo spazio architettonico interno è caratterizzato da una copertura a capanna poggiante su un sistema di archi retti da colonne che scandiscono di volta in volta settori merceologici diversi. Primo elemento impattante, la polivalente scultura in acciaio percepita all’ingresso come punto-accoglienza e all’uscita come banco cassa.                "
            },
            {
                foto: foto3,
                descrizione: "La disposizione degli arredi è molto lineare; le pareti laterali della galleria sono caratterizzate da mobili perimetrali in legno retroilluminati con mensole in vetro che ospitano a destra prodotti per il trattamento ed il trucco e a sinistra profumi. L’intero perimetro del punto vendita è caratterizzato, in alto, da un continuum di visual illuminati che esaltano l’ideale di bellezza e purezza in analogia ai prodotti esposti. Nell’area cosmesi sono stati collocati elementi circolari: L'isola che espone le novità del trucco giovane e il make-up artist che invita alla prova trucco.                "
            },
            {
                foto: foto4,
                descrizione: "Il lay out del punto vendita è molto regolare; Il percorso del cliente è libero anche se idealmente orientato da richiami emozionali che suggeriscono il passaggio da un’area all’altra. Abbiamo individuato il rapporto ottimale tra superficie occupata dagli arredi e superficie libera al fine di garantire la massima redditività al punto vendita e consentire una libera circolazione al cliente. L’area toiletries è caratterizzata da gondole e mobili perimetrali in doghe di alluminio sormontati da fotografie retro-illuminate che richiamano l’uso dei prodotti esposti.                "
            },
            {
                foto: foto5,
                descrizione: "La disposizione degli arredi a ferro di cavallo circoscrive in una nicchia la movimentata area toiletries, in contrasto con l’elegante effetto seriale determinato dalla razionale esposizione dei profumi. La parete laterale sinistra, l’altra ala della galleria, è caratterizzata da mobili in legno retro-illuminati così come l’area cosmesi. Il fondale luminoso rende eterei, galleggianti, i profumi esposti e nel contempo evidenzia i contrasti cromatici dei packs. La disposizione verticale per brand dei prodotti, culminante in alto nella citazione del visual, accentua l’appeal dell’area profumi.                "
            },
            {
                foto: foto6,
                descrizione: "Il format commerciale proposto consente il libero servizio assistito, in una fase evoluta e matura del consumo di prodotti di bellezza. Le nostre ambientazioni nascono dalla continua ricerca di razionalizzazione degli spazi espositivi per ottimizzare la superficie di vendita e garantire la massima redditività dei negozi; Allo stesso tempo sono caratterizzate da soluzioni originali che determinano l'identità di ogni catena di profumerie e la riconoscibilità del singolo punto vendita.                "
            }]} 
            footer={
                <Stack>
                    <Text c="white" fz={20} align="center" pt="10">Body & Parfum Pistoia - Viale Adua</Text>
                </Stack>
            }   
            />
        </>
    )
}