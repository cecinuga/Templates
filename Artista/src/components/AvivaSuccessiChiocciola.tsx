import AvivaMiniaturaPage from "./AvivaMiniaturaPage";
import foto1 from '../public/aviva/successi/chiocciola/lachiocciola_01_on.jpg'
import foto2 from '../public/aviva/successi/chiocciola/lachiocciola_02_on.jpg'
import foto3 from '../public/aviva/successi/chiocciola/lachiocciola_03_on.jpg'
import foto4 from '../public/aviva/successi/chiocciola/lachiocciola_04_on.jpg'
import foto5 from '../public/aviva/successi/chiocciola/lachiocciola_05_on.jpg'
import foto6 from '../public/aviva/successi/chiocciola/lachiocciola_06_on.jpg'
import { Group, Stack, Text } from "@mantine/core";

export default function AvivaSuccessiChiocciolaPage(){
    return(
        <>
            <AvivaMiniaturaPage righe={[
            {
                foto: foto1,
                descrizione: "L’organizzazione dello spazio di vendita è determinante per ottimizzare l’esposizione dei prodotti e indurre il cliente all’acquisto. L’ingresso a destra consente di suggerire la prima parte del percorso all’interno del negozio: il cliente si dirige senza esitazioni verso l’area dei profumi, core business della profumeria. La razionale organizzazione degli spazi espositivi consente al cliente di sentirsi libero di scegliere quando e cosa privilegiare, ma nello stesso tempo lo orienta verso l’area del trucco di largo consumo.                "
            },
            {
                foto: foto2,
                descrizione:"Al centro confluiscono e si dipanano i percorsi interni, scanditi da elementi di arredo, che variano in funzione degli articoli esposti. Le differenze determinano la riconoscibilità del reparto confermata dalla segnaletica. Il cliente attratto dall’appeal di espositori più emozionali si sofferma sugli accessori esposti in maniera tale da favorire l’acquisto di impulso. Il cliente prosegue il suo percorso, in funzione degli acquisti programmati, verso l’area del mass market, collocata in posizione più arretrata.                "
            },
            {
                foto: foto3,
                descrizione: "I prodotti sono ‘venduti’ da espositori molto funzionali che privilegiano la razionale e rilevante esposizione degli stessi. Le testate invece propongono, attraverso elementi di arredo più dialoganti, prodotti destinati all’acquisto di impulso. La naturale circolarità del percorso determina l’impatto con la cosmesi. L’area destinata ai prodotti per la cura della bellezza si trova nell’ultima parte del percorso, prima di raggiungere le casse e quindi l’uscita.                "
            }]} 
            footer={
                <Stack w="55%" pt={20}>
                    <Group position="left">
                        <Text w="30%" fz={12} c="white">Il flusso dei clienti è ridotto e i piccoli ‘altari’ dedicati alle aziende leader definiscono piccole oasi di riservatezza, garantendo la privacy necessaria per l’acquisto di prodotti di target alto.</Text>
                        <img src={foto4} /><img src={foto5} /><img src={foto6} />
                    </Group>
                    <Text c="white" fz={20} align="center" pt="10">La Chiocciola Follonica (GR)</Text>
                </Stack>
            }   
            />
        </>
    )
}