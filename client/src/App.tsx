/*export default class App extends React.Component {
    render() {
        return <div></div>
    }
}

export default function App () {

}*/
import React, {useState} from 'react';
import './css/styles.scss';
import Home from "./views/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Options from "./views/options";
import ErrorPage from "./views/layouts/ErrorPage";
import OptionDetail from "./views/options/detail/OptionDetail";
import AppContext from './contexts/AppContext';
import OptionsRedux from "./views/options/redux";

const App = () => {
    const [defaultValue, setDefaultValue] = useState<string>('Each Word');
    const [options, setOptions] = useState<string[] | undefined>(undefined);

    return (
        <AppContext.Provider value={{
            defaultValue, setDefaultValue,
            options, setOptions
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="options" element={<OptionsRedux />} />
                    <Route path="options/:id" element={<OptionDetail />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App
