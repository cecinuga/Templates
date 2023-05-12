import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/uffici/oberon/1.jpg"
import star2 from "../public/aviva/uffici/oberon/2.jpg"
import star3 from "../public/aviva/uffici/oberon/3.jpg"
import star4 from "../public/aviva/uffici/oberon/4.jpg"

export default function AvivaUfficiOberonPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3, star4]} title={"Farmacia Moschettini Napoli - Via M. Piscielli 138"}/>
    )
}