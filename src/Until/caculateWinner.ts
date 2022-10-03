export const calculateWinner = (
  squares: (string | null)[],
  size: number,
  rule: number
) => {
  const winningLines = [Array(rule).fill("X"), Array(rule).fill("O")];
  for (let i = 0; i < squares.length; i++) {
    if (squares[i]) {
      const lines = getLines(i, size, rule);
      for (let j = 0; j < lines.length; j++) {
        let line = lines[j];
        let lineValues: (string | null)[] = [];
        for (let k = 0; k < line.length; k++) {
          lineValues.push(squares[line[k]]);
        }
        if (winningLines.find((l) => arrayCompare(l, lineValues))) {
          return [squares[i], line];
        }
      }
    }
  }
  if (!squares.includes(null)) {
    return ["Draw", []];
  }
  return [null, null];
};

const getLines = (pos: number, size: number, rule: number) => {
  const lines = [
    getHorizontalLine(pos, size, rule),
    getVerticalLine(pos, size, rule),
    getDiagonalLine(pos, size, rule),
    getReverseDiagonalLine(pos, size, rule),
  ];
  return lines.filter((l) => l.length === rule);
};

const getHorizontalLine = (pos: number, size: number, rule: number) => {
  let line = [];
  for (let i = 0; i < rule; i++) {
    if ((pos % size) + i < size) {
      line.push(pos + i);
    }
  }
  return line;
};

const getVerticalLine = (pos: number, size: number, rule: number) => {
  let line = [];
  for (let i = 0; i < rule; i++) {
    if (Math.floor((pos + i * size) / size) < size) {
      line.push(pos + i * size);
    }
  }
  return line;
};

const getDiagonalLine = (pos: number, size: number, rule: number) => {
  let line = [];
  for (let i = 0; i < rule; i++) {
    if ((pos % size) + i < size && Math.floor((pos + i * size) / size) < size) {
      line.push(pos + i * size + i);
    }
  }
  return line;
};

const getReverseDiagonalLine = (pos: number, size: number, rule: number) => {
  let line = [];
  for (let i = 0; i < rule; i++) {
    if ((pos % size) - i > 0 && Math.floor((pos + i * size) / size) < size) {
      line.push(pos + i * size - i);
    }
  }
  return line;
};

const arrayCompare = (arr1: (string | null)[], arr2: (string | null)[]) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
};
