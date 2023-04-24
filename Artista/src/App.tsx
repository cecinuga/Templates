import { Group } from '@mantine/core'
import './App.css'
import Header, { LinkProps } from './components/Header'

const Home: LinkProps = {label: 'Home', link: "/"}
const Opere: LinkProps = {label: 'Opere', link:"/opere"}
const ChiSono: LinkProps = {label: 'Chi Sono ?', link: "/chi-sono"}
const Gallerie: LinkProps = {label: 'Gallerie', link: "/gallerie"}

function App() {
  return (
    <>
      <Header mainLinks={[Home, Opere, ChiSono, Gallerie]} />
      <Group position={"center"} spacing="xl"  >
        <Button></Button>
      </Group>
    </>
  )
}

export default App
