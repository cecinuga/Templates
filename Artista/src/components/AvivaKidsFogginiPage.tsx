import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/kids/prifoggini/1.jpg"
import star2 from "../public/aviva/kids/prifoggini/2.jpg"
import star3 from "../public/aviva/kids/prifoggini/3.jpg"
import star4 from "../public/aviva/kids/prifoggini/4.jpg"

export default function AvivaKidsPriFogginiPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3,star4]} title={"PRIMIGI Firenze - Via Foggini 34"}/>
    )
}