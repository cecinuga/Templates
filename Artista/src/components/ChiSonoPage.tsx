import { Button, Text, } from "@mantine/core";
import vincenzonobile1 from "../public/vincenzonobile1.jpeg"
import {BsWhatsapp, BsInstagram, BsLinkedin, BsFacebook, BsPinterest} from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { CarouselFoto } from "./CarouselFoto";

export default function ChiSonoPage(){
    return(
        <>
                <CarouselFoto slide={1} slideSize="100%" width="50%" data={[{image: vincenzonobile1},{image: vincenzonobile1},{image: vincenzonobile1}]}/>
                <Text>
                    <Text
                        color="black"
                        fw={200}
                        align="center"
                        style={{letterSpacing: "0.2rem", lineHeight: "2.9rem"}}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Etiam sagittis elit dolor, quis maximus ipsum viverra ac.<br />  Nunc eget ligula congue, malesuada odio eget, dignissim quam.
                    </Text>
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
        </>
    )
}