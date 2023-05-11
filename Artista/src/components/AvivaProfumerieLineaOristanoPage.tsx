import AvivaCarousel from "./AvivaCarousel";
import oristano1 from "../public/aviva/profumerie/lineabellezza/oristano/1.jpg"
import oristano2 from "../public/aviva/profumerie/lineabellezza/oristano/2.jpg"
import oristano3 from "../public/aviva/profumerie/lineabellezza/oristano/3.jpg"
import oristano4 from "../public/aviva/profumerie/lineabellezza/oristano/4.jpg"
import oristano5 from "../public/aviva/profumerie/lineabellezza/oristano/5.jpg"
import oristano6 from "../public/aviva/profumerie/lineabellezza/oristano/6.jpg"

export default function AvivaProfumerieOristanoPage(){
    return(
        <AvivaCarousel data={[oristano1, oristano2, oristano3,oristano4, oristano5, oristano6]} title={"Profumeria Linea Bellezza Oristano - Via Diego Contini "} />
    )
}