import { FC, useContext } from "react"
import { BikeListProps } from "./types"
import { useStyles } from "./styles"
import { DataContext } from "../../providers"
import { BikeCard } from "../BikeCard"
import { Loading } from "../Loading"

export const BikeList: FC<BikeListProps> = () => {
    const classes = useStyles()
    const { data, isLoading, err } = useContext(DataContext)

    return <div className={classes.container}>
        {isLoading ?
            <Loading /> :
            !err ?
                data?.length ?
                    data?.map(item => <BikeCard key={item.id} data={item} />)
                    : <h5>No Results</h5>
                :
                <h5>{err}</h5>
        }
    </div>
}