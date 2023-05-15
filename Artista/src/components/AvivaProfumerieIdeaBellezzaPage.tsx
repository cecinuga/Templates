import { Link } from "react-router-dom";
import viacavour from "../public/aviva/profumerie/pinalli/sarzana/sarzana_01_on.jpg"
import chiocciola from "../public/aviva/profumerie/pinalli/laspezia/laspezia_01_on.jpg"
import viacavour2 from "../public/aviva/profumerie/pinalli/chiavali/chiavari_01_on.jpg"
import chiocciola2 from "../public/aviva/profumerie/pinalli/piacenza/piacenza_01_on.jpg"
import AvivaSimpleGrid from "./AvivaSimpleGrid";

export default function AvivaProfumeriePinalliPage(){

    return(
        <AvivaSimpleGrid title="PROFUMERIE Pinalli">
            <Link to="/aviva/profumerie/pinalli/sarzana"><img src={viacavour} /></Link>
            <Link to="/aviva/profumerie/pinalli/laspezia"><img src={chiocciola} /></Link>
            <Link to="/aviva/profumerie/pinalli/chiavali"><img src={viacavour2} /></Link>
            <Link to="/aviva/profumerie/pinalli/piacenza"><img src={chiocciola2} /></Link>
        </AvivaSimpleGrid>
    )
}