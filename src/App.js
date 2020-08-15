import React, { useState, useRef, useCallback } from "react";
import "./App.css";

import produce from "immer";

const numRows = 50;
const numCols = 50;

const operations = [
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [1, 0],
  [-1, 0],
  [-1, -1],
  [-1, 1],
];

const App = () => {
  const [grid, setGrid] = useState(() => {
    const rows = [];

    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }

    return rows;
  });

  const [isRunning, setIsRunning] = useState(false);

  const runningRef = useRef(isRunning);
  runningRef.current = isRunning;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((g) => {
      return produce(g, (draftGrid) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;

            operations.forEach(([x, y]) => {
              let newI = i + x;
              let newJ = j + y;

              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += g[newI][newJ];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              draftGrid[i][j] = 0;
            } else if (!g[i][j] && neighbors === 3) {
              draftGrid[i][j] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 1000);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setIsRunning(!isRunning);
          if (!isRunning) {
            runningRef.current = true;
            runSimulation();
          }
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
