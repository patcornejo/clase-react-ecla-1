import {useEffect, useState} from "react";
import {IResConfiguration} from "@server/interfaces/IResConfiguration";

export const useGetFetch = (url: string) => {
    const [fetched, setFetched] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('ready');
    const [data, setData] = useState<IResConfiguration | undefined>(undefined);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setStatus('loaded');
                setData(res);
                setFetched(true);
            })
            .catch((e) => setStatus('error'))
    }, [])

    return {url, fetched, status, data}
}
