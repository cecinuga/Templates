import wrappersopra from "../public/aviva/wrapper/wrappersopra.jpg"
import wrappermezzo from "../public/aviva/wrapper/wrappermezzo.jpg"
import index_05 from "../public/aviva/wrapper/index_05.jpg"
import index_06 from "../public/aviva/wrapper/index_06.jpg"
import index_12 from "../public/aviva/wrapper/index_12.jpg"
import index_11 from "../public/aviva/wrapper/index_11.jpg"
import index_18 from "../public/aviva/wrapper/index_18.jpg"
import index_20 from "../public/aviva/wrapper/index_20.jpg"
import relatedlinks from "../public/aviva/wrapper/relatedlinks.jpg"
import nob1 from "../public/aviva/wrapper/nob1.jpg"
import nob2 from "../public/aviva/wrapper/nob2.jpg"
import aavivaa from "../public/aviva/wrapper/aavivaa.jpg"
import img1 from "../public/aviva/random/01.jpg"
import img2 from "../public/aviva/random/02.jpg"
import img3 from "../public/aviva/random/03.jpg"
import img4 from "../public/aviva/random/04.jpg"
import img5 from "../public/aviva/random/05.jpg"
import img6 from "../public/aviva/random/06.jpg"
import img7 from "../public/aviva/random/07.jpg"
import img8 from "../public/aviva/random/08.jpg"
import img9 from "../public/aviva/random/09.jpg"
import img10 from "../public/aviva/random/10.jpg"
import img11 from "../public/aviva/random/11.jpg"
import img12 from "../public/aviva/random/12.jpg"
import img13 from "../public/aviva/random/13.jpg"
import img14 from "../public/aviva/random/14.jpg"
import img15 from "../public/aviva/random/15.jpg"
import { Group, Text, useMantineTheme } from "@mantine/core"
import { Link } from "react-router-dom"
import { useState } from "react"
import FotoAScatto from "./FotoAScatto"
import { useMediaQuery } from "@mantine/hooks"

export default function AvivaPage(){
    const theme = useMantineTheme()
    const [hoverEtichetta1, setHoverEtichetta1] = useState(false);
    const [hoverEtichetta2, setHoverEtichetta2] = useState(false);
    const [hoverEtichetta3, setHoverEtichetta3] = useState(false);
    const [hoverEtichettaBassa1, setHoverEtichettaBassa1] = useState(false);
    const [hoverEtichettaBassa2, setHoverEtichettaBassa2] = useState(false);
    const [hoverEtichettaBassa3, setHoverEtichettaBassa3] = useState(false);
    const [hoverEtichettaBassa4, setHoverEtichettaBassa4] = useState(false);
    const [hoverEtichettaBassa5, setHoverEtichettaBassa5] = useState(false);
    const [hoverEtichettaBassa6, setHoverEtichettaBassa6] = useState(false);
    const [hoverEtichettaBassa7, setHoverEtichettaBassa7] = useState(false);
    const [Nob, setNob] = useState(false);
    const max = useMediaQuery("(max-width: 9999px)")
    const xl = useMediaQuery("(max-width: 1508px)")
    const lg = useMediaQuery("(max-width: 1024px)")
    const md = useMediaQuery("(max-width: 768px)")
    const sm = useMediaQuery("(max-width: 512px)")
    const scalemd = useMediaQuery("(max-width: 860px)")
    const scalesm = useMediaQuery("(max-width: 478px)")

    return(
        <div style={{backgroundColor:"black",position:"absolute", width:"100%", top:"0"}}>
            <div style={{position:"relative", width:"100%", height:"100%", top:"0rem"}}>
                <table width={sm?"100%":md?"450px":lg?"512px":xl?"600px":"1024px"} align="center" style={{scale:scalesm?"0.3":scalemd?"0.5":xl?"0.9":"1",bottom:scalesm?"20rem":scalemd?"15rem":"0rem",display:"block",position:"relative", transform:max?"translateX(25%)":""}}>
                    <tr style={{width:md?"50%":xl?"80%":"100%",display:"block",padding:"0", margin:0}}>
                        <td style={{padding:"0"}} height={83} colSpan={7}>
                            <img src={wrappersopra} style={{position:"relative",zIndex:20, top:"0.25rem"}} />
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block",padding:"0"}}>
                        <td style={{padding:"0"}} colSpan={4}>
                            <img src={wrappermezzo} />
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block",padding:"0"}}>
                        <td style={{padding:"0"}} colSpan={7}>
                            <img src={index_05} width={700} height={19} style={{position:"relative", bottom:"0.5rem"}}></img>
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block"}}>
                        <td style={{padding:"0", position:"relative", }} colSpan={3}>
                            <img src={index_06} style={{position:"relative", bottom:"9.rem"}}  width={261} height={32}/>
                        </td>
                        <td colSpan={2} rowSpan={10} style={{position:"relative", top:"15.5em",left:"0rem"}}>
                            <div style={{position:"relative", width:"20rem", height:"20rem"}}>
                                <FotoAScatto timeout={2500} foto={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,img13, img14, img15]} />
                            </div>
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block", position:"relative",bottom:"20.6rem"}}>
                        <td width={155} height={18} style={{paddingLeft:"2rem", position:"relative", bottom:"0.8rem"}}>
                            <Link to="/aviva/corporate-profile" style={{textDecoration:"none"}}><Text onPointerEnter={()=>setHoverEtichetta1(true)} onPointerLeave={()=>setHoverEtichetta1(false)} w={180} c="white" bg={hoverEtichetta1?theme.colors.red[8]:theme.colors.gray[9]} fz={14} align="center" display={"inline-block"} px="1rem"><strong>CORPORATE PROFILE</strong></Text></Link>
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block", position:"relative",bottom:"20.6rem"}}>
                        <td style={{paddingLeft:"3rem",}}>
                            <img src={index_11} style={{position:"relative",left:"9.7rem",bottom:"2.6rem",zIndex:0}} />
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block", position:"relative",bottom:"20.6rem"}}>
                        <td width={155} height={18} style={{paddingLeft:"2rem", position:"relative", bottom:"15.2rem"}}>
                            <Link style={{textDecoration:"none"}} to="/aviva/progetti-e-servizi"><Text onPointerEnter={()=>setHoverEtichetta2(true)} onPointerLeave={()=>setHoverEtichetta2(false)} w={180} c="white" bg={hoverEtichetta2?theme.colors.red[8]:theme.colors.gray[9]} fz={14} align="center" display={"inline-block"} px="1rem"><strong>PROGETTI E SERVIZI </strong></Text></Link>
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block", position:"relative",bottom:"20.6rem"}}>
                        <td style={{paddingLeft:"3rem",}}>
                            <img src={index_12} style={{position:"relative", bottom:"18.4rem",zIndex:0}} />
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block", position:"relative",bottom:"20.6rem"}}>
                        <td width={155} height={18} style={{paddingLeft:"2rem", position:"relative", bottom:"16.2rem"}}>
                            <Link style={{textDecoration:"none"}} to="/aviva/i-nostri-successi"><Text onPointerEnter={()=>setHoverEtichetta3(true)} onPointerLeave={()=>setHoverEtichetta3(false)} w={180} c="white" bg={hoverEtichetta3?theme.colors.red[8]:theme.colors.gray[9]} fz={14} align="center" display={"inline-block"} px="1rem"><strong>I NOSTRI SUCCESSI</strong></Text></Link>
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block", position:"relative",bottom:"20.6rem"}}>
                        <td style={{paddingLeft:"3rem",}}>
                            <img src={index_12} style={{position:"relative", bottom:"19.3rem",zIndex:10}} />
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block", position:"relative",bottom:"20.6rem"}}>
                        <td width={155} height={18} style={{paddingLeft:"2rem", position:"relative", bottom:"17rem"}}>
                            <Text w={180} c="white" bg={theme.colors.gray[9]} fz={14} align="center" display={"inline-block"} px="5rem" style={{height:"1.5rem"}}></Text>
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block", position:"relative",bottom:"20.6rem"}}>
                        <td style={{paddingLeft:"3rem",}}>
                            <img src={index_12} style={{position:"relative", bottom:"20.8rem",zIndex:0}} />
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block", position:"relative",bottom:"20.6rem"}}>
                        <td style={{paddingLeft:"3rem",}}>
                            <img src={index_18} style={{position:"relative", bottom:"19.5rem",zIndex:0}} />
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block", position:"relative",bottom:"20.6rem"}}>
                        <td>
                            <img src={index_20} style={{position:"relative", bottom:"19.7rem",zIndex:0}} />
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block", position:"relative", bottom:"20.6rem"}}>
                        <td style={{position:"relative", bottom:"20rem"}}>
                            <Group position="center" bg={theme.colors.gray[9]} w={"100%"}>
                                <Text fz={12} onPointerEnter={()=>{setHoverEtichettaBassa1(true)}} onPointerLeave={()=>{setHoverEtichettaBassa1(false)}} c={hoverEtichettaBassa1?theme.colors.cyan[5]:"white"}>ARREDAMENTO</Text>
                                <Link style={{textDecoration:"none"}} to="/aviva/profumerie"><Text fz={12} onPointerEnter={()=>{setHoverEtichettaBassa2(true)}} onPointerLeave={()=>{setHoverEtichettaBassa2(false)}} c={hoverEtichettaBassa2?theme.colors.indigo[5]:"white"}>PROFUMERIE</Text></Link>
                                <Link style={{textDecoration:"none"}} to="/aviva/fashion"><Text fz={12} onPointerEnter={()=>{setHoverEtichettaBassa3(true)}} onPointerLeave={()=>{setHoverEtichettaBassa3(false)}} c={hoverEtichettaBassa3?theme.colors.blue[5]:"white"}>FASHION</Text></Link>
                                <Link style={{textDecoration:"none"}} to="/aviva/kids"><Text fz={12} onPointerEnter={()=>{setHoverEtichettaBassa4(true)}} onPointerLeave={()=>{setHoverEtichettaBassa4(false)}} c={hoverEtichettaBassa4?theme.colors.yellow[5]:"white"}>KIDS</Text></Link>
                                <Link style={{textDecoration:"none"}} to="/aviva/wellness"><Text fz={12} onPointerEnter={()=>{setHoverEtichettaBassa5(true)}} onPointerLeave={()=>{setHoverEtichettaBassa5(false)}} c={hoverEtichettaBassa5?theme.colors.green[5]:"white"}>WELLNESS</Text></Link>
                                <Link style={{textDecoration:"none"}} to="/aviva/uffici"><Text fz={12} onPointerEnter={()=>{setHoverEtichettaBassa6(true)}} onPointerLeave={()=>{setHoverEtichettaBassa6(false)}} c={hoverEtichettaBassa6?theme.colors.grape[5]:"white"}>UFFICI</Text></Link>
                                <Link style={{textDecoration:"none"}} to="/aviva/ristoranti"><Text fz={12} onPointerEnter={()=>{setHoverEtichettaBassa7(true)}} onPointerLeave={()=>{setHoverEtichettaBassa7(false)}} c={hoverEtichettaBassa7?theme.colors.red[5]:"white"}>HOTEL&rESTAURANT</Text></Link>
                            </Group>
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block", position:"relative", bottom:"20.6rem"}}>
                        <td align="center">
                            <img src={relatedlinks} style={{position:"relative", bottom:"17rem",zIndex:0}} />
                        </td>
                    </tr>
                    <tr style={{width:md?"50%":"100%",display:"block", position:"relative", bottom:"20.6rem"}}>
                        <td style={{position:"relative",bottom:"15rem"}} align="center">
                            <Link to="/"><img onPointerEnter={()=>{setNob(true)}} onPointerLeave={()=>{setNob(false)}} src={!Nob?nob1:nob2} style={{paddingRight:"150px"}}/><img src={aavivaa} /></Link>
                        </td>
                    </tr>
                </table>

            </div>
        </div>  
    )
}