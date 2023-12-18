import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        display: 'flex',
        gap: '0.1rem',
        width: '100%',
        borderRadius: "0.5rem",
        overflow: 'hidden',
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-in-out"
    },
    item: {
        flex: 1,
        height: "0.5rem",
    },
    '@media (min-width: 40rem)': {
        container: {
            flexDirection: 'column',
            width: '0.5rem'
        }
    }
});