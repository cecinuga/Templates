import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/profumerie/pinalli/piacenza/1.jpg"
import star2 from "../public/aviva/profumerie/pinalli/piacenza/2.jpg"
import star3 from "../public/aviva/profumerie/pinalli/piacenza/3.jpg"
import star4 from "../public/aviva/profumerie/pinalli/piacenza/4.jpg"
import star5 from "../public/aviva/profumerie/pinalli/piacenza/5.jpg"
import star6 from "../public/aviva/profumerie/pinalli/piacenza/6.jpg"

export default function AvivaProfumeriePiacenzaPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3,star4, star5, star6]} title={"Profumeria Pinalli La Spezia - Corso Cavour 102"}/>
    )
}