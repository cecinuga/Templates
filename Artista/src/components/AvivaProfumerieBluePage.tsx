import AvivaCarousel from "./AvivaCarousel";
import blue1 from "../public/aviva/profumerie/blue/1.jpg"
import blue2 from "../public/aviva/profumerie/blue/2.jpg"
import blue3 from "../public/aviva/profumerie/blue/3.jpg"
import blue4 from "../public/aviva/profumerie/blue/4.jpg"
import blue5 from "../public/aviva/profumerie/blue/5.jpg"
import blue6 from "../public/aviva/profumerie/blue/6.jpg"

export default function AvivaProfumerieBluePage(){
    return(
        <AvivaCarousel data={[blue1, blue2, blue3,blue4, blue5, blue6]} title={"Profumeria Beauty Blue Firenze - Via Canto De' Nelli"}/>
    )
}