import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/profumerie/etrusca/1.jpg"
import star2 from "../public/aviva/profumerie/etrusca/2.jpg"
import star3 from "../public/aviva/profumerie/etrusca/3.jpg"
import star4 from "../public/aviva/profumerie/etrusca/4.jpg"
import star5 from "../public/aviva/profumerie/etrusca/5.jpg"
import star6 from "../public/aviva/profumerie/etrusca/6.jpg"

export default function AvivaProfumerieEtruscaPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3,star4, star5, star6]} title={"Profumeria Etrusca Arezzo - Valdichiana Outlet Village"}/>
    )
}