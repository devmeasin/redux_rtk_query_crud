import { createStyles, } from '@mantine/core';


export const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
    card_body: {
        height: '270px',
        overflow: 'hidden',
    },
    rating: {
        position: 'absolute',
        top: theme.spacing.xs,
        right: theme.spacing.xs + 2,
        pointerEvents: 'none',
    },

    title: {
        display: 'block',
        // marginTop: theme.spacing.md,
        // marginBottom: theme.spacing.xs / 2,
    },

    action: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        }),
    },

    footer: {
        marginTop: theme.spacing.md,
    },
}));