import './App.css'
import Header, { LinkProps } from './components/Header'
import WallpaperFotoAScatto from './components/WallpaperFotoAScatto'
import wallpaper from "./assets/wallpaper.jpg"
import wallpaper1 from "./assets/wallpaper1.jpg"
import wallpaper3 from "./assets/wallpaper3.jpg"
import wallpaper4 from "./assets/wallpaper4.jpg"
import wallpaper5 from "./assets/wallpaper5.jpg"
import wallpaper6 from "./assets/wallpaper6.jpg"
import wallpaper7 from "./assets/wallpaper7.jpg"
import wallpaper8 from "./assets/wallpaper8.jpg"
import wallpaper9 from "./assets/wallpaper9.jpg"
import wallpaper10 from "./assets/wallpaper10.jpg"
import wallpaper11 from "./assets/wallpaper11.jpg"
import wallpaper12 from "./assets/wallpaper12.jpg"
import wallpaper13 from "./assets/wallpaper13.jpg"
import wallpaper14 from "./assets/wallpaper14.jpg"
import wallpaper15 from "./assets/wallpaper15.jpg"
import wallpaper16 from "./assets/wallpaper16.jpg"
import wallpaper17 from "./assets/wallpaper17.jpg"
import { Group, Text, Title, useMantineTheme } from '@mantine/core'
import {BsFillArrowDownCircleFill} from "react-icons/bs"
import { animated, useSpring } from '@react-spring/web'

const Home: LinkProps = {label: "Home", link:"/"}
const Menu: LinkProps = {label: "Menu", link:"/menu"}
const La_Brigata: LinkProps = {label: "La Brigata", link:"/la-brigata"}
const Prenota: LinkProps = {label: "Prenota", link:"/prenota"}

function App() {
  const theme = useMantineTheme()

  const arrowAni = useSpring({
    from: {
      y: 0
    },
    to: {
      y: 50
    },
    config: {
      mass: 5,
      tension: 1000, 
    },
    loop: true
  })

  return (
    <>
      <Header mainLinks={[Home, Menu, La_Brigata, Prenota]} />
      <div style={{position:"absolute", top:"0", zIndex: "0"}}>
        <WallpaperFotoAScatto foto={[wallpaper1, wallpaper1, wallpaper, wallpaper5, wallpaper3, wallpaper4, wallpaper10, wallpaper11, wallpaper12, wallpaper13, wallpaper14, wallpaper15, wallpaper16, wallpaper17, wallpaper9, wallpaper8, wallpaper6, wallpaper7, wallpaper5]} />
      </div>
      <Group mt={"33%"} position='center' style={{zIndex: "1", position:"relative"}}>
        <Title align='center' className='font-secondary' order={1} fw={300} variant='gradient' gradient={{from: "red.9", to: "orange.5"}}>
          Scorri in basso...
          <Text>
            <animated.div style={{...arrowAni, position: "relative"}}>
              <BsFillArrowDownCircleFill size={48} fill={theme.colors.red[8]} style={{cursor: "pointer"}} />  
            </animated.div>
          </Text>
        </Title>
      </Group>
    </>
  )
}

export default App
