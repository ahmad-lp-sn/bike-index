import { useStyles } from "./styles";

export const Loading = () => {
    const classes = useStyles()
    return (
        <div className={classes.loadingContainer}>
            <div className={classes.loadingSpinner}></div>
        </div>
    );
};

