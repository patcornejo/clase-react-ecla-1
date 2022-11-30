import React, {useEffect, useReducer} from 'react';
import {Actions, getOptions} from "../../redux/actions";
import * as reducers from "../../redux/reducers";

const OptionsRedux2: React.FunctionComponent = (props) => {
    const [state, dispatch] = useReducer(reducers.options, [])

    useEffect(() => {
        fetch('api/configuration')
            .then((res) => res.json())
            .then((data) => {
                dispatch({type: Actions.GET_OPTIONS, payload: data})
            })
        // dispatch(getOptions())
        //dispatch({ type: Actions.GET_OPTIONS, payload: {options: ["", ""], success: true} });
    }, [])

    return (
        <>
            {console.log(state)}
        </>
    )
}

export default OptionsRedux2
