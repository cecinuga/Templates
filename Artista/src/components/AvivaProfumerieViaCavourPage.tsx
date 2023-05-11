import AvivaCarousel from "./AvivaCarousel";
import viacavour1 from "../public/aviva/profumerie/viacavour/1.jpg"
import viacavour2 from "../public/aviva/profumerie/viacavour/2.jpg"
import viacavour3 from "../public/aviva/profumerie/viacavour/3.jpg"
import viacavour5 from "../public/aviva/profumerie/viacavour/5.jpg"
import viacavour6 from "../public/aviva/profumerie/viacavour/6.jpg"

export default function AvivaProfumerieViaCavourPage(){
    return(
        <AvivaCarousel data={[viacavour1, viacavour2, viacavour3, viacavour5, viacavour6]} title={"Profumeria Internazionale Firenze - Via Cavour"}/>
    )
}