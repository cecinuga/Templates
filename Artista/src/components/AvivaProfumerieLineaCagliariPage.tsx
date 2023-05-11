import AvivaCarousel from "./AvivaCarousel";
import caglairi1 from "../public/aviva/profumerie/lineabellezza/cagliari/1.jpg"
import caglairi2 from "../public/aviva/profumerie/lineabellezza/cagliari/2.jpg"
import caglairi3 from "../public/aviva/profumerie/lineabellezza/cagliari/3.jpg"
import caglairi4 from "../public/aviva/profumerie/lineabellezza/cagliari/4.jpg"
import caglairi5 from "../public/aviva/profumerie/lineabellezza/cagliari/5.jpg"
import caglairi6 from "../public/aviva/profumerie/lineabellezza/cagliari/6.jpg"

export default function AvivaProfumerieCaglairiPage(){
    return(
        <AvivaCarousel data={[caglairi1, caglairi2, caglairi3,caglairi4, caglairi5, caglairi6]} title={"Profumeria Linea Bellezza Cagliari - Via Paoli 30"}/>
    )
}