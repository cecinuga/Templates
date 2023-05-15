import { Link } from "react-router-dom";
import viacavour from "../public/aviva/wellness/benessere_01_on.jpg"
import chiocciola from "../public/aviva/wellness/olbia_01_on.jpg"
import body from "../public/aviva/wellness/moschettini_03_on.jpg"
import AvivaSimpleGrid from "./AvivaSimpleGrid";

export default function AvivaSuccessiIdeaBellezzaPage(){

    return(
        <>
            <AvivaSimpleGrid title="Wellness">
                <Link to="/aviva/wellness/olbia"><img src={viacavour} /></Link>
                <Link to="/aviva/wellness/centro-benessere"><img src={chiocciola} /></Link>
                <Link to="/aviva/wellness/moschettini"><img src={body} /></Link>
            </AvivaSimpleGrid>
        </>
    )
}