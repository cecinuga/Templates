import { Carousel } from '@mantine/carousel';
import { createStyles, Paper, rem } from '@mantine/core';

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
  i: number
}

function Card({ image, height, width, slide, i }: CardProps) {
  const { classes } = useStyles();
  const positions = () => {
    if(slide!>1){
      if (i != -1){
        if(i==0||i%2==0){
          return {right: 0}
        }
        return {left: 0}
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
      <img src={image} width={width} style={{margin: slide==2?"unset":"auto",position:slide!>1?i!=-1?"absolute":"unset":"relative", ...positions(), padding:i!=-1?"0.5rem":"0"}} />
    </Paper>
  );
}

type CarouselFotoProps = {
    data: {image: string;}[]
    height?: string
    width?: string
    slide?: number
    slideSize?: string
}

export function CarouselFoto(props: CarouselFotoProps) {
  const slides = props.data.map((item, i) => (
    <Carousel.Slide key={item.image}>
      <Card image={item.image} height={props.height} width={props.width} slide={props.slide} i={props.slide?i:-1}></Card>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={props.slideSize?props.slideSize:1}
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={props.slide!=undefined?props.slide:1}
      
    >
      {slides}
    </Carousel>
  );
}
