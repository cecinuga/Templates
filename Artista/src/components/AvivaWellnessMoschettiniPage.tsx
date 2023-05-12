import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/wellness/moschettini/1.jpg"
import star2 from "../public/aviva/wellness/moschettini/2.jpg"
import star3 from "../public/aviva/wellness/moschettini/3.jpg"
import star4 from "../public/aviva/wellness/moschettini/4.jpg"
import star5 from "../public/aviva/wellness/moschettini/5.jpg"
import star6 from "../public/aviva/wellness/moschettini/6.jpg"

export default function AvivaKidsViareggioPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3, star4, star5, star6]} title={"Farmacia Moschettini Napoli - Via M. Piscielli 138"}/>
    )
}