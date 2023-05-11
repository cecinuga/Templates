import AvivaCarousel from "./AvivaCarousel";
import body1 from "../public/aviva/profumerie/body/1.jpg"
import body2 from "../public/aviva/profumerie/body/2.jpg"
import body3 from "../public/aviva/profumerie/body/3.jpg"
import body4 from "../public/aviva/profumerie/body/4.jpg"
import body5 from "../public/aviva/profumerie/body/5.jpg"
import body6 from "../public/aviva/profumerie/body/6.jpg"

export default function AvivaProfumerieBodyPage(){
    return(
        <AvivaCarousel data={[body1, body2, body3,body4, body5, body6]} title={"Profumeria Body & Parfum Pistoia - Viale Adua"}/>
    )
}