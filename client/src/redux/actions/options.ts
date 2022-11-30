
/*export enum Actions {
    GET_OPTIONS
}*/

export const Actions = {
    GET_OPTIONS: 'GET_OPTIONS'
}

export const getOptions = () => {
    return async dispatch => {
        const response = await fetch('/api/configuration');
        const data = await response.json();
        dispatch({type: Actions.GET_OPTIONS, payload: data})
    }
}
