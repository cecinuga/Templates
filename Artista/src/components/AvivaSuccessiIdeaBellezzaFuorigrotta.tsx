import AvivaCarousel from "./AvivaCarousel";
import fuorigrotta1 from "../public/aviva/successi/ideabellezza/fuorigrotta/1.jpg"
import fuorigrotta2 from "../public/aviva/successi/ideabellezza/fuorigrotta/2.jpg"
import fuorigrotta3 from "../public/aviva/successi/ideabellezza/fuorigrotta/3.jpg"
import fuorigrotta4 from "../public/aviva/successi/ideabellezza/fuorigrotta/4.jpg"
import fuorigrotta5 from "../public/aviva/successi/ideabellezza/fuorigrotta/5.jpg"
import fuorigrotta6 from "../public/aviva/successi/ideabellezza/fuorigrotta/6.jpg"
import fuorigrotta7 from "../public/aviva/successi/ideabellezza/fuorigrotta/7.jpg"

export default function AvivaSuccessiIdeaBellezzaFuorigrotta(){
    return(
        <AvivaCarousel data={[fuorigrotta1, fuorigrotta2, fuorigrotta3, fuorigrotta4, fuorigrotta5, fuorigrotta6, fuorigrotta7]} title={"Profumeria Idea Bellezza Fuorigrotta (NA) - Largo Lala 22"}/>
    )
}