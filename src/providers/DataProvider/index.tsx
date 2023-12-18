import {
    FC,
    PropsWithChildren,
    createContext,
    useEffect,
    useRef,
    useState,
} from "react";
import queryString from "query-string";
import { BikeFilter, DataContextProps } from "./types";
import { endPoints } from "../../api/endpoints";
import { appConfig } from "../../config";
import { BikeData } from "../../types";

export const DataContext = createContext<DataContextProps>({});

const getData = async (filter: BikeFilter, controller?: AbortController): Promise<BikeData[]> => {
    const url = `${appConfig.baseUrl + endPoints.v3.search
        }?${queryString.stringify(filter)}`;

    const response = await fetch(url, { signal: controller?.signal });
    if (response.status !== 200) {
        throw Error(response.status.toString());
    }

    return (await response.json()).bikes;
};

const countData = async (filter: BikeFilter, controller?: AbortController): Promise<number> => {
    const url = `${appConfig.baseUrl + endPoints.v3.count
        }?${queryString.stringify(filter)}`;

    const response = await fetch(url, { signal: controller?.signal });
    if (response.status !== 200) {
        throw Error(response.status.toString());
    }

    return (await response.json()).stolen;
};

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
    const [data, setData] = useState<BikeData[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [err, setError] = useState<string>('')
    const [filter, setFilter] = useState<BikeFilter>({ page: 1, per_page: appConfig.defaultPageSize });
    const controller = useRef<AbortController | undefined>()

    useEffect(() => {
        controller.current?.abort()
        setIsLoading(true)
        setError('')
        const _controller = new AbortController()
        Promise.all([
            getData(filter, _controller).then(setData),
            countData(filter, _controller).then(setTotalCount)
        ])
            .catch(() => !_controller.signal.aborted && setError("Someting went wrong"))
            .finally(() => !_controller.signal.aborted && setIsLoading(false));

        controller.current = _controller
        return () => controller.current?.abort()
    }, [filter]);

    return (
        <DataContext.Provider
            value={{
                data,
                isLoading,
                err,
                filter,
                lastPage: Math.ceil(totalCount / (filter?.per_page || appConfig.defaultPageSize)) || 1,
                setFilter,
                setPage: (pageNumber) => setFilter({ ...filter, page: pageNumber }),
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
