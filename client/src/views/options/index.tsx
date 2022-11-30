import React, {useContext} from 'react';
import {useGetFetch} from "../../hooks/useFetch";
import {Outlet, useNavigate} from "react-router-dom";
import AppContext from "../../contexts/AppContext";
import Select from 'src/components/Select';

const Index: React.FunctionComponent = () => {
    const navigate = useNavigate();
    const {defaultValue, setDefaultValue} = useContext(AppContext);
    const fetch = useGetFetch('/api/configuration');

    const handleChange = (e) => {
        const opts = fetch.data.options;
        navigate(`/options/${opts.indexOf(e.target.value)}`)
    }

    return (
        <>
            {
                (fetch.fetched) ?
                    <Select handleChange={handleChange}
                            options={fetch.data.options} defaultValue={defaultValue} />
                    : <div>Cargando...</div>
            }
            <button onClick={() => setDefaultValue('Full String')}>Cambiar Default Value</button>
            <div style={{marginTop: 50}}>
                <Outlet />
            </div>
        </>
    )
}

export default Index
