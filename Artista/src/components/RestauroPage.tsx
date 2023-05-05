import foto0 from "../public/restauro/00.jpg"
import foto1 from "../public/restauro/01.jpg"
import foto2 from "../public/restauro/02.jpg"
import foto3 from "../public/restauro/03.jpg"
import foto4 from "../public/restauro/04.jpg"
import foto5 from "../public/restauro/05.jpg"
import foto6 from "../public/restauro/06.jpg"
import foto7 from "../public/restauro/07.jpg"

import { CarouselFoto } from "./CarouselFoto"

export default function RestauroPage(){
    return(
       <CarouselFoto slide={1} slideSize="100%" height="100%" imageHeight="550rem" data={[{image: foto0},{image: foto1},{image: foto2},{image: foto3},{image: foto4},{image: foto5},{image: foto6},{image: foto7}]} />
    )
}