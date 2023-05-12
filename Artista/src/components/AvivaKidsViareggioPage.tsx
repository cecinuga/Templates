import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/kids/priviareggio/1.jpg"
import star2 from "../public/aviva/kids/priviareggio/2.jpg"
import star3 from "../public/aviva/kids/priviareggio/3.jpg"

export default function AvivaKidsViareggioPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3]} title={"PRIMIGI Viareggio (LU) - Viale Manin 31"}/>
    )
}