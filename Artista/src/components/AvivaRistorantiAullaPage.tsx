import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/ristoranti/aulla/1.jpg"
import star2 from "../public/aviva/ristoranti/aulla/2.jpg"
import star3 from "../public/aviva/ristoranti/aulla/3.jpg"
import star4 from "../public/aviva/ristoranti/aulla/4.jpg"
import star5 from "../public/aviva/ristoranti/aulla/5.jpg"
import star6 from "../public/aviva/ristoranti/aulla/6.jpg"
import pdf from "../public/aviva/ristoranti/aulla/aulla.pdf"

export default function AvivaRistorantiAullaPage(){
    return(
        <AvivaCarousel pdf={pdf} bottone={"PDF VERSION"} data={[star1, star2, star3, star4, star5,star6]} title={"AULLA composizione tipo"}/>
    )
}