import React, {useEffect, useRef, useState} from 'react';
import {IHistory} from "../../../../server/interfaces/IHistory";

interface INewRefComponentProps {
    handleChange: (hst: IHistory[]) => void,
    options: string[]
}

const NewRefComponentProps: React.FunctionComponent<INewRefComponentProps> = ({handleChange, options}) => {
    const inputRef = useRef<HTMLInputElement>();
    const selectRef = useRef<HTMLSelectElement>();
    const [history, setHistory] = useState<IHistory[]>([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputRef.current.value === "" || selectRef.current.value === "") return
        const arr = inputRef.current.value.split(" ");

        let res;

        switch (selectRef.current.value) {
            case options[0]:
                res = inputRef.current.value.split("").reverse().join("");
                break;
            case options[1]:
                res = arr.map((item) => item.split("").reverse().join(""));
                break;
            case options[2]:
                res = arr.reverse().join(" ");
                break;
        }
        const his = [...history, {output: res, operation: selectRef.current.value}];
        //setHistory(his)
        //props.handleChange(his);
        setHistory(his)
    }

    useEffect(() => {
        //Mount
        handleChange(history)
    }, [history]) // Update

    return (
        <>
            <form className="form-new-component" onSubmit={handleSubmit}>
                <input ref={inputRef} placeholder="Ingresa un texto"/>
                <select ref={selectRef} defaultValue="-1">
                    <option disabled value="-1">Selecciona una opción</option>
                    {
                       /* options.map((opt, index) => {
                            return ()
                        })*/
                        options.map((opt, i) => <option key={`option-${i}`}>{opt}</option>)
                    }
                </select>
                <button type="submit">Resolver</button>
            </form>
        </>
    )
}

export default NewRefComponentProps
