import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/fashion/nnarezzo/1.jpg"
import star2 from "../public/aviva/fashion/nnarezzo/2.jpg"
import star3 from "../public/aviva/fashion/nnarezzo/3.jpg"
import star4 from "../public/aviva/fashion/nnarezzo/4.jpg"
import star5 from "../public/aviva/fashion/nnarezzo/5.jpg"
import star6 from "../public/aviva/fashion/nnarezzo/6.jpg"

export default function AvivaProfumerieNNArezzoPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3,star4, star5, star6]} title={"Boutique NANNINI Arezzo - Corso Italia 231"}/>
    )
}