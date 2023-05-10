
import { CarouselFoto } from "./CarouselFoto"
import foto1 from '../public/aviva/slider/avivaprofile/1.jpg'
import foto2 from '../public/aviva/slider/avivaprofile/2.jpg'
import foto3 from '../public/aviva/slider/avivaprofile/3.jpg'
import foto4 from '../public/aviva/slider/avivaprofile/4.jpg'
import foto5 from '../public/aviva/slider/avivaprofile/5.jpg'
import foto6 from '../public/aviva/slider/avivaprofile/6.jpg'
import foto7 from '../public/aviva/slider/avivaprofile/7.jpg'
import foto8 from '../public/aviva/slider/avivaprofile/8.jpg'
import foto9 from '../public/aviva/slider/avivaprofile/9.jpg'
import foto10 from '../public/aviva/slider/avivaprofile/10.jpg'
import foto11 from '../public/aviva/slider/avivaprofile/11.jpg'
import foto12 from '../public/aviva/slider/avivaprofile/12.jpg'
import foto13 from '../public/aviva/slider/avivaprofile/13.jpg'
import foto14 from '../public/aviva/slider/avivaprofile/14.jpg'
import foto15 from '../public/aviva/slider/avivaprofile/15.jpg'
import foto16 from '../public/aviva/slider/avivaprofile/16.jpg'
import { Button, Text } from "@mantine/core"
import { Link } from "react-router-dom"
import pdf from "../public/aviva/corporate/avivaprofile.pdf"
import AvivaWrapper from "./AvivaWrapper"

export default function AvivaCorporatePage(){

    return(
        <>
            <AvivaWrapper >
                <>
                    <div style={{position:"relative",  width:"30rem"}}>
                        <CarouselFoto slide={1} width="100%" slideSize="100%" data={[{image: foto1}, {image: foto2}, {image: foto3}, {image: foto4}, {image: foto5}, {image: foto6}, {image: foto7}, {image: foto8}, {image: foto9}, {image: foto10}, {image: foto11}, {image: foto12}, {image: foto13}, {image: foto14}, {image: foto15},{image: foto16}]}/>
                    </div>
                    <Text style={{display:"inline-block",position:"absolute",}} c="white"><strong>Corporate Page</strong></Text>
                    <Link to={pdf} target="_blank"><Button style={{display:"inline-block",position:"absolute", right:0}} variant="gradient" gradient={{from:"white", to:"black"}}>PDF VERSION</Button></Link>
                </>
            </AvivaWrapper>
        </>
    )
}