import Book from "./Book";
import foto0 from '../public/monsu/00.jpg'
import foto1 from '../public/monsu/01.jpg'
import foto2 from '../public/monsu/02.jpg'
import foto3 from '../public/monsu/03.jpg'
import foto4 from '../public/monsu/04.jpg'
import foto5 from '../public/monsu/05.jpg'
import foto6 from '../public/monsu/06.jpg'
import foto7 from '../public/monsu/07.jpg'
import foto8 from '../public/monsu/08.jpg'
import foto9 from '../public/monsu/09.jpg'
import foto10 from '../public/monsu/10.jpg'
import foto11 from '../public/monsu/11.jpg'
import foto12 from '../public/monsu/12.jpg'
import foto13 from '../public/monsu/13.jpg'
import foto14 from '../public/monsu/14.jpg'
import foto15 from '../public/monsu/15.jpg'
import foto16 from '../public/monsu/16.jpg'

export default function MonsuPage(){
    return(
        <>
            <Book gradient={{from:"#06f1b755", to:"#3906f155"}} copertina={foto0} data={[{image: foto1}, {image: foto2}, {image: foto3}, {image: foto4}, {image: foto5}, {image: foto6}, {image: foto7}, {image: foto8}, {image: foto9}, {image: foto10}, {image: foto11}, {image: foto12}, {image: foto13}, {image: foto14}, {image: foto15}, {image: foto16}]} />
        </>
    )
}