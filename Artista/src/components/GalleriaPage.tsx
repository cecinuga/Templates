import BackgroundGradient from "./BackgroundGradient";
import { CarouselFoto } from "./CarouselFoto";
import image1 from "../public/servizio2.jpg"
import image2 from "../public/servizio3.jpg"
import image3 from "../public/servizio4.jpg"


export default function GalleriaPage(){
    return(
        <>
            <BackgroundGradient bgColor={"#1a1b27"} gradient={true} move={false} />
            <div style={{paddingTop: "3rem"}}></div>
            <CarouselFoto data={[{image:image1},{image:image2},{image:image3}]} height="650px"/>
        </>
    )
}