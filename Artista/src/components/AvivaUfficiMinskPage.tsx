import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/uffici/minsk/1.jpg"
import star2 from "../public/aviva/uffici/minsk/2.jpg"
import star3 from "../public/aviva/uffici/minsk/3.jpg"

export default function AvivaUfficiMinskPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3]} title={"Ufficio direzionale Minsk"}/>
    )
}