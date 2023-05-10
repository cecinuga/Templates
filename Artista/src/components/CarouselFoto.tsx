import { Carousel } from '@mantine/carousel';
import { createStyles, Paper, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { EmblaCarouselType } from 'embla-carousel-react';
import { useEffect, useState } from 'react';

const useStyles = createStyles(() => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

interface CardProps {
  image: string;
  height? : string
  width?: string
  slide?: number;
  imageHeight?:string;
  i: number
}

function Card({ image, height, width, slide, i,imageHeight }: CardProps) {
  const xs = useMediaQuery("(max-width: 768px)")
  const { classes } = useStyles();
  const positions = () => {
    if(slide!>1){
      if (i != -1&&!xs){
        if(i==0||i%2==0){
          return {right: 0}
        }
        return {left: 0}
      }
      else if (i != -1&&xs){
        return {left: "50%", top:"50%",transform: "translate(-50%,-50%)"}
      }
    }
    if(!(slide!>1)&&xs){
      return {
        lefT:"50%",
      }
    }
    return {}
  }
  return (
    <Paper
      shadow="md"
      radius="md"
      style={{ marginRight:"auto", marginLeft:"auto", height: height, backgroundColor: "transparent"}}
      className={classes.card}
    >
      <img src={image} width={xs?"300rem":width} height={xs?"300rem":imageHeight} style={{margin: slide==2?"unset":"auto",position:slide!>1?i!=-1?"absolute":"unset":"absolute", ...positions(), padding:i!=-1?"0.5rem":"0"}} />
    </Paper>
  );
}

type CarouselFotoProps = {
    data: {image: string;}[]
    height?: string
    width?: string
    slide?: number
    slideSize?: string
    imageHeight?: string 
}

export function CarouselFoto(props: CarouselFotoProps) {
  const [embla, setEmbla] = useState<EmblaCarouselType>();
  const xs = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    setTimeout(() => embla && embla.reInit(), 1000);
}, [embla]);

  const slides = props.data.map((item, i) => (
    <Carousel.Slide key={item.image}>
      <Card image={item.image} height={props.height} width={props.width} slide={props.slide} i={props.slide?i:-1} imageHeight={props.imageHeight}></Card>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      getEmblaApi={setEmbla}
      slideSize={props.slideSize?props.slideSize:1}
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={xs?1:props.slide!=undefined?props.slide:1}
      
    >
      {slides}
    </Carousel>
  );
}
