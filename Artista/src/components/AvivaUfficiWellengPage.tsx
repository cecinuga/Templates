import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/uffici/welleng/1.jpg"
import star2 from "../public/aviva/uffici/welleng/2.jpg"
import star3 from "../public/aviva/uffici/welleng/3.jpg"
import star4 from "../public/aviva/uffici/welleng/4.jpg"

export default function AvivaUfficiWellengPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3, star4]} title={"SPD Well Engineering Service Dubai"}/>
    )
}