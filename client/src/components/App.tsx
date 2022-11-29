
import React from 'react';
import '../css/styles.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../views/Home";
import Options from "../views/options";
import NotFound from "../views/layouts/NotFound";

// Router UI
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/options" element={<Options />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
