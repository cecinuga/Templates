import './App.css'
import Header, { LinkProps } from './components/Header'

const Home: LinkProps = {label: "Home", link:"/"}
const Menu: LinkProps = {label: "Menu", link:"/menu"}
const La_Brigata: LinkProps = {label: "La Brigata", link:"/la-brigata"}
const Prenota: LinkProps = {label: "Prenota", link:"/prenota"}

function App() {

  return (
    <>
      <Header mainLinks={[Home, Menu, La_Brigata, Prenota]} />
    </>
  )
}

export default App
