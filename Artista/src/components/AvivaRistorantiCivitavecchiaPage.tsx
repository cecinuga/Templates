import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/ristoranti/civitavecchia/1.jpg"
import star2 from "../public/aviva/ristoranti/civitavecchia/2.jpg"
import star3 from "../public/aviva/ristoranti/civitavecchia/3.jpg"
import star4 from "../public/aviva/ristoranti/civitavecchia/4.jpg"
import star5 from "../public/aviva/ristoranti/civitavecchia/5.jpg"
import star6 from "../public/aviva/ristoranti/civitavecchia/6.jpg"
import star7 from "../public/aviva/ristoranti/civitavecchia/7.jpg"

export default function AvivaRistorantiAullaPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3, star4, star5,star6,star7]} title={"Azucar Cafè 29 Dodici Civitavecchia - Via Roma"}/>
    )
}