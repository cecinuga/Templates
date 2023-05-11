import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/fashion/newyork/1.jpg"
import star2 from "../public/aviva/fashion/newyork/2.jpg"
import star3 from "../public/aviva/fashion/newyork/3.jpg"
import star4 from "../public/aviva/fashion/newyork/4.jpg"
import star5 from "../public/aviva/fashion/newyork/5.jpg"

export default function AvivaProfumerieNewYorkPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3,star4, star5]} title={"Boutique BRACCIALINI New York 436/8 West Broadway Soho"}/>
    )
}