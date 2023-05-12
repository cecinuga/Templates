import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/kids/pripontedera/1.jpg"
import star2 from "../public/aviva/kids/pripontedera/2.jpg"
import star3 from "../public/aviva/kids/pripontedera/3.jpg"

export default function AvivaKidsPontederaPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3]} title={"PRIMIGI Pontedera (PI) - Via Verdi 25"}/>
    )
}