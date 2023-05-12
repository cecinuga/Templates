import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/ristoranti/budapest/1.jpg"
import star2 from "../public/aviva/ristoranti/budapest/2.jpg"
import star3 from "../public/aviva/ristoranti/budapest/3.jpg"
import star4 from "../public/aviva/ristoranti/budapest/4.jpg"
import star5 from "../public/aviva/ristoranti/budapest/5.jpg"
import pdf from "../public/aviva/ristoranti/budapest/budapest.pdf"

export default function AvivaRistorantiBudapestPage(){
    return(
        <AvivaCarousel pdf={pdf} bottone={"PDF VERSION"} data={[star1, star2, star3, star4, star5]} title={"Suite BUDAPEST"}/>
    )
}