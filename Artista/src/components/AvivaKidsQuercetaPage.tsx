import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/kids/priquerce/1.jpg"
import star2 from "../public/aviva/kids/priquerce/2.jpg"
import star3 from "../public/aviva/kids/priquerce/3.jpg"

export default function AvivaKidsPontederaPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3]} title={"PRIMIGI Firenze - Via Madonna della Querce 6d-e-f"}/>
    )
}