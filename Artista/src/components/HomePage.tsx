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
import capo  from "../public/capo.jpg"
import colombia  from "../public/colombia/colombia.gif"
import filzi from "../public/filzi.jpg"
import monsu from "../public/monsu.jpg"
import pisto from "../public/pisto.jpg"

import { Button, Group, SimpleGrid, Title,useMantineTheme, Modal, Tooltip, Text } from '@mantine/core'
import MiniGridBox from './MiniGridBox'
import { useState } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import ChiSonoPage from './ChiSonoPage'

export default function HomePage(){
    const theme = useMantineTheme();
    const [opened, setOpened] = useState<boolean>(false);
    const [openedTooltip, setOpenedTooltip] = useState<boolean>(false);

    return(
        <>
            <Group position={"center"} spacing="xl" style={{overflow: "hidden", paddingTop: "2rem"}} >
                <SimpleGrid
                cols={4}
                spacing={5}
                breakpoints={[
                    { maxWidth: '62rem', cols: 3, spacing: 'md' },
                    { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                    { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                ]}
                >
                    <GridBox href="/" hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={aviva}></GridBox>
                    <GridBox href="/aviva-associateds-architect" hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={aviva2}></GridBox>
                    <GridBox href="/piazza-brunelleschi" hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={brune}></GridBox>
                    <GridBox href="/kish-island" hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={iran}></GridBox>

                    <GridBox href="/mar-caspio" hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={marcaspio}></GridBox>
                    
                    <Group align='center' style={{width:"10rem", height:"10rem", zIndex:1, position:"relative"}}>
                        <Title color={theme.white} className='font-primary' style={{whiteSpace:"nowrap", position:"absolute",left:"50%", bottom:"50%", borderBottom:"2px solid white"}}>Chi Sono?</Title>
                        <Button onClick={()=>setOpened(true)} variant="gradient" gradient={{from:"white", to:"#1a1b27"}} style={{position:"absolute",left:"55%", bottom:"15%", paddingRight:"2rem",paddingLeft:"2rem"}}><Title order={1} className='font-secondary'>Cliccami!</Title></Button>
                    </Group>
                    <div></div>

                    <GridBox href="/iq" hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={quality}></GridBox>

                    <GridBox href="/restauro" hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={restauro}></GridBox>
                    <GridBox href="/viacavour" hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={viacavour}></GridBox>
                    <GridBox href="/capo" hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={capo}></GridBox>
                    <GridBox href="/aviva-associateds-architect" hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={aviva2}></GridBox>

                    <GridBox href="/colombia" hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={colombia} width='142rem'></GridBox>
                    <MiniGridBox color={theme.colors.gray[3]} hoveredColor={theme.colors.gray[9]}>
                        {[  
                            <GridBox small href="/filzi" hoveredColor={"transparent"} color={"transparent"} src={filzi}></GridBox>,
                            <GridBox small href="/monsu" hoveredColor={"transparent"} color={"transparent"} src={monsu}></GridBox>,
                            <GridBox small href="/via-pistoiese" hoveredColor={"transparent"} color={"transparent"} src={pisto}></GridBox>,
                            <GridBox small href="/filzi" hoveredColor={"transparent"} color={"transparent"} src={filzi}></GridBox>
                        ]}
                    </MiniGridBox>
                    
                    <GridBox href="https://www.nagartgallery.com/" _blank hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={nag}></GridBox>
                    <GridBox href="/libro" hoveredColor={theme.colors.gray[9]} color={theme.colors.gray[3]} src={planimetria}></GridBox>

                </SimpleGrid>
            </Group>
            <Modal.Root opened={opened} onClose={()=>setOpened(false)} size="xl" radius="md" p={0} >
                <Modal.Overlay />
                <Modal.Content>
                    <Modal.Header p={10}>
                        <Modal.Title className='font-primary' fz={"2rem"} ta={"center"} w={"100%"} pl={15}>Vincenzo Nobile</Modal.Title>
                        <Modal.CloseButton />
                    </Modal.Header>
                    <Modal.Body>
                        <Group align="center" position="center" style={{position:"relative"}}>
                            <Title order={4} variant='gradient' gradient={{from:"orange.3", to: theme.colors.indigo[9]}}>Il Capo della Costruzione <span className='font-secondary' style={{paddingLeft:"2rem"}}>" ἀρχιτέκτων "</span></Title>
                            <Tooltip
                                opened={openedTooltip}
                                label={<Text className="font-primary">"Il termine architetto, derivato nelle lingue occidentali dal latino,<br/> è di origine greca: ἀρχιτέκτων (pronuncia architéktōn), <br/>parola composta dai termini ἀρχή (arché) e τέκτων (técton) che significa<br/> 'ingegnere', 'capo costruttore', 'primo artefice' o proprio 'architetto'."</Text>}
                                color={theme.colors.gray[8]}
                                zIndex={500}
                                withinPortal
                                >
                                <Button variant='outline' style={{border:0}} onPointerEnter={()=>setOpenedTooltip(true)} onPointerLeave={()=>setOpenedTooltip(false)}>
                                    <AiFillInfoCircle size={24} style={{fill:theme.colors.orange[3], cursor: "pointer"}} />
                                </Button>
                            </Tooltip>
                        </Group>
                        <hr />
                        <ChiSonoPage />
                    </Modal.Body>
                </Modal.Content>
            </Modal.Root>
        </>
    )
}