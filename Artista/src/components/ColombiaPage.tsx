import img0 from '../public/colombia/img/00.jpg'
import img1 from '../public/colombia/img/01.jpg'
import img2 from '../public/colombia/img/02.jpg'
import img3 from '../public/colombia/img/03.jpg'
import img4 from '../public/colombia/img/00.jpg'
import img5 from '../public/colombia/img/01.jpg'
import img6 from '../public/colombia/img/02.jpg'
import img7 from '../public/colombia/img/03.jpg'
import gif from '../public/colombia/colombia-big.gif'
import { CarouselFoto } from './CarouselFoto'

export default function ColombiaPage(){
    return(
        <>
            <div style={{padding:"2rem"}}></div>
            <CarouselFoto slide={1} slideSize='100%' width='600rem' data={[{image: gif}, {image: img0}, {image: img1}, {image: img2}, {image: img3}, {image: img4}, {image: img4}, {image: img5}, {image: img6}, {image: img7}]} />
        </>
    )
}