import createBoard from "../util/minesweeper";
import { Cell } from "./Cell";

export default function Board({ size, mines }) {
  const [board, setBoard] = useState(createBoard(size, mines));

  const handleClick = (index) => {
    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[index].visible = true;
      return newBoard;
    });
  };

  return (
    <div className="board">
      {board.map((cell, index) => (
        <Cell cell={cell} key={index} onClick={handleClick} />
      ))}
    </div>
  );
}
