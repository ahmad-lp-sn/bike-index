import { useContext } from "react"
import { useStyles } from "./styles"
import { DataContext } from "../../providers"

export const PageSwitcher = () => {
    const { filter, lastPage = 1, err, setFilter } = useContext(DataContext)
    const classes = useStyles()

    const currentPage = filter?.page || 1

    const setPage = (page: number) => {
        if (page > lastPage || page < 1) {
            return
        }
        setFilter?.({ ...filter, page })
    }

    return <div className={classes.card}>
        {!err &&
            <>
                <img className={classes.rightArrow} src="rightArrow.svg" onClick={() => setPage(currentPage + 1)} />
                <div>{`${currentPage} / ${lastPage}`}</div>
                <img className={classes.leftArrow} src="rightArrow.svg" onClick={() => setPage(currentPage - 1)} />
            </>
        }
    </div>
}