type Dfs = (grid: number[][], y: number, x: number) => number[][];

const getRandomNumber = () => Math.round(Math.random());

export const makeGrid = (size: number): number[][] =>
  [...new Array(size)].map(() =>
    [...new Array(size)].map(() => getRandomNumber())
  );

const withinGrid = (h: number, w: number, x: number, y: number) =>
  0 <= x && x < w && 0 <= y && y < h;

export const dfs: Dfs = (grid, y, x) => {
  grid[y][x] = 0;
  const newGrid = [...grid];

  for (let [dx, dy] of [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]) {
    const nextX = x + dx;
    const nextY = y + dy;

    if (
      withinGrid(grid.length, grid[0].length, nextX, nextY) &&
      grid[nextY][nextX] === 1
    ) {
      dfs(grid, nextY, nextX);
    }
  }

  return newGrid;
};