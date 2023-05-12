import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/ristoranti/pune/1.jpg"

export default function AvivaRistorantiPunePage(){
    return(
        <AvivaCarousel data={[star1]} title={"Pune"}/>
    )
}