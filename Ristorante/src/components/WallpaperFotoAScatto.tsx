import { useEffect, useState } from "react"

type WallpaperProps = {
    foto: string[]
}

export default function WallpaperFotoAScatto(props: WallpaperProps){
    const [turno, setTurno] = useState(Array.from(props.foto, (img, i) => i==0?"block":"none"))

    useEffect(()=>{
        setTimeout(()=>{
            if(turno[turno.length-1]=="block"){
                setTurno(Array.from(props.foto, (img, i) => i==0?"block":"none"))
                return
            }
            const nuovoTurno = turno.map((item, i) => item=="block"?"none":turno[i-1]=="block"?"block":"none")
            setTurno(nuovoTurno)
        }, 300)
    }, [turno])

    return(
        <>
            {
                props.foto.map((img, i) => <img src={img} width={"100%"} style={{display: turno[i], position:"relative", bottom: "16rem"}}/>)
            }
        </>
    )
}