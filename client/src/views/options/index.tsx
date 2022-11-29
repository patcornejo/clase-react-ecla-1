import React from 'react';
import {useGetFetch} from "../../hooks/useFetch";
import {BrowserRouter, Route} from "react-router-dom";

const Index: React.FunctionComponent = () => {
    const {fetched, data} = useGetFetch('/api/configuration');

    return (
        <>
            <>
                <h1>Estoy en Options</h1>
                <p>Estoy dentro de la sección Option</p>
                {
                    (fetched) ? <select defaultValue="-1">
                        <option disabled value="-1">Selecciona una opción</option>
                        {
                            /* options.map((opt, index) => {
                                 return ()
                             })*/
                            data.options.map((opt, i) => <option key={`option-${i}`}>{opt}</option>)
                        }
                    </select> : <p>Cargando...</p>
                }
            </>
        </>
    )
}

Index.displayName = 'IndexOption';
export default Index;
