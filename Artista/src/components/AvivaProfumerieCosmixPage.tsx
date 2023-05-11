import AvivaCarousel from "./AvivaCarousel";
import cosmix1 from "../public/aviva/profumerie/cosmix/1.jpg"
import cosmix2 from "../public/aviva/profumerie/cosmix/2.jpg"
import cosmix3 from "../public/aviva/profumerie/cosmix/3.jpg"
import cosmix4 from "../public/aviva/profumerie/cosmix/4.jpg"
import cosmix5 from "../public/aviva/profumerie/cosmix/5.jpg"
import cosmix6 from "../public/aviva/profumerie/cosmix/6.jpg"

export default function AvivaProfumerieCosmixPage(){
    return(
        <AvivaCarousel data={[cosmix1, cosmix2, cosmix3,cosmix4, cosmix5, cosmix6]} title={"Profumeria Cosmix Store"}/>
    )
}