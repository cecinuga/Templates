import AvivaCarousel from "./AvivaCarousel";
import potenza1 from "../public/aviva/successi/ideabellezza/potenza/1.jpg"
import potenza2 from "../public/aviva/successi/ideabellezza/potenza/2.jpg"
import potenza3 from "../public/aviva/successi/ideabellezza/potenza/3.jpg"
import potenza4 from "../public/aviva/successi/ideabellezza/potenza/4.jpg"
import potenza5 from "../public/aviva/successi/ideabellezza/potenza/5.jpg"
import potenza6 from "../public/aviva/successi/ideabellezza/potenza/6.jpg"
import potenza7 from "../public/aviva/successi/ideabellezza/potenza/7.jpg"

export default function AvivaSuccessiIdeaBellezzaPotenza(){
    return(
        <AvivaCarousel data={[potenza1, potenza2, potenza3, potenza4, potenza5, potenza6, potenza7]} title={"Profumeria Idea potenza - Via Lucana 30"}/>
    )
}