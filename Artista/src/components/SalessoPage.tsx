import img0 from "../public/salesso/00.jpg"
import img1 from "../public/salesso/01.jpg"
import img2 from "../public/salesso/02.jpg"
import img3 from "../public/salesso/03.jpg"
import img4 from "../public/salesso/04.jpg"
import img5 from "../public/salesso/00.jpg"
import img6 from "../public/salesso/06.jpg"
import img7 from "../public/salesso/07.jpg"
import img8 from "../public/salesso/08.jpg"
import img9 from "../public/salesso/09.jpg"
import img10 from "../public/salesso/10.jpg"
import img11 from "../public/salesso/11.jpg"
import img12 from "../public/salesso/12.jpg"
import img13 from "../public/salesso/13.jpg"
import img14 from "../public/salesso/14.jpg"
import img15 from "../public/salesso/15.jpg"
import img16 from "../public/salesso/16.jpg"
import img17 from "../public/salesso/17.jpg"
import img18 from "../public/salesso/18.jpg"
import Book from "./Book";
import { useMantineTheme } from "@mantine/core"


export default function SalessoPage(){
    const theme = useMantineTheme()

    return(
        <>
            <div style={{marginTop:"2rem"}}></div>
            <Book imageHeight="100%" copertina={img0} gradient={{from:theme.colors.green[5]+"AA", to:theme.colors.green[9]+"AA"}} data={[{image: img1},{image: img2},{image: img3},{image: img4},{image: img5},{image: img6},{image: img7},{image: img8},{image: img9},{image: img10},{image: img11},{image: img12},{image: img13},{image: img14},{image: img15},{image: img16},{image: img17},{image: img18}]}/>
        </>
    )
}