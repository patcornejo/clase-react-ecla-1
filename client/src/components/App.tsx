/*export default class App extends React.Component {
    render() {
        return <div></div>
    }
}

export default function App () {

}*/
import React, {useState} from 'react';
import '../css/styles.scss';
import CustomP from "./CustomP";
import NewStateComponent from "./hooks/NewStateComponent";
import NewRefComponent from "./hooks/NewRefComponent";
import NewRefComponentProps from "./hooks/NewRefComponentProps";
import {IHistory} from "../../../server/interfaces/IHistory";
import Result from "./hooks/Result";
import ClassResut from "./hooks/ClassResult";
import ClassResultRed from "./hooks/ClassResult/Red";

const App = () => {
    const [history, setHistory] = useState<IHistory[]>([]);

    const handleChange = (hst: IHistory[]) => {
        setHistory(hst)
    }

    return (
        <>
            <div className="app-header">
                <h1> Bienvenido a Curso React</h1>
                <h3>Este es un subtitulo para el curso de React Clase 1.</h3>
            </div>
            <div className="app">
                <h3>Genial bienvenida al curso de React</h3>
                <p>Se viene un desafío para ustedes de crear componentes</p>
            </div>
            <CustomP />
            {
                // <NewStateComponent />
                //<NewRefComponent />
                //
                //<Result history={history} color="black" />
                //<Result history={history} color="red" />
            }
            <NewRefComponentProps handleChange={handleChange} />
            <ClassResut history={history} />
            <ClassResultRed history={history} />
        </>
    )
}

export default App
