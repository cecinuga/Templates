import AvivaCarousel from "./AvivaCarousel";
import robologna1 from "../public/aviva/successi/ideabellezza/robologna/1.jpg"
import robologna2 from "../public/aviva/successi/ideabellezza/robologna/2.jpg"
import robologna3 from "../public/aviva/successi/ideabellezza/robologna/3.jpg"
import robologna4 from "../public/aviva/successi/ideabellezza/robologna/4.jpg"
import robologna5 from "../public/aviva/successi/ideabellezza/robologna/5.jpg"
import robologna6 from "../public/aviva/successi/ideabellezza/robologna/6.jpg"
import robologna7 from "../public/aviva/successi/ideabellezza/robologna/7.jpg"

export default function AvivaSuccessiIdeaBellezzaRobologna(){
    return(
        <AvivaCarousel data={[robologna1, robologna2, robologna3, robologna4, robologna5, robologna6, robologna7]} title={"Profumeria Idea Bellezza Roma - Piazza Bologna"}/>
    )
}