import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/uffici/areonautica/1.jpg"
import star2 from "../public/aviva/uffici/areonautica/2.jpg"
import star3 from "../public/aviva/uffici/areonautica/3.jpg"
import star4 from "../public/aviva/uffici/areonautica/4.jpg"

export default function AvivaUfficiAreonauticaPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3, star4]} title={"GCAA Abu Dhabi office"}/>
    )
}