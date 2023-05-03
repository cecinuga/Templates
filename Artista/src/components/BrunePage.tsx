import { CarouselFoto } from "./CarouselFoto";
import foto0 from '../public/brunelleschi/00.jpg'
import foto1 from '../public/brunelleschi/01.jpg'
import foto2 from '../public/brunelleschi/02.jpg'
import foto3 from '../public/brunelleschi/03.jpg'
import foto4 from '../public/brunelleschi/04.jpg'
import foto5 from '../public/brunelleschi/05.jpg'
import foto6 from '../public/brunelleschi/06.jpg'
import foto7 from '../public/brunelleschi/07.jpg'
import foto8 from '../public/brunelleschi/08.jpg'
import foto9 from '../public/brunelleschi/09.jpg'
import foto10 from '../public/brunelleschi/10.jpg'
import foto11 from '../public/brunelleschi/11.jpg'
import foto12 from '../public/brunelleschi/12.jpg'
import foto13 from '../public/brunelleschi/13.jpg'
import foto14 from '../public/brunelleschi/14.jpg'
import foto15 from '../public/brunelleschi/15.jpg'
import foto16 from '../public/brunelleschi/16.jpg'
import foto17 from '../public/brunelleschi/17.jpg'
import foto18 from '../public/brunelleschi/18.jpg'
import Book from "./Book";


export default function BrunePage(){
    return(
        <>
            <Book copertina={foto0} data={[{image: foto1}, {image: foto2}, {image: foto3}, {image: foto4}, {image: foto5}, {image: foto6}, {image: foto7}, {image: foto8}, {image: foto9}, {image: foto10}, {image: foto11}, {image: foto12}, {image: foto13}, {image: foto14}, {image: foto15},{image: foto16}, {image: foto17}, {image: foto18}]} gradient={{
                from: "#FFFFFF88",
                to: "#00000088"
            }} />
        </>
    )
}