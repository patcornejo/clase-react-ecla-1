export const getOptions = async () => {
    const opts = localStorage.getItem('options');
    if (opts !== null)
        return JSON.parse(opts)

    const response = await fetch('/api/configuration');
    const data = await response.json();
    localStorage.setItem('options', JSON.stringify(data))
    return data
}
