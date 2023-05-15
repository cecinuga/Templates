import { useNavigate } from "react-router-dom"
import { ReactElement } from "react"
import scheda_02 from "../public/aviva/corporate/scheda_02.jpg"
import scheda_01 from "../public/aviva/corporate/scheda_01.jpg"
import { Button, useMantineTheme } from "@mantine/core"
import { AiOutlineBackward } from "react-icons/ai"
import { useMediaQuery } from "@mantine/hooks"

type AvivaWrapperProps = {
    children: ReactElement
}

export default function AvivaWrapper(props: AvivaWrapperProps){
    const navigate = useNavigate()
    const theme = useMantineTheme()
    const scalemd = useMediaQuery("(max-width:768px)")
    const scalesm = useMediaQuery("(max-width:550px)")
    const scalexs = useMediaQuery("(max-width:380px)")
    const posScalemd = useMediaQuery("(max-width:768px)")
    const posScalesm = useMediaQuery("(max-width:550px)")
    const posScalexs = useMediaQuery("(max-width:380px)")

    return(
        <div style={{backgroundColor:"black",position:"absolute", width:"100%", top:"0",paddingTop:"7rem", paddingBottom:"18.8rem"}}>
            <div style={{position:"relative", width:"100%", scale:scalexs?"0.35":scalesm?"0.5":scalemd?"0.7":"1",bottom:posScalexs?"10rem":posScalesm?"8rem":posScalemd?"5rem":"0rem"}}>
                <div style={{width:"fit-content",position:"relative", left:"50%",bottom:"0.2rem", transform:"translateX(-50%)", paddingRight:"45rem"}}><img src={scheda_01}></img></div>
                <div style={{width:"fit-content",position:"relative", left:"50%",bottom:"26.5rem", transform:"translateX(-50%)", paddingRight:"1.3rem"}}><img src={scheda_02} ></img></div>
                <div style={{position:"relative", width:"50%", bottom:"28rem", left:"50%", transform:"translateX(-48%)"}}>
                    {props.children}
                </div>
                <div style={{display:"inline-block",position:"absolute",bottom:"28rem", left:"32%", transform:"translateX(-48%)"}}>
                    <Button variant="transparent" onClick={()=>navigate(-1)}><AiOutlineBackward color={theme.colors.gray[8]} size={48}/></Button>
                </div>
            </div>
        </div>
    )
}