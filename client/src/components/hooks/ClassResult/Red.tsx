import ClassResult from "./index";

export default class ClassResultRed extends ClassResult {
    constructor(props) {
        super(props);
        this.css = {color: 'red'}
    }

    render(): JSX.Element {
        this.metodo()
        return super.render();
    }

}
