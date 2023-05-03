import img0 from '../public/viacavour/00.jpg'
import img1 from '../public/viacavour/01.jpg'
import img2 from '../public/viacavour/02.jpg'
import img3 from '../public/viacavour/03.jpg'
import { CarouselFoto } from './CarouselFoto'

export default function ViaCavourPage(){
    return(
        <>
            <div style={{padding:"1rem"}}></div>
            <CarouselFoto width='400rem' data={[{image:img0}, {image:img1}, {image:img2}, {image:img3}]} />
        </>
    )
}