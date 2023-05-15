import { Link } from "react-router-dom";
import viacavour from "../public/aviva/successi/cavour_01_on.jpg"
import chiocciola from "../public/aviva/successi/lachiocciola_01_on.jpg"
import body from "../public/aviva/successi/body_01_on.jpg"
import cosmix from "../public/aviva/profumerie/prof_cosmix_on.jpg"
import marianna from "../public/aviva/profumerie/marionnaud_01_on.jpg"
import linea from "../public/aviva/profumerie/linea_01_on.jpg"
import star from "../public/aviva/profumerie/star_01_on.jpg"
import blue from "../public/aviva/profumerie/blue_01_on.jpg"
import pin from "../public/aviva/successi/prof_pinalli_on.jpg"
import idea from "../public/aviva/profumerie/prof_idea_on.jpg"
import etrusca from "../public/aviva/profumerie/etrusca.jpg"
import AvivaSimpleGrid from "./AvivaSimpleGrid";

export default function AvivaSuccessiIdeaBellezzaPage(){

    return(
        <>
            <AvivaSimpleGrid title="Profumerie">
                <Link to="/aviva/profumerie/viacavour"><img src={viacavour} /></Link>
                <Link to="/aviva/profumerie/chiocciola"><img src={chiocciola} /></Link>
                <Link to="/aviva/profumerie/body"><img src={body} /></Link>
                <Link to="/aviva/profumerie/cosmix"><img src={cosmix} /></Link>

                <Link to="/aviva/profumerie/marianonnaud"><img src={marianna} /></Link>
                <Link to="/aviva/profumerie/linea-bellezza"><img src={linea} /></Link>
                <Link to="/aviva/profumerie/star"><img src={star} /></Link>
                <Link to="/aviva/profumerie/blue"><img src={blue} /></Link>

                <Link to="/aviva/profumerie/pinalli"><img src={pin} /></Link>
                <Link to="/aviva/profumerie/idea-bellezza"><img src={idea} /></Link>
                <Link to="/aviva/profumerie/etrusca"><img src={etrusca} /></Link>
            </AvivaSimpleGrid>
        </>
    )
}