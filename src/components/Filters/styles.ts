import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    card: {
        display: 'flex',
        padding: '0.5rem',
        borderRadius: '0.5rem',
        background: '#ffffff9c',
        backdropFilter: 'blur(15px)',
        top: 0
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '0.5rem',
    },
    inputContainer: {
        display: 'flex',
        width: "100%",
        height: 'fit-content',
        flexDirection: 'column'
    },
    dateInputContainer: {},
    inputLabel: {
        marginBottom: '0.1rem'
    },
    input: {
        height: 'fit-content',
        padding: '0.5rem',
        border: '0px',
        borderRadius: '0.5rem',
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-in-out"
    },
    '@media (min-width: 40rem)': {
        card: {
            position: 'sticky',
        },
        container: {
            flexDirection: 'row',
        },
        dateInputContainer: {
            maxWidth: '20rem'
        }
    }
})