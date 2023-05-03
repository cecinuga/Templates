import { CarouselFoto } from "./CarouselFoto";
import foto0 from '../public/capo/00.jpg'
import foto1 from '../public/capo/01.jpg'
import foto2 from '../public/capo/02.jpg'
import foto3 from '../public/capo/03.jpg'
import foto4 from '../public/capo/04.jpg'
import foto5 from '../public/capo/05.jpg'
import foto6 from '../public/capo/06.jpg'
import foto7 from '../public/capo/07.jpg'
import foto8 from '../public/capo/08.jpg'
import foto9 from '../public/capo/09.jpg'
import foto10 from '../public/capo/10.jpg'
import foto11 from '../public/capo/11.jpg'
import foto12 from '../public/capo/12.jpg'
import foto13 from '../public/capo/13.jpg'
import foto14 from '../public/capo/14.jpg'


export default function CapoPage(){
    return(
        <>
            <div style={{padding:"1rem"}}></div>
            <CarouselFoto width="400rem" height="40rem" data={[{image: foto0},{image: foto1}, {image: foto2}, {image: foto3}, {image: foto4}, {image: foto5}, {image: foto6}, {image: foto7}, {image: foto8}, {image: foto9}, {image: foto10}, {image: foto11}, {image: foto12}, {image: foto13}, {image: foto14}]}/>
        </>
    )
}