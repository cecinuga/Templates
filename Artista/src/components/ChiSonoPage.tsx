import { Button, Group, Text, Title } from "@mantine/core";
import BackgroundGradient from "./BackgroundGradient";
import vincenzonobile1 from "../public/vincenzonobile1.jpeg"
import {BsWhatsapp, BsInstagram, BsLinkedin, BsFacebook, BsPinterest, BsLink} from "react-icons/bs"

export default function ChiSonoPage(){
    return(
        <>
            <BackgroundGradient bgColor={"#1a1b27"} gradient={true} move={false} />
            <Group align="center" position="center" style={{position: "relative", zIndex: 2}} pt={100}>
                <img width="20%" height="100%" src={vincenzonobile1} style={{borderRadius: "2.5%"}} />
                <Text pb={60}>
                    <Title
                        order={1}
                        color="white"
                        className="font-primary"
                        style={{letterSpacing: "4px"}}
                    >
                        
                        Il Capo della Costruzione
                    </Title>
                    <Text
                        color="white"
                        fw={200}
                        pt={50}
                        style={{letterSpacing: "0.2rem", lineHeight: "2.9rem"}}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Etiam sagittis elit dolor, quis maximus ipsum viverra ac.<br />  Nunc eget ligula congue, malesuada odio eget, dignissim quam.
                    </Text>
                    <Text pt={50}>
                        <Button variant="gradient" gradient={{ from: 'white', to: 'gray.7', deg: 45 }} mr={15}>
                            <Text>Contattami</Text>
                        </Button>
                        <Button variant="gradient" gradient={{ from: 'pink', to: 'white', deg: 45 }} mr={15}>
                            <Text>I Miei Lavori</Text>
                        </Button>
                        <Button variant="gradient" gradient={{ from: 'orange', to: 'green', deg: 45 }}><Text mr={10}>Whatsapp</Text> <BsWhatsapp size={16} /></Button>
                    </Text>
                    <Text pt={50}>
                        <BsInstagram size={32} style={{marginRight: "1rem", cursor: "pointer", fill: "pink"}} />
                        <BsFacebook size={32} style={{marginRight: "1rem", cursor: "pointer", fill: "#5386E4"}} />
                        <BsLinkedin size={32} style={{marginRight: "1rem", cursor: "pointer", fill: "#80CED7"}} />
                        <BsPinterest size={32} style={{marginRight: "1rem", cursor: "pointer", fill: "#EE4266"}} />
                    </Text>
                </Text>
            </Group>
            
        </>
    )
}