import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/profumerie/pinalli/sarzana/1.jpg"
import star2 from "../public/aviva/profumerie/pinalli/sarzana/2.jpg"
import star3 from "../public/aviva/profumerie/pinalli/sarzana/3.jpg"
import star4 from "../public/aviva/profumerie/pinalli/sarzana/4.jpg"
import star5 from "../public/aviva/profumerie/pinalli/sarzana/5.jpg"
import star6 from "../public/aviva/profumerie/pinalli/sarzana/6.jpg"

export default function AvivaProfumerieSarzanaPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3,star4, star5, star6]} title={"Profumeria Pinalli Sarzana (SP) - Via Emiliana Variante Aurelia 72"}/>
    )
}