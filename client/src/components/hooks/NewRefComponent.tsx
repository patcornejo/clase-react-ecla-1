import React, {useRef, useState} from 'react';

const NewRefComponent: React.FunctionComponent = () => {
    const options = ["Full String", "Each Word", "Order"];
    const inputRef = useRef<HTMLInputElement>();
    const selectRef = useRef<HTMLSelectElement>();
    const [history, setHistory] = useState([])

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
        setHistory([...history, {output: res, operation: selectRef.current.value}])
        console.log("res", res)
    }

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
            <ul>
                {
                    history.map((h, i) => <li key={`history-${i}`}>{h.output} - {h.operation}</li>)
                }
            </ul>
        </>
    )
}

export default NewRefComponent
