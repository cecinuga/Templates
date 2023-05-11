import AvivaCarousel from "./AvivaCarousel";
import valmontone1 from "../public/aviva/successi/ideabellezza/valmontone/1.jpg"
import valmontone2 from "../public/aviva/successi/ideabellezza/valmontone/2.jpg"
import valmontone3 from "../public/aviva/successi/ideabellezza/valmontone/3.jpg"
import valmontone4 from "../public/aviva/successi/ideabellezza/valmontone/4.jpg"
import valmontone5 from "../public/aviva/successi/ideabellezza/valmontone/5.jpg"
import valmontone6 from "../public/aviva/successi/ideabellezza/valmontone/6.jpg"

export default function AvivaSuccessiIdeaBellezzavalmontone(){
    return(
        <AvivaCarousel data={[valmontone1, valmontone2, valmontone3, valmontone4, valmontone5, valmontone6]} title={"Profumeria Idea Bellezza Roma - Valmontone Fashion District"}/>
    )
}