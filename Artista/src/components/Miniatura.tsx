import {Group, Text, useMantineTheme} from "@mantine/core"
import { Link } from "react-router-dom";

type MiniaturaProps = {
    foto: string;
    desc: string;
    to: string
    external?: boolean
}

export default function Miniatura(props: MiniaturaProps){
    const theme = useMantineTheme()

    return(
        <Group>
            <div style={{display:"inline-block"}}>
                <Link to={props.external?props.to:"/aviva"+props.to} target={props.external?"_blank":"_self"}><img src={props.foto} /></Link>
            </div>
            <div style={{display:"inline-block", width:"10rem"}}>
                <Text c={theme.colors.gray[5]} pos="relative" fz={12}>{props.desc}</Text>
            </div>
        </Group>
    )
}