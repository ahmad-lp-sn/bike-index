import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        maxWidth: '1200px',
        width: '100%',
    },
    '@media (min-width: 1200px)': {
        container: {
            margin: '0 auto',
        }
    }
})