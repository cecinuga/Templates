import { Link } from "react-router-dom";
import viacavour from "../public/aviva/kids/mkerbosa_01_on.jpg"
import chiocciola from "../public/aviva/kids/mksacchetti_01_on.jpg"
import body from "../public/aviva/kids/priadua_01_on.jpg"
import cosmix from "../public/aviva/kids/prifoggini_01_on.jpg"
import marianna from "../public/aviva/kids/pripontedera_01.jpg"
import marianna2 from "../public/aviva/kids/priquerce_01_on.jpg"
import marianna1 from "../public/aviva/kids/priviareggio_01_on.jpg"
import AvivaSimpleGrid from "./AvivaSimpleGrid";

export default function AvivaSuccessiIdeaBellezzaPage(){

    return(
        <>
            <AvivaSimpleGrid title={"Kids"}>
                <Link to="/aviva/kids/mkerbosa"><img src={viacavour} /></Link>
                <Link to="/aviva/kids/mksacchetti"><img src={chiocciola} /></Link>
                <Link to="/aviva/kids/priadua"><img src={body} /></Link>
                <Link to="/aviva/kids/prifoggini"><img src={cosmix} /></Link>

                <Link to="/aviva/kids/pripontedera"><img src={marianna} /></Link>
                <Link to="/aviva/kids/priquerce"><img src={marianna2} /></Link>
                <Link to="/aviva/kids/priviareggio"><img src={marianna1} /></Link>
            </AvivaSimpleGrid>
        </>
    )
}