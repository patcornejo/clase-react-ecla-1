import React from 'react';
import {useRouteError} from "react-router-dom";

interface IErrorResponse {
    statusText: string
}

const ErrorPage: React.FunctionComponent = () => {
    const error = useRouteError() as IErrorResponse;

    return (
        <div>
            <p>Error al cargar la página</p>
            <p>{error.statusText}</p>
        </div>
    )
}

export default ErrorPage
