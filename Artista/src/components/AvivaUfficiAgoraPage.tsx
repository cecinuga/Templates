import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/uffici/agora/1.jpg"
import star2 from "../public/aviva/uffici/agora/2.jpg"
import star3 from "../public/aviva/uffici/agora/3.jpg"
import star4 from "../public/aviva/uffici/agora/4.jpg"
import star5 from "../public/aviva/uffici/agora/5.jpg"

export default function AvivaUfficiAgoraPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3, star4,star5]} title={"Grand Agorà Dubai"}/>
    )
}