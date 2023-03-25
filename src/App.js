import React, { useState } from "react";
import "./App.css";
import Square from "./components/Sqaure";
import Footer from "./components/Footer";

const App = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setTurn] = useState(true);

  const SetBoard = (index) => {
    if(state[index]!==null) return;
    const copyArray = [...state];
    copyArray[index] = isXTurn ? "X" : "O";
    setState(copyArray);
    setTurn(!isXTurn);
  };

  const DecideWinner = () => {
    const _winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let winner of _winner) {
      const [a, b, c] = winner;

      if (state[a]!=null && state[a]==state[b] && state[b]==state[c]) {
        return state[a];
      }
    }
    return false;
  };

  let flag = DecideWinner();

  const refresh = () => {
    const array = Array(9).fill(null);
    setState(array);
    setTurn(true);
    flag=false;
  };

  return (
    <>
      <nav className="main-head">
        <p>X O</p>
        <p>{isXTurn ? "X" : "O"} TURN</p>
        <span
          onClick={() => {
            refresh();
          }}
        >
          <i className="fa-solid fa-rotate fa-beat" title="refresh game"></i>
        </span>
      </nav>
      {flag ? (
        <div className="root_"><h2 className="won-head">Player {flag} have won</h2></div>
      ) : (
        <div className="root_">
          <h1 className="tic-heading">Tic Tac Toe</h1>
          <div className="_root">
            <div className="board">
              <Square
                value={state[0]}
                onClick={() => {
                  SetBoard(0);
                }}
              />
              <Square
                value={state[1]}
                onClick={() => {
                  SetBoard(1);
                }}
              />
              <Square
                value={state[2]}
                onClick={() => {
                  SetBoard(2);
                }}
              />
            </div>
            <div className="board">
              <Square
                value={state[3]}
                onClick={() => {
                  SetBoard(3);
                }}
              />
              <Square
                value={state[4]}
                onClick={() => {
                  SetBoard(4);
                }}
              />
              <Square
                value={state[5]}
                onClick={() => {
                  SetBoard(5);
                }}
              />
            </div>
            <div className="board">
              <Square
                value={state[6]}
                onClick={() => {
                  SetBoard(6);
                }}
              />
              <Square
                value={state[7]}
                onClick={() => {
                  SetBoard(7);
                }}
              />
              <Square
                value={state[8]}
                onClick={() => {
                  SetBoard(8);
                }}
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default App;
