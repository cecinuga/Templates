import { CarouselFoto } from "./CarouselFoto";
import img1 from "../public/prof4/00.jpg"
import img2 from "../public/prof4/01.jpg"
import img3 from "../public/prof4/02.jpg"



export default function Prof4Page(){
    return(
        <>
            <div style={{marginTop:"2rem"}}></div>
            <CarouselFoto imageHeight="100%" slide={1} slideSize="100%" data={[{image: img1},{image: img2},{image: img3},]}/>
        </>
    )
}