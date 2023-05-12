import AvivaMiniaturaPage from "./AvivaMiniaturaPage";
import cosmix from "../public/aviva/successi/cosmix_01_on.jpg"
import cosmix2 from "../public/aviva/successi/cosmix/cosmix_02_on.jpg"
import cosmix3 from "../public/aviva/successi/cosmix/cosmix_03.jpg"
import cosmix4 from "../public/aviva/successi/cosmix/cosmix_04_on.jpg"
import cosmix5 from "../public/aviva/successi/cosmix/cosmix_05_on.jpg"
import cosmix6 from "../public/aviva/successi/cosmix/cosmix_06_on.jpg"

import { Group, Stack, Text } from "@mantine/core";

export default function AvivaSuccessiCosmixPage(){
    return (
        <AvivaMiniaturaPage 
            righe={[{
                href:"/aviva/profumerie/cosmix",
                foto: cosmix,
                descrizione: <span>AVIVA presenta a Milano, per i punti vendita COSMIX STORE, una linea di arredi ecologici. Le scelte dei materiali che caratterizzano questi allestimenti sono orientate al rispetto per l’ambiente, alla salute dei clienti e all’ incentivazione di uno sviluppo ecosostenibile. Abbiamo scelto come materiale principale i pannelli in OSB (oriented strand board), materiale ottenuto dall’assemblaggio di schegge di legno. Si ottiene attraverso l' utilizzo di alberi a piccolo fusto la cui ricrescita avviene in pochi anni ed è pianificata dai produttori stessi.                </span>,
            },{
                href:"/aviva/profumerie/cosmix",
                foto: cosmix2,
                descrizione: <span>La riforestazione avviene a ciclo continuo e non si mette in atto nessun processo di impoverimento del patrimonio forestale esistente caratterizzato da alberi ad alto fusto. I pannelli ecologici utilizzati per realizzare gli elementi di arredo non emettono formaldeide o altre sostanze nocive per la salute dell’uomo. Abbiamo assemblato i pannelli con materiali antichi come ferro e vetro con l’intento di proporre una felice sintesi tra arcaico e tecnologico, uso e riuso, risorse naturali e risorse naturate.                </span>,
            },{
                href:"/aviva/profumerie/cosmix",
                foto: cosmix3,
                descrizione: <span>L’utilizzo dei pannelli in OSB come materiale preponderante ha determinato una forte caratterizzazione del punto di vendita Cosmix: la scelta filosofica si è confermata scelta stilistica. L' accostamento all' ecologia diventa elemento distintivo dei punti vendita della catena,un’ ambientazione che, pur nel rispetto dell’ ecosistema, corrisponde ai requisiti di funzionalità ed estetica prefissati.</span>,
            }]}  
            footer={
                <Stack>
                    <Group><img style={{paddingLeft:"3rem", paddingRight:"3rem"}} src={cosmix4}/><img style={{paddingLeft:"3rem", paddingRight:"3rem"}} src={cosmix5}/><img style={{paddingLeft:"3rem", paddingRight:"3rem"}} src={cosmix6}/></Group>
                    <Text c="white" fz={20} align="center" pt="10">Cosmix Store Milano - Via A. Pianella 1, Via G.B. Pirelli 32, Via G. Da Milano 7</Text>
                </Stack>
            }    
        />
    )
}