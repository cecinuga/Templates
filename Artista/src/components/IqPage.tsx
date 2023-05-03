import img0 from '../public/iq/00.jpg'
import img1 from '../public/iq/01.jpg'
import img2 from '../public/iq/02.jpg'
import img9 from '../public/iq/09.jpg'
import img10 from '../public/iq/10.jpg'
import img11 from '../public/iq/11.jpg'
import img12 from '../public/iq/12.jpg'
import img13 from '../public/iq/13.jpg'
import img14 from '../public/iq/14.jpg'
import img15 from '../public/iq/15.jpg'
import img16 from '../public/iq/16.jpg'
import img17 from '../public/iq/17.jpg'
import img18 from '../public/iq/18.jpg'
import Book from './Book'

export default function IqPage(){
    return(
        <Book gradient={{from:"#06f0f155", to:"#3906f155"}} copertina={img0} data={[{image: img1},{image: img2},{image: img9},{image: img10},{image: img11},{image: img12},{image: img13},{image: img14},{image: img15},{image: img16},{image: img17},{image: img18},]}/>
    )
}