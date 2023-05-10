import AvivaMiniaturaPage from "./AvivaMiniaturaPage";
import viacavour from "../public/aviva/successi/cavour_01_on.jpg"
import viacavour2 from "../public/aviva/successi/cavour/cavour_0_on.jpg"
import viacavour3 from "../public/aviva/successi/cavour/cavour_03_on.jpg"
import viacavour4 from "../public/aviva/successi/cavour/cavour_04_on.jpg"
import viacavour5 from "../public/aviva/successi/cavour/cavour_05_on.jpg"
import viacavour6 from "../public/aviva/successi/cavour/cavour_06_on.jpg"

import { Group, Stack, Text } from "@mantine/core";

export default function AvivaSuccessiViaCavourPage(){
    return (
        <AvivaMiniaturaPage 
            righe={[{
                foto: viacavour,
                descrizione: <span>AVIVA si confronta con la storia. Un suggestivo chiostro settecentesco reinventato si trasforma in un moderno tempio dei profumi. La reinterpretazione in chiave contemporanea di un luogo del passato ci ha indotto a evitare un intervento di mera mimesi o banale citazione stilistica. Abbiamo cercato di individuare soluzioni che consentivano di coniugare le contemplative evocazioni della memoria con le pragmatiche funzionalità del presente.</span>,
                orientamento: "left"
            },{
                foto: viacavour2,
                descrizione: <span>Il cliente non trova barriere all’ingresso, il naturale percorrere lo introduce morbidamente all’interno del negozio: la strada Via Cavour prosegue senza soluzione di continuità all’interno della profumeria. Il lay out rigoroso ed equilibrato, la lucida geometria che ispira i percorsi interni, gli accostamenti di materiali diversi e la consapevole distribuzione dei flussi di luce consentono ai prodotti esposti di insidiare la sacrale supremazia del luogo.</span>,
                orientamento: "left"
            },{
                foto: viacavour3,
                descrizione: <span>Dalle rassicuranti venature del castagno alle glaciali linearità dell’acciaio, dalla compatta opacità della pietra alla trasparente leggerezza del vetro: dalle preziose tracce del passato il presente prende forma. Le simmetrie classiche ispirano i funzionali percorsi espositivi. Le imponenti<br/> colonne di pietra serena determinano il ritmo ordinato degli spazi interni. Gli arredi progettati e realizzati in funzione del luogo impongono una vivace dimensione dialettica all’ icasticità dell’ambiente architettonico.</span>,
                orientamento: "left"
            }]}  
            footer={
                <Stack>
                    <Group><img style={{paddingLeft:"3rem", paddingRight:"3rem"}} src={viacavour4}/><img style={{paddingLeft:"3rem", paddingRight:"3rem"}} src={viacavour5}/><img style={{paddingLeft:"3rem", paddingRight:"3rem"}} src={viacavour6}/></Group>
                    <Text c="white" fz={20} align="center" pt="10">Profumeria Internazionale Firenze - Via Cavour</Text>
                </Stack>
            }    
        />
    )
}