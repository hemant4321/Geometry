
const pointLocation = (x1, y1, x2, y2, x3, y3) => {
    const slopeDiff = ((y2 - y1)/(x3-x2)) - ((y3 - y2)/(x2-x1));
    if(slopeDiff > 0) return "LEFT";
    else if(slopeDiff < 0) return "RIGHT";
    else return "TOUCH";
}

const main = (input) => {
    input = input.split("\n");
    let i=0;
    let q = parseInt(input[i++]);
    while(q--) {
        const [x1, y1, x2, y2, x3, y3] = input[i++].split(" ").map(Number);
        const res = pointLocation(x1, y1, x2, y2, x3, y3);
        console.log(res);
    }
}

let _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", (data) => (_input += data));
process.stdin.on("end", () => main(_input));

/*

3
1 1 5 3 2 3
1 1 5 3 4 1
1 1 5 3 3 2

*/
