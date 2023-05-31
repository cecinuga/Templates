import { Button, Text, } from "@mantine/core";
import vincenzonobile1 from "../public/vincenzonobile1.jpeg"
import {BsWhatsapp, BsInstagram, BsLinkedin, BsFacebook, BsPinterest} from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { useEffect, useState } from "react";

type WallpaperProps = {
    foto: string[]
    timeout: number
    width: string;
    descr: string[]
}

function FotoAScatto(props: WallpaperProps){
    const [turno, setTurno] = useState(Array.from(props.foto, (_, i) => i==0?"block":"none"))

    useEffect(()=>{
        setTimeout(()=>{
            if(turno[turno.length-1]=="block"){
                setTurno(Array.from(props.foto, (_, i) => i==0?"block":"none"))
                return
            }
            const nuovoTurno = turno.map((item, i) => item=="block"?"none":turno[i-1]=="block"?"block":"none")
            setTurno(nuovoTurno)
        }, props.timeout)
    }, [turno])

    return(
        <div style={{position:"relative", top:"", left:"50%", transform:"translateX(-25%)"}}>
            {
                props.foto.map((img, i) => <img src={img} width={props.width} style={{display: turno[i], position:"relative"}}/>)
            }
            {props.descr.map((desc,i) => <Text className="font-secondary" fz={50} variant="gradient" gradient={{from: "black", to:"gray"}} align="center" c="black" style={{position:"relative",transform:"translate(-25%)",display:turno[i]}}>{desc}</Text> )}
        </div>
    )
}

export default function ChiSonoPage(){
    return(
        <div style={{overflowX:"hidden"}}>
                <FotoAScatto width="50%" timeout={2500} foto={[vincenzonobile1,vincenzonobile1,vincenzonobile1]} descr={["La bellezza prima di tutto", "Come l'acqua, l'aria", "Come l'aria, la roccia"]} />
                <Text>
                    <Text pt={20} align="center">
                        <Button variant="gradient" gradient={{ from: 'white', to: 'gray.7', deg: 45 }} mr={15}>
                            <Text>Contattami</Text>
                        </Button>
                        <Button variant="gradient" gradient={{ from: 'pink', to: 'white', deg: 45 }} mr={15}>
                            <Text>I Miei Lavori</Text>
                        </Button>
                        <Button onClick={()=>window.open("https://api.whatsapp.com/send?phone=393513518848")} mr={15} variant="gradient" gradient={{ from: 'orange', to: 'green', deg: 45 }}><Text mr={10}>Whatsapp</Text> <BsWhatsapp size={16} /></Button>
                        <Button onClick={()=>window.open("https://api.whatsapp.com/send?phone=393513518848")} variant="gradient" gradient={{ from: 'blue.3', to: 'blue.9', deg: 45 }}><Text mr={10}>Mail</Text> <AiOutlineMail size={16} /></Button>
                    </Text>
                    <Text pt={50} align="center">
                        <BsInstagram size={32} style={{marginRight: "1.5rem", cursor: "pointer", fill: "pink"}} />
                        <BsFacebook size={32} style={{marginRight: "1.5rem", cursor: "pointer", fill: "#5386E4"}} />
                        <BsLinkedin size={32} style={{marginRight: "1.5rem", cursor: "pointer", fill: "#80CED7"}} />
                        <BsPinterest size={32} style={{marginRight: "1.5rem", cursor: "pointer", fill: "#EE4266"}} />
                    </Text>
                </Text>            
        </div>
    )
}