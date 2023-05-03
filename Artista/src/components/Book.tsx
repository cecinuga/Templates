import { CarouselFoto } from "./CarouselFoto";
import { useState } from 'react'
import ImgWithContents from './ImgWithContent'
import { Button } from '@mantine/core'

type BookProps = {
    copertina: string
    data: {image: string}[]
    gradient: {from: string, to: string}
}

export default function Book(props: BookProps){
    const [showBook, setShowBook] = useState(false)
    return(
        <>
            <div style={{padding:"2rem"}}></div>
            {!showBook?
                <ImgWithContents img={props.copertina} width='30rem' height='40rem'>
                    <Button onClick={()=>setShowBook(true)} variant="gradient" gradient={props.gradient} style={{width:"8rem",height:"4rem",position:"relative"}}>
                        <div style={{position:"absolute", left:"50%", transform:"translateX(-50%)", fontSize: "1.5rem", fontWeight: "200"}} className="font-primary">
                            Sfogliami
                        </div>
                    </Button>
                </ImgWithContents>
            :<CarouselFoto slide={2} slideSize='50%' width='380rem' data={props.data}/>}
        </>
    )
}