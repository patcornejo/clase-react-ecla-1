import {useContext, useEffect, useState} from 'react';
import AppContext from "../contexts/AppContext";

export const useGetFetch = (url: string) => {
    const [fetched, setFetched] = useState(false)
    const [status, setStatus] = useState<string>('');
    const [data, setData] = useState(undefined);
    const {options} = useContext(AppContext)
    console.log(options)

    useEffect(() => {

        if (url === '/api/configuration' && options !== undefined) {
            setStatus('loaded')
            setData({success: true, options})
            setFetched(true)
            console.log("FROM CONTEXT")
            return
        }

        fetch(url)
            .then(response => response.json())
            .then(response => {
                console.log("FROM FETCH")
                setStatus('loaded')
                setData(response)
                setFetched(true)
            })
            .catch(e => setStatus('error'))
    }, []);

    return {url, fetched, status, data}
}
