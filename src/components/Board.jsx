import { Component } from "react";
import createBoard from "../util/minesweeper";
import { Cell } from "./Cell";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: createBoard(props.size, props.mines),
      gameover: false,
      won: false,
    };
    this.handleClick = (index) => {
      //if game is over, dont do rest of the function
      if (this.state.gameover) return;

      //if the cell has a mine, set game to game over
      const hasMine = this.state.board[index].hasMine;

    
      let wonGame = false;

      let newBoard = [...this.state.board];
      newBoard[index].visible = true;

      if (
        !hasMine &&
        newBoard.filter((cell) => !cell.hasMine).every((cell) => cell.visible)
      ) {
        wonGame = true;
      }

      if (hasMine || wonGame) {
        newBoard = newBoard.map((cell) => ({ ...cell, visible: true }));
      }



      this.setState({ board: newBoard, gameover: hasMine, won: wonGame });
    };
  }

  render() {
    return (
      <div className="board">
        {this.state.board.map((cell, index) => (
          <Cell cell={cell} key={index} onClick={this.handleClick} />
        ))}
        {this.state.gameover && "Game Over"}
        {this.state.won && "You Won!"}
      </div>
    );
  }
}
