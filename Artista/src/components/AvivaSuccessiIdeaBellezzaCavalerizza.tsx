import cavallerizza1 from "../public/aviva/successi/ideabellezza/cavallerizza/1.jpg"
import cavallerizza2 from "../public/aviva/successi/ideabellezza/cavallerizza/2.jpg"
import cavallerizza3 from "../public/aviva/successi/ideabellezza/cavallerizza/3.jpg"
import cavallerizza4 from "../public/aviva/successi/ideabellezza/cavallerizza/4.jpg"
import cavallerizza5 from "../public/aviva/successi/ideabellezza/cavallerizza/5.jpg"
import AvivaCarousel from "./AvivaCarousel";

export default function AvivaSuccessiIdeaBellezzaCavalerizza(){
    return(
        <AvivaCarousel data={[cavallerizza1, cavallerizza2, cavallerizza3, cavallerizza4, cavallerizza5]} title={"Profumeria Idea Bellezza Napoli - Via della Cavallerizza 42"}/>
    )
}