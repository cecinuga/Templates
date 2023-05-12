import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/ristoranti/cronta/1.jpg"
import star2 from "../public/aviva/ristoranti/cronta/2.jpg"
import star3 from "../public/aviva/ristoranti/cronta/3.jpg"
import star4 from "../public/aviva/ristoranti/cronta/4.jpg"
import star5 from "../public/aviva/ristoranti/cronta/5.jpg"
import star6 from "../public/aviva/ristoranti/cronta/6.jpg"
import star7 from "../public/aviva/ristoranti/cronta/7.jpg"

export default function AvivaRistorantiCaglairiPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3, star4, star5,star6,star7]} title={"Cronta enoteca wine bar Cagliari - Viale Diaz 21"}/>
    )
}