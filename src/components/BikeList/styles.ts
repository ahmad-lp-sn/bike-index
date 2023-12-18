import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'auto',
        padding: '0.5rem',
        gap: '0.5rem'
    }
});