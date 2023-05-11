import AvivaCarousel from "./AvivaCarousel";
import foggia1 from "../public/aviva/successi/ideabellezza/foggia/1.jpg"
import foggia2 from "../public/aviva/successi/ideabellezza/foggia/2.jpg"
import foggia3 from "../public/aviva/successi/ideabellezza/foggia/3.jpg"
import foggia4 from "../public/aviva/successi/ideabellezza/foggia/4.jpg"
import foggia5 from "../public/aviva/successi/ideabellezza/foggia/5.jpg"
import foggia6 from "../public/aviva/successi/ideabellezza/foggia/6.jpg"
import foggia7 from "../public/aviva/successi/ideabellezza/foggia/7.jpg"

export default function AvivaSuccessiIdeaBellezzaFoggia(){
    return(
        <AvivaCarousel data={[foggia1, foggia2, foggia3, foggia4, foggia5, foggia6, foggia7]} title={"Profumeria Idea Bellezza Foggia - Piazza Marconi 1"}/>
    )
}