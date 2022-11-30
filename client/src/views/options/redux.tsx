import React, {useContext, useEffect} from 'react';
import {getOptions} from "../../redux/actions/options";
import {useDispatch, useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import Select from "../../components/Select";
import AppContext from "../../contexts/AppContext";
import {IResConfiguration} from "@server/interfaces/IResConfiguration";

const OptionsRedux: React.FunctionComponent = () => {
    const selector = useAppSelector(state => state.options);
    const dispatch = useAppDispatch();
    const appContext = useContext(AppContext);

    useEffect(() => {
        dispatch(getOptions());
    }, [])

    return (
        <>
            <>
                <h1>Estoy en Options</h1>
                <p>Estoy dentro de la sección Option</p>
                {
                    (!Array.isArray(selector)) ?
                        <Select options={(selector as IResConfiguration).options} defaultValue={appContext.defaultValue} />
                        : <div>Cargando...</div>
                }
            </>
        </>
    )
}

OptionsRedux.displayName = 'OptionsRedux';
export default OptionsRedux;
