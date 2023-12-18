import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    card: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        padding: '0.5rem',
        borderRadius: '0.5rem',
        background: '#ffffff9c',
        backdropFilter: 'blur(15px)',
        position: "sticky",
        bottom: 0
    },
    rightArrow: {
        height: '2rem',
        width: '2rem',
        cursor: 'pointer'
    },
    leftArrow: {
        height: '2rem',
        width: '2rem',
        cursor: 'pointer',
        transform: "rotate(180deg)"
    }
})