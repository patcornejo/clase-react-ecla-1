/*export default class App extends React.Component {
    render() {
        return <div></div>
    }
}

export default function App () {

}*/
import React from 'react';
import '../css/styles.css';
import CustomP from "./CustomP";

const App = () => {
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
        </>
    )
}

export default App
