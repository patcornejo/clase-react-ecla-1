import {useContext, useEffect, useState} from "react";
import {IResConfiguration} from "@server/interfaces/IResConfiguration";
import AppContext from "../contexts/AppContext";

export const useGetFetch = (url: string) => {
    const [fetched, setFetched] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('ready');
    const [data, setData] = useState<IResConfiguration | undefined>(undefined);
    const {options} = useContext(AppContext)

    useEffect(() => {

        if (url === '/api/configuration' && options.length > 0) {
            setStatus('loaded');
            setData({success: true, options});
            setFetched(true);
            console.log("FROM CONTEXT")
            return
        }

        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setStatus('loaded');
                setData(res);
                setFetched(true);
                console.log("FROM FETCH")
            })
            .catch((e) => setStatus('error'))
    }, [])

    return {url, fetched, status, data}
}
