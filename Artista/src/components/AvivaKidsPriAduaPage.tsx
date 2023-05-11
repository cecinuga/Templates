import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/kids/priadua/1.jpg"
import star2 from "../public/aviva/kids/priadua/2.jpg"
import star3 from "../public/aviva/kids/priadua/3.jpg"

export default function AvivaKidsPriAduaPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3,]} title={"PRIMIGI Pistoia - Viale Adua 239"}/>
    )
}