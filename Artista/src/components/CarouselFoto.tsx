import { Carousel } from '@mantine/carousel';
import { createStyles, Paper, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  height? : string
}

function Card({ image, height }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      radius="md"
      p={50}
      style={{ backgroundImage: `url(${image})`, height: height}}
      className={classes.card}
    >

    </Paper>
  );
}

type CarouselFotoProps = {
    data: {image: string;}[]
    height?: string
}

export function CarouselFoto(props: CarouselFotoProps) {
  const slides = props.data.map((item) => (
    <Carousel.Slide key={item.image}>
      <Card image={item.image} height={props.height} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={1}
    >
      {slides}
    </Carousel>
  );
}
