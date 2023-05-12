import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/wellness/centrobenessere/1.jpg"
import star2 from "../public/aviva/wellness/centrobenessere/2.jpg"
import star3 from "../public/aviva/wellness/centrobenessere/3.jpg"
import star4 from "../public/aviva/wellness/centrobenessere/4.jpg"

export default function AvivaKidsViareggioPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3, star4]} title={"Centro Benessere"}/>
    )
}