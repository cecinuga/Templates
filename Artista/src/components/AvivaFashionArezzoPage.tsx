import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/fashion/braarezzo/1.jpg"
import star2 from "../public/aviva/fashion/braarezzo/2.jpg"
import star3 from "../public/aviva/fashion/braarezzo/3.jpg"
import star4 from "../public/aviva/fashion/braarezzo/4.jpg"
import star5 from "../public/aviva/fashion/braarezzo/5.jpg"

export default function AvivaProfumerieArezzoPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3,star4, star5]} title={"Boutique BRACCIALINI Arezzo - Corso Italia 136"}/>
    )
}