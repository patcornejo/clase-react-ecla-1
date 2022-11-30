import {createContext} from "react";

interface IAppContext {
    defaultValue: string,
    setDefaultValue: (value: string) => void,
    options: string[] | undefined,
    setOptions: (value: string[] | undefined) => void
}

const context = createContext<IAppContext>({
    options: undefined,
    setOptions: (value: string[] | undefined) => undefined,
    defaultValue: '-1',
    setDefaultValue: () => undefined
})

context.displayName = 'AppContext'
export default context
