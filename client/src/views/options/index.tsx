import React, {useContext} from 'react';
import {useGetFetch} from "../../hooks/useFetch";
import {BrowserRouter, Outlet, Route, useNavigate} from "react-router-dom";
import OptionDetail from "./OptionDetail";
import AppContext from "../../contexts/AppContext";
import app from "../../components/App";
import Select from "../../components/Select";

const Index: React.FunctionComponent = () => {
    const appContext = useContext(AppContext)
    const navigate = useNavigate();
    const fetch = useGetFetch('/api/configuration');

    const handleChange = (e) => {
        const opts = fetch.data.options;
        navigate(`/options/${opts.indexOf(e.target.value)}`)
    }

    const handleClick = () => {
        appContext.setDefaultValue('Each Word')
    }

    return (
        <>
            <>
                <h1>Estoy en Options</h1>
                <p>Estoy dentro de la sección Option</p>
                {
                    (fetch.fetched) ?
                        <Select
                            handleChange={handleChange}
                            options={fetch.data.options}
                            defaultValue={appContext.defaultValue} />
                         : <p>Cargando...</p>
                }
                <button onClick={handleClick}>Cambiar Default Value</button>
                <div style={{marginTop: 50}}>
                    <Outlet />
                </div>
            </>
        </>
    )
}

Index.displayName = 'IndexOption';
export default Index;
