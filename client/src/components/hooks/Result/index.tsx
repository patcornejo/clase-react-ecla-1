import React from 'react';
import {IHistory} from "../../../../../server/interfaces/IHistory";

interface IResultProps {
    history: IHistory[],
    color: "red" | "black"
}

const Result: React.FunctionComponent<IResultProps> = ({history, color}) => {
  return (
      <ul className={`mycolor ${color}`}>
          {
              history.map((h, i) => <li key={`history-${i}`}>{h.output} - {h.operation}</li>)
          }
      </ul>
  )
}

export default Result
