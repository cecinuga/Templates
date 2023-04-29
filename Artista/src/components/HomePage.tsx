import GridBox from './GridBox'
import aviva from "../public/aviva.jpg"
import aviva2 from "../public/aviva2.jpg"
import brune from "../public/brune.jpg"
import iran from "../public/iran.jpg"
import marcaspio from "../public/marcaspio.jpg"
import nag from "../public/nag.jpg"
import planimetria from "../public/planimetria.jpg"
import restauro from "../public/restauro.jpg"
import viacavour from "../public/viacavour.jpg"
import quality from "../public/quality.jpg"
import { Group, SimpleGrid, useMantineTheme } from '@mantine/core'
import BackgroundGradient from './BackgroundGradient'

export default function HomePage(){
    const theme = useMantineTheme();
    return(
        <>
            <BackgroundGradient bgColor={"#1a1b27"} gradient={true} move={true} />
            <Group position={"center"} spacing="xl" style={{overflow: "hidden", paddingTop: "2rem"}} >
                <SimpleGrid
                cols={4}
                spacing={50}
                breakpoints={[
                    { maxWidth: '62rem', cols: 3, spacing: 'md' },
                    { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                    { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                ]}
                >
                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={aviva}></GridBox>
                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={aviva2}></GridBox>
                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={brune}></GridBox>
                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={iran}></GridBox>

                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={marcaspio}></GridBox>
                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={nag}></GridBox>
                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={planimetria}></GridBox>
                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={quality}></GridBox>

                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={restauro}></GridBox>
                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={viacavour}></GridBox>
                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={aviva2}></GridBox>
                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={aviva2}></GridBox>

                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={aviva2}></GridBox>
                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={aviva2}></GridBox>
                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={aviva2}></GridBox>
                <GridBox hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={aviva2}></GridBox>

                </SimpleGrid>
            </Group>
        </>
    )
}