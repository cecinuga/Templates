import AvivaCarousel from "./AvivaCarousel";
import chiocciola1 from "../public/aviva/profumerie/chiocciola/1.jpg"
import chiocciola2 from "../public/aviva/profumerie/chiocciola/2.jpg"
import chiocciola3 from "../public/aviva/profumerie/chiocciola/3.jpg"
import chiocciola5 from "../public/aviva/profumerie/chiocciola/5.jpg"
import chiocciola6 from "../public/aviva/profumerie/chiocciola/6.jpg"

export default function AvivaProfumerieChiocciolaPage(){
    return(
        <AvivaCarousel data={[chiocciola1, chiocciola2, chiocciola3, chiocciola5, chiocciola6]} title={"Profumeria La Chiocciola Follonica (GR)"}/>
    )
}