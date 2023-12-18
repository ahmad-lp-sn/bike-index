import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem',
        borderRadius: '0.5rem',
        background: 'white'
    },
    image: {
        width: '5rem',
        height: '5rem',
        borderRadius: '0.5rem',
        padding: '0.5rem',
    },
    detailsOuterContainer: {
        flex: 1,
    },
    details: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    detailsCol: {
        flex: 1,
        minWidth: "10rem"
    },
    '@media (min-width: 40rem)': {
        details: {
            flexDirection: 'row',
            gap: "1rem",
        },
        image: {
            width: '10rem',
            height: '10rem',
        },

    },
    '@media (min-width: 30rem)': {
        card: {
            flexDirection: 'row'
        }
    }
});