import React from 'react';
import {useParams} from "react-router-dom";

const OptionDetail: React.FunctionComponent = () => {
    const params = useParams();
    return(
        <>
            Soy la opción número {params.id}
        </>
    )
}

export default OptionDetail;
