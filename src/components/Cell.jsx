export const Cell = ({ cell, onClick }) => {
  return (
    <div className="cell" onClick={() => onClick(cell.index)}>
      {cell.visible ? (cell.hasMine ? "m" : cell.numberOfNeighbouringMines) : ""}
    </div>
  );
};
