const polygonArea = (points) => {
    let ans = BigInt(0);
    for (let i = 0; i < points.length; i++) {
        const j = BigInt((i + 1) % points.length);
        const xi = BigInt(points[i][0]);
        const yi = BigInt(points[i][1]);
        const xj = BigInt(points[j][0]);
        const yj = BigInt(points[j][1]);

        ans += xi * yj - xj * yi;
    }
    return BigInt.asIntN(64, ans < 0 ? -ans : ans);
}

const main = (input) => {
    input = input.split("\n");
    let i = 0;
    let q = BigInt(input[i++]);
    let points = [];
    while (q--) {
        const p = input[i++].split(" ").map(BigInt);
        points.push(p);
    }
    const res = polygonArea(points);
    console.log(res.toString());
}

let _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", (data) => (_input += data));
process.stdin.on("end", () => main(_input));
