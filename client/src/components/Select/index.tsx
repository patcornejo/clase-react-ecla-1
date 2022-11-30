import React from 'react';

interface ISelect {
    options: string[],
    defaultValue: string,
    handleChange?: React.ChangeEventHandler<HTMLSelectElement>
    sRef?: React.LegacyRef<HTMLSelectElement>
}

const Select: React.FunctionComponent<ISelect> = ({handleChange, defaultValue, options, sRef}) => {
    return(
        <select
            ref={sRef !== undefined ? sRef : undefined}
            onChange={handleChange !== undefined ? handleChange : undefined}
            defaultValue={defaultValue}>
            <option disabled value="-1">Selecciona una opción</option>
            {
                /* options.map((opt, index) => {
                     return ()
                 })*/
                options.map((opt, i) => <option key={`option-${i}`}>{opt}</option>)
            }
        </select>
    )
}

export default Select;
