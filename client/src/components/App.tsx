/*export default class App extends React.Component {
    render() {
        return <div></div>
    }
}

export default function App () {

}*/
import React, {useEffect, useState} from 'react';
import '../css/styles.scss';
import CustomP from "./CustomP";
import NewStateComponent from "./hooks/NewStateComponent";
import NewRefComponent from "./hooks/NewRefComponent";
import NewRefComponentProps from "./hooks/NewRefComponentProps";
import {IHistory} from "../../../server/interfaces/IHistory";
import Result from "./hooks/Result";
import ClassResut from "./hooks/ClassResult";
import ClassResultRed from "./hooks/ClassResult/Red";
import {IResConfiguration} from "@server/interfaces/IResConfiguration";
import {useGetFetch} from "../hooks/useFetch";

const App = () => {
    const [history, setHistory] = useState<IHistory[]>([]);
    // const [options, setOptions] = useState<string[] | undefined>(undefined)
    // const fetch = useGetFetch('api/configuration');
    const {fetched, data} = useGetFetch('api/configuration');

    // Use Effect - fetch
/*    useEffect(() => {
        // Promise
        /!*fetch('/api/configuration')
            .then((res) => res.json())
            .then((res: IResConfiguration) => {
                setOptions(res.options)
            })
            .catch((e) => console.error("Error!", e))*!/

        // Async / Await
        /!*  const load =  async () => {
            const res = await fetch('/api/configuration');
            const data = await res.json() as IResConfiguration;

            if (data.success) setOptions(data.options)
            else console.error("Error en la consulta")
        }

        load()*!/

/!*        (async () => {
            const res = await fetch('/api/configuration');
            const data = await res.json() as IResConfiguration;

            if (data.success) setOptions(data.options)
            else console.error("Error en la consulta")
        })()*!/
    }, [])*/


    const handleChange = (hst: IHistory[]) => {
        setHistory(hst)
    }

/*    if (options === undefined) {
        return <>
            <p>Cargando Componente hasta que options este disponible</p>
        </>
    }*/

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
            {
/*                (options !== undefined) ? <>
                    <NewRefComponentProps handleChange={handleChange} options={options} />
                    <ClassResut history={history} />
                    <ClassResultRed history={history} />
                </> : <p>Cargando...</p>*/

                fetched ? <>
                    <NewRefComponentProps handleChange={handleChange} options={data.options} />
                    <ClassResut history={history} />
                    <ClassResultRed history={history} />
                </> : <p>Cargando...</p>
            }

        </>
    )
}

export default App
