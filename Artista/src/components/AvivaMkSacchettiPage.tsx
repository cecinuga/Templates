import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/kids/mksacchetti/1.jpg"
import star2 from "../public/aviva/kids/mksacchetti/2.jpg"
import star3 from "../public/aviva/kids/mksacchetti/3.jpg"
import star4 from "../public/aviva/kids/mksacchetti/4.jpg"

export default function AvivaKidsMkSacchettiPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3,star4]} title={"Magikabula Firenze - Via Sacchetti 12z"}/>
    )
}