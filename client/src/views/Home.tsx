import React, {useContext, useEffect, useState} from 'react';
import CustomP from "../components/CustomP";
import NewRefComponentProps from "../components/hooks/NewRefComponentProps";
import ClassResut from "../components/hooks/ClassResult";
import {useGetFetch} from "../hooks/useFetch";
import {IHistory} from "@server/interfaces/IHistory";
import {Link, Outlet, useLoaderData} from "react-router-dom";
import AppContext from "../contexts/AppContext";
import IConfiguration from "@server/interfaces/IConfiguration";

const Home: React.FunctionComponent = () => {
    const [history, setHistory] = useState<IHistory[]>([]);
    const {setOptions, options} = useContext(AppContext)
    const response = useLoaderData() as IConfiguration;
    // const fetch = useGetFetch('/api/configuration');

    const handleChange = (hst: IHistory[]) => {
        setHistory(hst)
    }
    useEffect(() => {
        setOptions(response.options)
    }, []);
/*
    useEffect(() => {
        if (fetch.fetched) setOptions(fetch.data.options);
    }, [fetch.fetched])*/

    return (
        <>
            <div className="app-header">
                <h1> Bienvenido a Curso React</h1>
                <h3>Este es un subtitulo para el curso de React Clase 1.</h3>
            </div>
            <div className="app">
                <h3>Genial bienvenida al curso de React</h3>
                <p>Se viene un desafío para ustedes de crear componentes</p>
            </div>
            <Link to="options" >
                <button>Ir a Options</button>
            </Link>
            <CustomP />
            {
                // <NewStateComponent />
                //<NewRefComponent />
                //
                //<Result history={history} color="black" />
                //<Result history={history} color="red" />
                // <ClassResultRed history={history} />
            }
            {
                <>
                    <NewRefComponentProps handleChange={handleChange} options={response.options} />
                    <ClassResut history={history} />
                </>
            }
        </>
    )
}

export default Home
