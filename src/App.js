import React, { useState } from "react";
import "./App.css";

import produce from "immer";

const numRows = 50;
const numCols = 50;

const App = () => {
  const [grid, setGrid] = useState(() => {
    const rows = [];

    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }

    return rows;
  });

  const [isRunning, setIsRunning] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsRunning(!isRunning);
        }}
      >
        {isRunning ? "stop" : "start"}
      </button>
      <div className="App">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numCols}, 20px)`,
          }}
        >
          {grid.map((row, i) =>
            row.map((col, j) => (
              <div
                key={`${i}-${j}`}
                onClick={() => {
                  setGrid(
                    produce(grid, (draftGrid) => {
                      draftGrid[i][j] = grid[i][j] ? 0 : 1;
                    })
                  );
                }}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: grid[i][j] ? "black" : undefined,
                  border: "solid 1px black",
                }}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default App;
