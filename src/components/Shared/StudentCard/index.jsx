import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { IconHeart, IconShare, IconTrash } from '@tabler/icons';
import { Card, Popover, Text, ActionIcon, Button, Group, Center, Skeleton, } from '@mantine/core';
import { useStyles } from './cardDesignHooks';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useDeleteStudentMutation } from '@/services/studentsApi';



const index = ({ student, isLoading }) => {

    const [load, setLoad] = useState(true);
    const [opened, { close, open }] = useDisclosure(false);

    const { id, fullName, phone } = student;
    const { classes, cx, theme } = useStyles();

    const [deleteStudent, { isSuccess }] = useDeleteStudentMutation();

    const popoverHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
    }

    const deleteHandler = async (event, id) => {
        event.preventDefault();
        event.stopPropagation();
        if (id) {
            await deleteStudent(id);
            close();
        }
    }

    return (
        <Link to={`/student/${id}`} >
            <Card withBorder radius="md" className={cx(classes.card)}>
                <Card.Section className={classes.card_body}>
                    <Skeleton visible={load} width="100%" height="100%">
                        <LazyLoadImage
                            afterLoad={() => setLoad(false)}
                            alt='image'
                            effect="blur"
                            width="100%"
                            height="100%"
                            src={`https://api.lorem.space/image/face?${id}&h=140`}
                        />
                    </Skeleton>

                </Card.Section>

                {/* <Badge className={classes?.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
                    asdsad
                </Badge> */}

                <Group position="apart" className={classes.footer}>
                    <Center>
                        <Text className={classes.title} weight={500} component="a" >
                            {fullName}
                        </Text>
                    </Center>

                    <Group spacing={8} mr={0}>
                        <div onClick={(e) => popoverHandler(e)} >
                            <Popover width="30%" position="top" withArrow shadow="md" opened={opened}>
                                <Popover.Target>
                                    <ActionIcon className={classes.action} onClick={opened !== true ? open : close}>
                                        <IconTrash size={16} color={theme.colors.yellow[7]} />
                                    </ActionIcon>
                                </Popover.Target>
                                <Popover.Dropdown style={{ padding: "4px 10px" }} >
                                    <Center>
                                        <Button color="green" radius="xl" size="xs" compact style={{ marginRight: "4px" }} onClick={(event) => deleteHandler(event, id)}>
                                            Yes
                                        </Button>
                                        <Button color="red" radius="xl" size="xs" compact onClick={close}>
                                            No
                                        </Button>
                                    </Center>
                                </Popover.Dropdown>
                            </Popover>
                        </div>
                        <ActionIcon className={classes.action} onClick={(e) => popoverHandler(e)}>
                            <IconHeart size={16} color={theme.colors.red[6]} />
                        </ActionIcon>
                        <ActionIcon className={classes.action} onClick={(e) => popoverHandler(e)}>
                            <IconShare size={16} />
                        </ActionIcon>

                    </Group>
                </Group>
            </Card>
        </Link>
    )
}

export default index;
