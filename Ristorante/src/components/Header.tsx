import { useState } from 'react';
import { createStyles, Header as MantineHeader, Container, Anchor, Group, Burger, rem, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const HEADER_HEIGHT = rem(84);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "transparent",
    zIndex: 1,
    position:"fixed",
    width: "100%",
    margin:"auto"
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mainLinks: {
    marginRight: `calc(${theme.spacing.sm} * -1)`,
  },

  mainLink: {
    textTransform: 'uppercase',
    fontSize: rem(13),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    padding: `${rem(7)} ${theme.spacing.sm}`,
    fontWeight: 400,
    borderBottom: `${rem(2)} solid transparent`,
    transition: 'border-color 100ms ease, color 100ms ease',
    fontFamily: "Russo One, sans-serif",

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  mainLinkActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor: theme.colors.red[theme.colorScheme === 'dark' ? 5 : 6],
  },
}));

export interface LinkProps {
  label: string;
  link: string;
}

interface DoubleHeaderProps {
  mainLinks: LinkProps[];
}

export default function Header({ mainLinks }: DoubleHeaderProps){

    const [opened, { toggle }] = useDisclosure(false);
    const { classes, cx } = useStyles();
    const [active, setActive] = useState(0);

    const mainItems = mainLinks.map((item, index) => (
        <Anchor<'a'>
        href={item.link}
        key={item.label}
        className={cx(classes.mainLink, { [classes.mainLinkActive]: index === active })}
        onClick={(event) => {
            event.preventDefault();
            setActive(index);
        }}
        >
        {item.label}
        </Anchor>
    ));

    return(
       <>
        <MantineHeader height={HEADER_HEIGHT} style={{justifyContent:"center", display: "flex"}}>
            <Container className={classes.inner}>
                <Title 
                    fw={500} 
                    order={2}
                    variant="gradient"
                    gradient={{ from: 'red.9', to: 'orange.3', deg: 45 }}
                    className="font-primary"
                >   Ristorante
                </Title>
                <div className={classes.links}>
                    <Group spacing={0} position="right" className={classes.mainLinks}>
                        {mainItems}
                    </Group>
                </div>
                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
            </Container>
        </MantineHeader>
       </> 
    )
}