import { useContext, useEffect, useState } from "react"
import { useStyles } from "./styles"
import { DataContext } from "../../providers"
import classNames from "classnames"

export const Filters = () => {
    const [query, setQuery] = useState('')
    const { setFilter } = useContext(DataContext)
    const classes = useStyles()

    useEffect(() => {
        const timeOutId = setTimeout(() => { setFilter?.(filter => ({ ...filter, query })) }, 500)
        return () => clearTimeout(timeOutId);
    }, [query]);

    return <div className={classes.card}>
        <div className={classes.container}>
            <div className={classes.inputContainer}>
                <h6 className={classes.inputLabel}>Case title</h6>
                <input placeholder="Search..." className={classes.input} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className={classNames(classes.inputContainer, classes.dateInputContainer)}>
                <h6 className={classes.inputLabel}>Start Date (not supported)</h6>
                <input
                    className={classes.input}
                    type="date"
                />
            </div>
            <div className={classNames(classes.inputContainer, classes.dateInputContainer)}>
                <h6 className={classes.inputLabel}>End Date (not supported)</h6>
                <input
                    className={classes.input}
                    type="date"
                />
            </div>
        </div>
    </div>
}