import foto1 from '../public/iran/01.jpg'
import foto2 from '../public/iran/02.jpg'
import foto3 from '../public/iran/03.jpg'
import foto4 from '../public/iran/04.jpg'
import foto5 from '../public/iran/05.jpg'
import foto6 from '../public/iran/06.jpg'
import foto7 from '../public/iran/07.jpg'
import foto8 from '../public/iran/08.jpg'
import foto9 from '../public/iran/09.jpg'
import foto10 from '../public/iran/10.jpg'
import foto11 from '../public/iran/11.jpg'
import { CarouselFoto } from './CarouselFoto'

export default function MarCaspioPage(){
    return(
        <>
            <div style={{padding:"2rem"}}></div>
            <CarouselFoto slide={1} slideSize='100%' width='500rem' data={[{image: foto1}, {image: foto2}, {image: foto3}, {image: foto4}, {image: foto5}, {image: foto6}, {image: foto7}, {image: foto8}, {image: foto9}, {image: foto10}, {image: foto11}]}/>
        </>
    )
}