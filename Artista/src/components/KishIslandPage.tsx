import { CarouselFoto } from "./CarouselFoto";
import foto0 from '../public/kishisland/00.jpg'
import foto1 from '../public/kishisland/01.jpg'
import foto2 from '../public/kishisland/02.jpg'
import foto3 from '../public/kishisland/03.jpg'
import foto4 from '../public/kishisland/04.jpg'
import foto5 from '../public/kishisland/05.jpg'
import foto6 from '../public/kishisland/06.jpg'
import foto7 from '../public/kishisland/07.jpg'
import foto8 from '../public/kishisland/08.jpg'
import foto9 from '../public/kishisland/09.jpg'
import foto10 from '../public/kishisland/10.jpg'
import foto11 from '../public/kishisland/11.jpg'
import foto12 from '../public/kishisland/12.jpg'
import foto13 from '../public/kishisland/13.jpg'
import foto14 from '../public/kishisland/14.jpg'
import foto15 from '../public/kishisland/15.jpg'
import foto16 from '../public/kishisland/16.jpg'
import foto17 from '../public/kishisland/17.jpg'
import foto18 from '../public/kishisland/18.jpg'
import foto19 from '../public/kishisland/19.jpg'
import foto20 from '../public/kishisland/20.jpg'
import foto21 from '../public/kishisland/21.jpg'
import foto22 from '../public/kishisland/22.jpg'
import foto23 from '../public/kishisland/23.jpg'

export default function KishIslandPage(){
    return(
        <>
            <CarouselFoto slide={1} slideSize="100%" imageHeight="450rem"  data={[{image: foto0},{image: foto1}, {image: foto2}, {image: foto3}, {image: foto4}, {image: foto5}, {image: foto6}, {image: foto7}, {image: foto8}, {image: foto9}, {image: foto10}, {image: foto11},{image: foto11}, {image: foto12}, {image: foto13}, {image: foto14}, {image: foto15}, {image: foto16}, {image: foto17}, {image: foto18}, {image: foto19}, {image: foto20}, {image: foto21}, {image: foto22}, {image: foto23}]} />
        </>
    )
}