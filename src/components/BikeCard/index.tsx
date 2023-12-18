import dayjs from "dayjs";
import { useStyles } from "./styles";
import { BikeCardProps } from "./types";
import { FC } from "react";
import { Info } from "../Info";
import { ColorsViewer } from "../ColorsViewer";
import { appConfig } from "../../config";

const googleMapLink = ([lat, long]: [latitude: number, longitude: number]) => `${appConfig.googleMapUrl}?q=${lat},${long}`

export const BikeCard: FC<BikeCardProps> = ({ data }) => {
    const classes = useStyles();

    const formatDate = (timestamp: number): string => {
        return dayjs.unix(timestamp).format('MMMM DD, YYYY');
    };

    return (
        <div className={classes.card} >
            <img
                src={data.large_img || 'logo.jpeg'}
                alt={data.title}
                className={classes.image}
            />
            <div className={classes.detailsOuterContainer}>
                <h2>{data.title}</h2>
                <div className={classes.details}>
                    <ColorsViewer colors={data.frame_colors || []} />
                    <div className={classes.detailsCol}>
                        <Info label="Model" value={`${data.manufacturer_name} ${data.frame_model}`} />
                        <Info label="Serial Number:" value={data.serial} />
                        <Info label="Stolen Date:" value={formatDate(data.date_stolen)} />
                        <Info label="Reported at:" value={''} /** no report date */ />
                    </div>
                    <div className={classes.detailsCol}>
                        {data.stolen_coordinates?.length === 2 ?
                            <Info label="Stolen Location:" value={<a href={googleMapLink(data.stolen_coordinates)} target='_blank' rel="noreferrer" > {data.stolen_location} </a>} />
                            :
                            <Info label="Stolen Location:" value={data.stolen_location} />
                        }
                        <Info label="Status:" value={data.status} />
                        <Info label="Description:" value={data.description} />
                        <a href={data.url} target='_blank' rel="noreferrer" > View on BikeIndex </a>
                    </div>
                </div>
            </div>
        </div>
    );
};