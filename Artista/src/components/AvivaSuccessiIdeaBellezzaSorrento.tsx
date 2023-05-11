import AvivaCarousel from "./AvivaCarousel";
import sorrento1 from "../public/aviva/successi/ideabellezza/sorrento/1.jpg"
import sorrento2 from "../public/aviva/successi/ideabellezza/sorrento/2.jpg"
import sorrento3 from "../public/aviva/successi/ideabellezza/sorrento/3.jpg"
import sorrento4 from "../public/aviva/successi/ideabellezza/sorrento/4.jpg"
import sorrento5 from "../public/aviva/successi/ideabellezza/sorrento/5.jpg"
import sorrento6 from "../public/aviva/successi/ideabellezza/sorrento/6.jpg"

export default function AvivaSuccessiIdeaBellezzasorrento(){
    return(
        <AvivaCarousel data={[sorrento1, sorrento2, sorrento3, sorrento4, sorrento5, sorrento6]} title={"Profumeria Idea Sorrento (NA) - Via Correale 11"}/>
    )
}