import AvivaCarousel from "./AvivaCarousel";
import marianna1 from "../public/aviva/profumerie/marianna/1.jpg"
import marianna2 from "../public/aviva/profumerie/marianna/2.jpg"
import marianna3 from "../public/aviva/profumerie/marianna/3.jpg"
import marianna4 from "../public/aviva/profumerie/marianna/4.jpg"
import marianna5 from "../public/aviva/profumerie/marianna/5.jpg"
import marianna6 from "../public/aviva/profumerie/marianna/6.jpg"

export default function AvivaProfumeriemariannaPage(){
    return(
        <AvivaCarousel data={[marianna1, marianna2, marianna3,marianna4, marianna5, marianna6]} title={"Profumeria Marionnaud Marghera (VE) - Piazza Mercato 20"}/>
    )
}