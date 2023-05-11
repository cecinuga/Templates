import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/fashion/nnmilano/1.jpg"
import star2 from "../public/aviva/fashion/nnmilano/2.jpg"
import star3 from "../public/aviva/fashion/nnmilano/3.jpg"
import star4 from "../public/aviva/fashion/nnmilano/4.jpg"
import star5 from "../public/aviva/fashion/nnmilano/5.jpg"
import star6 from "../public/aviva/fashion/nnmilano/6.jpg"

export default function AvivaProfumerieNNMilanoPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3,star4, star5, star6]} title={"Boutique NANNINI Milano - Corso Buenos Aires 60"}/>
    )
}