import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/ristoranti/ipandipino/1.jpg"
import star2 from "../public/aviva/ristoranti/ipandipino/2.jpg"
import star3 from "../public/aviva/ristoranti/ipandipino/3.jpg"
import star4 from "../public/aviva/ristoranti/ipandipino/4.jpg"

export default function AvivaRistorantiSEuropaPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3, star4]} title={"Suite Europa"}/>
    )
}