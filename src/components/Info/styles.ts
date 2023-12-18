import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        display: 'flex',
        gap: '0.5rem'
    },
    label: {
        fontWeight: 'bold',
    },
    value: {
        color: '#7A7A7A'
    }
});