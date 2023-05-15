import { Link } from "react-router-dom";
import viacavour from "../public/aviva/ristoranti/aulla_01_on.jpg"
import chiocciola from "../public/aviva/ristoranti/budapest_01_on.jpg"
import body from "../public/aviva/ristoranti/civitavecchia_01_on.jpg"
import viacavour2 from "../public/aviva/ristoranti/cronta_01_on.jpg"
import chiocciola2 from "../public/aviva/ristoranti/faenza_01_on.jpg"
import viacavour3 from "../public/aviva/ristoranti/firenze_01_on.jpg"
import chiocciola3 from "../public/aviva/ristoranti/ipandipino_01_on.jpg"
import body3 from "../public/aviva/ristoranti/loungebar_01_on.jpg"
import viacavour4 from "../public/aviva/ristoranti/newyork_01_on.jpg"
import chiocciola4 from "../public/aviva/ristoranti/pune_01_on.jpg"
import chiocciola5 from "../public/aviva/ristoranti/seuropa_01_on.jpg"
import AvivaSimpleGrid from "./AvivaSimpleGrid";

export default function AvivaSuccessiIdeaBellezzaPage(){

    return(
        <>
            <AvivaSimpleGrid title="Ristoranti">
                <Link to="/aviva/ristoranti/aulla"><img src={viacavour} /></Link>
                <Link to="/aviva/ristoranti/budapest"><img src={chiocciola} /></Link>
                <Link to="/aviva/ristoranti/civitavecchia"><img src={body} /></Link>
                <Link to="/aviva/ristoranti/cagliari"><img src={viacavour2} /></Link>

                <Link to="/aviva/ristoranti/faenza"><img src={chiocciola2} /></Link>
                <Link to="/aviva/ristoranti/firenze"><img src={viacavour3} /></Link>
                <Link to="/aviva/ristoranti/prato"><img src={chiocciola3} /></Link>
                <Link to="/aviva/ristoranti/firenze2"><img src={body3} /></Link>

                <Link to="/aviva/ristoranti/newyork"><img src={viacavour4} /></Link>
                <Link to="/aviva/ristoranti/pune"><img src={chiocciola4} /></Link>
                <Link to="/aviva/ristoranti/seuropa"><img src={chiocciola5} /></Link>
            </AvivaSimpleGrid>
        </>
    )
}