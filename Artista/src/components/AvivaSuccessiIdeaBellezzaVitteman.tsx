import AvivaCarousel from "./AvivaCarousel";
import vitteman1 from "../public/aviva/successi/ideabellezza/vitteman/1.jpg"
import vitteman2 from "../public/aviva/successi/ideabellezza/vitteman/2.jpg"
import vitteman3 from "../public/aviva/successi/ideabellezza/vitteman/3.jpg"
import vitteman4 from "../public/aviva/successi/ideabellezza/vitteman/4.jpg"
import vitteman5 from "../public/aviva/successi/ideabellezza/vitteman/5.jpg"
import vitteman6 from "../public/aviva/successi/ideabellezza/vitteman/6.jpg"

export default function AvivaSuccessiIdeaBellezzaVitteman(){
    return(
        <AvivaCarousel data={[vitteman1, vitteman2, vitteman3, vitteman4, vitteman5, vitteman6]} title={"Profumeria Idea Bellezza Roma - Corso Vittorio Emanuele II 15"}/>
    )
}