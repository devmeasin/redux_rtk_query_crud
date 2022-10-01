import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Paper, Transition, Title, Button, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import Modal from '@/components/Modal'

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
    },

    dropdown: {
        position: 'absolute',
        padding: '10px',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },


}));



export const Navbar = () => {

    const [opened, { toggle, close }] = useDisclosure(false);
    const [modalOpened, setModalOpened] = useState(false);
    const { classes, cx } = useStyles();

    return (
        <>
            <Header height={HEADER_HEIGHT} mb={20} className={classes.root}>
                <Container size="95%" className={classes.header}>
                    <Title order={4}><Link to='/'>Hello JSX</Link></Title>
                    <Group className={classes.links}>
                        <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} radius="md" size="md" compact onClick={() => setModalOpened(true)}>
                            Add Student
                        </Button>
                    </Group>

                    <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

                    <Transition transition="pop-top-right" duration={200} mounted={opened}>
                        {(styles) => (
                            <Paper className={classes.dropdown} withBorder style={styles}>
                                <Center>
                                    <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} radius="md" size="md" compact onClick={() => setModalOpened(true)}>
                                        Add Student
                                    </Button>
                                </Center>
                            </Paper>
                        )}
                    </Transition>
                </Container>
            </Header>

            <Modal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </>
    );
}