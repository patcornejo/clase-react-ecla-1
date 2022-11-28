import React, {CSSProperties} from 'react';
import {IHistory} from "../../../../../server/interfaces/IHistory";

interface IClassResultProps {
    history: IHistory[]
}

export default class ClassResult extends React.Component<IClassResultProps> {
    protected css: CSSProperties = {color: 'black'};

    constructor(props) {
        super(props);
    }

    metodo() {
        console.log("Metodo");
    }

    render () {
        return (
            <>
                <ul style={this.css}>
                    {
                        this.props.history.map((h, i) => <li key={`history-${i}`}>{h.output} - {h.operation}</li>)
                    }
                </ul>
            </>
        )
    }
}
