import React, {useState} from 'react';
import {IInputs} from "../../../../server/interfaces/IInputs";
import {IHistory} from "../../../../server/interfaces/IHistory";

const NewStateComponent: React.FunctionComponent = () => {
    const options = ["Full String", "Each Word", "Order"];
    const [inputs, setInputs] = useState<IInputs>({input: "", select: ""});
    const [history, setHistory] = useState<IHistory[]>([])

    const handleChange = (e) => {
        console.log(e.target.value);
        setInputs({...inputs, ...{input: e.target.value}});
    }

    const handleSelectChange = (e) => {
        console.log("handleSelectChange", e.target.value);
        setInputs({...inputs, ...{select: e.target.value}});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);

        if(inputs.input === "" || inputs.select === "") return
        const arr = inputs.input.split(" ");

        let res;

        switch (inputs.select) {
            case options[0]:
                res = inputs.input.split("").reverse().join("");
                break;
            case options[1]:
                res = arr.map((item) => item.split("").reverse().join(""));
                break;
            case options[2]:
                res = arr.reverse().join(" ");
                break;
        }
        setHistory([...history, {output: res, operation: inputs.select}])
        console.log("res", res)
    }

    return (
        <>
            <form className="form-new-component" onSubmit={handleSubmit}>
                <input placeholder="Ingresa un texto" onChange={handleChange} />
                <select defaultValue="-1" onChange={handleSelectChange}>
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

export default NewStateComponent
