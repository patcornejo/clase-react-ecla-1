import React from 'react';
import {useRouteError} from "react-router-dom";

interface IErrorResponse {
    status: number,
    statusText: string
}

const NotFound: React.FunctionComponent = () => {
    const error = useRouteError() as IErrorResponse;

    return (
        <>
            <div>
                <h1>Error al cargar la página</h1>
                <h3>Error {error.status} - {error.statusText}</h3>
            </div>
        </>
    )
}

export default NotFound
