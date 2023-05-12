import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/kids/mkerbosa/1.jpg"
import star2 from "../public/aviva/kids/mkerbosa/2.jpg"
import star3 from "../public/aviva/kids/mkerbosa/3.jpg"
import star4 from "../public/aviva/kids/mkerbosa/4.jpg"
import star5 from "../public/aviva/kids/mkerbosa/5.jpg"

export default function AvivaKidsMkErbosaPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3,star4, star5]} title={"Magikabula Firenze - Via Erbosa 36"}/>
    )
}