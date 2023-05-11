import AvivaCarousel from "./AvivaCarousel";
import matera1 from "../public/aviva/successi/ideabellezza/matera/1.jpg"
import matera2 from "../public/aviva/successi/ideabellezza/matera/2.jpg"
import matera3 from "../public/aviva/successi/ideabellezza/matera/3.jpg"
import matera4 from "../public/aviva/successi/ideabellezza/matera/4.jpg"
import matera5 from "../public/aviva/successi/ideabellezza/matera/5.jpg"
import matera6 from "../public/aviva/successi/ideabellezza/matera/6.jpg"
import matera7 from "../public/aviva/successi/ideabellezza/matera/7.jpg"

export default function AvivaSuccessiIdeaBellezzaMatera(){
    return(
        <AvivaCarousel data={[matera1, matera2, matera3, matera4, matera5, matera6, matera7]} title={"Profumeria Idea Matera - Via Lucana 30"}/>
    )
}