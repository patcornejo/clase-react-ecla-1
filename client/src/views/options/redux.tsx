import React, {useContext, useEffect} from 'react';
import {getOptions} from "../../redux/actions";
import {useAppDispatch, useAppSelector} from "../../redux/reducers";
import Select from 'src/components/Select';
import AppContext from "../../contexts/AppContext";

const OptionsRedux: React.FunctionComponent = (props) => {
    const dispatch = useAppDispatch();
    const selector = useAppSelector(state => state.options)
    const {defaultValue} = useContext(AppContext)

    useEffect(() => {
        dispatch(getOptions())
    }, [])
    return (
        <>
            {
                (!Array.isArray(selector)) ?
                    <Select defaultValue={defaultValue}
                            options={(selector as {options: string[], success: boolean}).options} />
                    : <div>Cargando...</div>
            }
        </>
    )
}

export default OptionsRedux
