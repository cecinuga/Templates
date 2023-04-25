import { Group, SimpleGrid, useMantineTheme } from '@mantine/core'
import './App.css'
import Header, { LinkProps } from './components/Header'
import GridBox from './components/GridBox'
import aviva from "./public/aviva.jpg"
import aviva2 from "./public/aviva2.jpg"
import brune from "./public/brune.jpg"
import iran from "./public/iran.jpg"
import marcaspio from "./public/marcaspio.jpg"
import nag from "./public/nag.jpg"
import planimetria from "./public/planimetria.jpg"
import restauro from "./public/restauro.jpg"
import viacavour from "./public/viacavour.jpg"
import quality from "./public/quality.jpg"

const Home: LinkProps = {label: 'Home', link: "/"}
const Opere: LinkProps = {label: 'Opere', link:"/opere"}
const ChiSono: LinkProps = {label: 'Chi Sono ?', link: "/chi-sono"}
const Gallerie: LinkProps = {label: 'Gallerie', link: "/gallerie"}

function App() {
  const theme = useMantineTheme();

  return (
    <>
      <Header mainLinks={[Home, Opere, ChiSono, Gallerie]} />
      <Group position={"center"} spacing="xl"  >
      <SimpleGrid
        cols={4}
        spacing={50}
        breakpoints={[
          { maxWidth: '62rem', cols: 3, spacing: 'md' },
          { maxWidth: '48rem', cols: 2, spacing: 'sm' },
          { maxWidth: '36rem', cols: 1, spacing: 'sm' },
        ]}
      >
        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={aviva}/></GridBox>
        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={aviva2} /></GridBox>
        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={brune} /></GridBox>
        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={iran} /></GridBox>

        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={marcaspio} /></GridBox>
        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={nag} /></GridBox>
        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={planimetria} /></GridBox>
        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={quality} /></GridBox>

        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={restauro} /></GridBox>
        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={viacavour} /></GridBox>
        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={aviva2} /></GridBox>
        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={aviva2} /></GridBox>

        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={aviva2} /></GridBox>
        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={aviva2} /></GridBox>
        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={aviva2} /></GridBox>
        <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]}><img src={aviva2} /></GridBox>

      </SimpleGrid>

      </Group>
    </>
  )
}

export default App
