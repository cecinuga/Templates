import { Link } from "react-router-dom";
import viacavour from "../public/aviva/profumerie/lineabellezza/oristano/oristano_01_on.jpg"
import chiocciola from "../public/aviva/profumerie/lineabellezza/cagliari/paoli_01_on.jpg"
import AvivaSimpleGrid from "./AvivaSimpleGrid";

export default function AvivaProfumerieLineaPage(){

    return(
        <>
            <AvivaSimpleGrid title="Linea Bellezza">
                <Link to="/aviva/profumerie/linea-bellezza/oristano"><img src={viacavour} /></Link>
                <Link to="/aviva/profumerie/linea-bellezza/cagliari"><img src={chiocciola} /></Link>
            </AvivaSimpleGrid>
        </>
    )
}