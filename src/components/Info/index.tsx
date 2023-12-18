import { FC } from "react"
import { InfoProps } from "./types"
import { useStyles } from "./styles"

export const Info: FC<InfoProps> = ({ label, value, defaultValue = "N/A" }) => {
    const classes = useStyles()

    return <div className={classes.container}>
        <p className={classes.label}>{label}</p>
        <p className={classes.value}>{value || defaultValue}</p>
    </div>
}