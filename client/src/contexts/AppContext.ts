import React from "react";

interface IAppContext {
    options: string[],
    setOptions: (value: string[]) => void,
    defaultValue: string,
    setDefaultValue: (value: string) => void
}

const context = React.createContext<IAppContext>({
    options: [],
    setOptions: (value: string[]) => undefined,
    defaultValue: 'Full String',
    setDefaultValue: (value: string) => undefined
});

export default context
