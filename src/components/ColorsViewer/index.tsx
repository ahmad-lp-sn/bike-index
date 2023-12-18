import { FC } from "react"
import { ColorsViewerProps } from "./types"
import { useStyles } from "./styles"

export const ColorsViewer: FC<ColorsViewerProps> = ({ colors }) => {
    const classes = useStyles()
    return <div className={classes.container}>
        {colors.map(color => <div key={color} className={classes.item} style={{ background: color }} />)}
    </div>
}