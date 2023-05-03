import { CarouselFoto } from "./CarouselFoto";
import { useState } from 'react'
import ImgWithContents from './ImgWithContent'
import { Button } from '@mantine/core'

type BookProps = {
    copertina: string
    data: {image: string}[]
    gradient: {from: string, to: string}
    width?: string
    height?: string
    copertinaWidth?: string
    copertinaHeight?: string
    imageHeight?: string;
}

export default function Book(props: BookProps){
    const [showBook, setShowBook] = useState(false)
    return(
        <>
            <div style={{padding:"2rem"}}></div>
            {!showBook&&props.copertina?
                <ImgWithContents img={props.copertina} width={props.copertinaWidth?props.copertinaWidth:'30rem'} height={props.copertinaHeight?props.copertinaHeight:'40rem'}>
                    <Button onClick={()=>setShowBook(true)} variant="gradient" gradient={props.gradient} style={{width:"8rem",height:"4rem",position:"relative"}}>
                        <div style={{position:"absolute", left:"50%", transform:"translateX(-50%)", fontSize: "1.5rem", fontWeight: "200"}} className="font-primary">
                            Sfogliami
                        </div>
                    </Button>
                </ImgWithContents>
            :<CarouselFoto imageHeight={props.imageHeight} slide={2} slideSize='50%' width={props.width?props.width:'380rem'} height={props.height} data={props.data}/>}
        </>
    )
}