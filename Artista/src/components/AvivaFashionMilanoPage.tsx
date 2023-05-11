import AvivaCarousel from "./AvivaCarousel";
import star1 from "../public/aviva/fashion/bramilano/1.jpg"
import star2 from "../public/aviva/fashion/bramilano/2.jpg"
import star3 from "../public/aviva/fashion/bramilano/3.jpg"
import star4 from "../public/aviva/fashion/bramilano/4.jpg"
import star5 from "../public/aviva/fashion/bramilano/5.jpg"
import star6 from "../public/aviva/fashion/bramilano/6.jpg"

export default function AvivaProfumerieEtruscaPage(){
    return(
        <AvivaCarousel data={[star1, star2, star3,star4, star5, star6]} title={"Boutique BRACCIALINI Milano - Corso Buenos Aires 47"}/>
    )
}