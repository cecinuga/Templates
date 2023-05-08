import { CarouselFoto } from "./CarouselFoto";
import img1 from "../public/prof3/01.jpg"
import img2 from "../public/prof3/02.jpg"
import img3 from "../public/prof3/03.jpg"
import img4 from "../public/prof3/04.jpg"
import img5 from "../public/prof3/05.jpg"
import img6 from "../public/prof3/06.jpg"
import img7 from "../public/prof3/07.jpg"


export default function Prof3Page(){
    return(
        <>
            <div style={{marginTop:"2rem"}}></div>
            <CarouselFoto imageHeight="100%" slide={1} slideSize="100%" data={[{image: img1},{image: img2},{image: img3},{image: img4},{image: img5},{image: img6},{image: img7},]}/>
        </>
    )
}