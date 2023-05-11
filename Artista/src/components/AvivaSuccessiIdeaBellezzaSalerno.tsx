import AvivaCarousel from "./AvivaCarousel";
import salerno1 from "../public/aviva/successi/ideabellezza/salerno/1.jpg"
import salerno2 from "../public/aviva/successi/ideabellezza/salerno/2.jpg"
import salerno3 from "../public/aviva/successi/ideabellezza/salerno/3.jpg"
import salerno4 from "../public/aviva/successi/ideabellezza/salerno/4.jpg"
import salerno5 from "../public/aviva/successi/ideabellezza/salerno/5.jpg"
import salerno6 from "../public/aviva/successi/ideabellezza/salerno/6.jpg"

export default function AvivaSuccessiIdeaBellezzaSalerno(){
    return(
        <AvivaCarousel data={[salerno1, salerno2, salerno3, salerno4, salerno5, salerno6]} title={"Profumeria Idea Salerno - Piazza Barracano 2"}/>
    )
}