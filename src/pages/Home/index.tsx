import React, { FC, useState } from 'react';
import { v4 as uuid } from 'uuid';

// utils
import { makeGrid, dfs } from './utils/graph';

const Home: FC = () => {
  const [grid, setGrid] = useState(makeGrid(10));

  return (
    <>
      <div>Click on RED squares</div>
      {grid.map((row, i) => (
        <div key={uuid()}>
          {row.map((value, j) => (
            <div
              key={uuid()}
              style={{
                display: 'inline-block',
                width: '25px',
                height: '25px',
                margin: '5px',
                border: '1px solid lightgray',
                background: value ? 'red' : 'green',
              }}
              onClick={() => {
                if (value === 1) {
                  setGrid(dfs(grid, i, j));
                }
              }}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Home;
