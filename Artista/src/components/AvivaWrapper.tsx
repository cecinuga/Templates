import { useNavigate } from "react-router-dom"
import { ReactElement } from "react"
import scheda_02 from "../public/aviva/corporate/scheda_02.jpg"
import scheda_01 from "../public/aviva/corporate/scheda_01.jpg"
import { Button, useMantineTheme } from "@mantine/core"
import { AiOutlineBackward } from "react-icons/ai"

type AvivaWrapperProps = {
    children: ReactElement
}

export default function AvivaWrapper(props: AvivaWrapperProps){
    const navigate = useNavigate()
    const theme = useMantineTheme()

    return(
        <div style={{backgroundColor:"black",position:"absolute", width:"100%", top:"0",paddingTop:"7rem", paddingBottom:"18.8rem"}}>
            <div style={{position:"relative", width:"100%"}}>
                <div style={{width:"fit-content",position:"relative", left:"50%",bottom:"0.2rem", transform:"translateX(-50%)", paddingRight:"45rem"}}><img src={scheda_01}></img></div>
                <div style={{width:"fit-content",position:"relative", left:"50%",bottom:"26.5rem", transform:"translateX(-50%)", paddingRight:"1.3rem"}}><img src={scheda_02} ></img></div>
                <div style={{position:"absolute", top:"20%", left:"48%", transform:"translateX(-48%)"}}>
                    {props.children}
                </div>
                <div style={{display:"inline-block",position:"relative", left:"27.5%", transform:"translateX(-48%)"}}>
                    <Button variant="transparent" onClick={()=>navigate(-1)}><AiOutlineBackward color={theme.colors.gray[8]} size={48}/></Button>
                </div>
            </div>
        </div>
    )
}