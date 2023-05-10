import bari1 from "../public/aviva/successi/ideabellezza/bari/1.jpg"
import bari2 from "../public/aviva/successi/ideabellezza/bari/2.jpg"
import bari3 from "../public/aviva/successi/ideabellezza/bari/3.jpg"
import bari4 from "../public/aviva/successi/ideabellezza/bari/4.jpg"
import bari5 from "../public/aviva/successi/ideabellezza/bari/5.jpg"
import bari6 from "../public/aviva/successi/ideabellezza/bari/6.jpg"
import bari7 from "../public/aviva/successi/ideabellezza/bari/7.jpg"
import AvivaCarousel from "./AvivaCarousel";

export default function AvivaSuccessiIdeaBellezzaBari(){
    return(
        <AvivaCarousel data={[bari1, bari2, bari3, bari4, bari5, bari6, bari7]} title={"Profumeria Idea Bari - Via Calefati 160"}/>
    )
}