import { Dispatch, SetStateAction } from "react";

type CellParams = {
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    id: number;
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    cell: string;
    winningMessage: string;
}

const Cell = ({go , setGo , id , cells , setCells , cell , winningMessage } : CellParams) => {

  const handleClick = () => {
    if(winningMessage) {
        return;
    }


    const taken = !!cells[id]
    console.log(taken);
   if(!taken) {


    if(go === "X") {
      handleCellChange("X")
      setGo("circle")
    } else if (go === "circle") {
        handleCellChange("circle")
        setGo("X")
    }

  }

}

  const handleCellChange = (cellToChange : string) => {
    let copyCells = [...cells]
    copyCells[id] = cellToChange;
    setCells(copyCells)
  }

 
  return <div className="square" onClick={handleClick}>
    <div className={cell}>{cell ? ( cell === "X" ? "X" : "O" ) : ""}</div>
  </div>;
}

export default Cell;