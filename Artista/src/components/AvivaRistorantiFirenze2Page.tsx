import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/ristoranti/ipandipino/1.jpg"
import star2 from "../public/aviva/ristoranti/ipandipino/2.jpg"
import star3 from "../public/aviva/ristoranti/ipandipino/3.jpg"
import star4 from "../public/aviva/ristoranti/ipandipino/4.jpg"
import star5 from "../public/aviva/ristoranti/ipandipino/5.jpg"
import star6 from "../public/aviva/ristoranti/ipandipino/6.jpg"
import star7 from "../public/aviva/ristoranti/ipandipino/7.jpg"

export default function AvivaRistorantiPratoPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3, star4, star5,star6,star7]} title={"Lounge bar Firenze"}/>
    )
}