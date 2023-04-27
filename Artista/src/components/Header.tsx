import { useState } from 'react';
import { createStyles, Header as MantineHeader, Container, Anchor, Group, Burger, rem, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router';

const HEADER_HEIGHT = rem(70);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "transparent",
    position: "relative",
    zIndex: 1,
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
    fontFamily: "Russo One, sans-serif",
    fontSize: rem(13),
    color: theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.gray[1],
    padding: `${rem(7)} ${theme.spacing.sm}`,
    fontWeight: 200,
    borderBottom: `${rem(2)} solid transparent`,
    transition: 'border-color 100ms ease, color 100ms ease',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  mainLinkActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor: theme.colors.gray[theme.colorScheme === 'dark' ? 5 : 1],
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
    const navigate = useNavigate()

    const mainItems = mainLinks.map((item, index) => (
        <Anchor<'div'>
        key={item.label}
        className={cx(classes.mainLink, { [classes.mainLinkActive]: index === active })}
        onClick={() => {
            navigate(item.link)
            setActive(index);
        }}
        >
        {item.label}
        </Anchor>
    ));

    return(
       <>
        <MantineHeader height={HEADER_HEIGHT}>
            <Container className={classes.inner}>
                  <Title 
                      pt={"15px"}
                      className='font-primary'
                      fw={500} 
                      order={2}
                      variant="gradient"
                      gradient={{ from: 'white', to: 'gray.7', deg: 45 }}   
                  >   Vincenzo Nobile
                    <Title 
                      order={2} 
                      pr={"5px"}
                      variant="gradient"
                      align='right'
                      className='font-secondary'
                      gradient={{ from: 'white', to: 'white', deg: 45 }}>Architetto</Title>
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