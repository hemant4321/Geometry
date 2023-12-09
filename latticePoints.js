/*
Picks theorem: A = i + b/2 - 1
A = area of polygon
i = number of lattice points inside polygon
b = number of lattice points on boundary of polygon

*/

const gcd = (a, b) => {
  if (b === 0n) return a;
  return gcd(b, a % b);
};

const calcPointsOnBoundary = (x1, y1, x2, y2) => {
  const dx = BigInt(Math.abs(x1 - x2));
  const dy = BigInt(Math.abs(y1 - y2));
  return Number(gcd(dx, dy)) - 1; // -1 because vertices count is duplicated
};

const latticePoints = (points) => {
  let boundaryCounts = 0n;
  let area = 0n; // Use BigInt for area
  for (let i = 0; i < points.length; i++) {
    const j = (i + 1) % points.length;
    const [x1, y1] = points[i];
    const [x2, y2] = points[j];
    boundaryCounts += BigInt(calcPointsOnBoundary(x1, y1, x2, y2));
    area += BigInt(x1) * BigInt(y2) - BigInt(x2) * BigInt(y1);
  }
  boundaryCounts += BigInt(points.length);
  return {
    b: BigInt(boundaryCounts), // Use BigInt for boundaryCounts
    i: ((area < 0 ? area*-1n : area) / 2n) - BigInt(boundaryCounts / 2n) + 1n,
  };
};

const mainLP = (input) => {
  input = input.split("\n");
  let i = 0;
  let q = BigInt(input[i++]); // Use BigInt for q
  let points = [];
  while (q--) {
    const p = input[i++].split(" ").map(Number);
    points.push(p);
  }
  const res = latticePoints(points);
  console.log(res.i.toString(), res.b.toString());
};

// const _input = `4
// -1000000000 -1000000000
// -1000000000 1000000000
// 1000000000 1000000000
// 1000000000 -1000000000
// `;
// mainLP(_input);

let _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", (data) => (_input += data));
process.stdin.on("end", () => mainLP(_input));
