import foto1 from '../public/avivaaa/1.jpg'
import foto2 from '../public/avivaaa/2.jpg'
import foto3 from '../public/avivaaa/3.jpg'
import foto4 from '../public/avivaaa/4.jpg'
import foto5 from '../public/avivaaa/5.jpg'
import foto6 from '../public/avivaaa/6.jpg'
import foto7 from '../public/avivaaa/7.jpg'
import foto8 from '../public/avivaaa/8.jpg'
import foto9 from '../public/avivaaa/9.jpg'
import foto10 from '../public/avivaaa/10.jpg'
import foto11 from '../public/avivaaa/11.jpg'
import foto12 from '../public/avivaaa/12.jpg'
import foto13 from '../public/avivaaa/13.jpg'
import foto14 from '../public/avivaaa/14.jpg'
import foto15 from '../public/avivaaa/15.jpg'
import { CarouselFoto } from './CarouselFoto'

export default function AvivaAAPage(){
    return(
        <>
            <div style={{padding:"2rem"}}></div>
            <CarouselFoto slide={2} slideSize='50%' width='380rem' data={[{image: foto1}, {image: foto2}, {image: foto3}, {image: foto4}, {image: foto5}, {image: foto6}, {image: foto7}, {image: foto8}, {image: foto9}, {image: foto10}, {image: foto11}, {image: foto12}, {image: foto13}, {image: foto14}, {image: foto15}]}/>
        </>
    )
}