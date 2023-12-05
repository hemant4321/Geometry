/**
Partially accepting
**/

const orientationn = (x1, y1, x2, y2, x3, y3) => {
    const val = (y2 - y1) * (x3 - x2) - (y3 - y2) * (x2 - x1);
    if (val === 0) return 0;
    return val < 0 ? -1 : 1;
};

const onSegment = (x1, y1, x2, y2, x3, y3) => {
    return (
        x3 <= Math.max(x1, x2) &&
        x3 >= Math.min(x1, x2) &&
        y3 <= Math.max(y1, y2) &&
        y3 >= Math.min(y1, y2)
    );
};

const linesIntersect = (x1, y1, x2, y2, x3, y3, x4, y4) => {
    const o1 = orientationn(x1, y1, x2, y2, x3, y3);
    const o2 = orientationn(x1, y1, x2, y2, x4, y4);
    const o3 = orientationn(x3, y3, x4, y4, x1, y1);
    const o4 = orientationn(x3, y3, x4, y4, x2, y2);

    if (o1 !== o2 && o3 !== o4) return 'YES';

    if (o1 === 0 && onSegment(x1, y1, x2, y2, x3, y3)) return 'YES';
    if (o2 === 0 && onSegment(x1, y1, x2, y2, x4, y4)) return 'YES';
    if (o3 === 0 && onSegment(x3, y3, x4, y4, x1, y1)) return 'YES';
    if (o4 === 0 && onSegment(x3, y3, x4, y4, x2, y2)) return 'YES';

    return 'NO';
};

const main = (input) => {
    input = input.split('\n');
    let i = 1;
    let q = parseInt(input[0]);

    while (q--) {
        const [x1, y1, x2, y2, x3, y3, x4, y4] = input[i++].trim().split(' ').map(Number);
        const res = linesIntersect(x1, y1, x2, y2, x3, y3, x4, y4);
        console.log(res);
    }
}

let _input = '';
process.stdin.resume();
process.stdin.setEncoding('ascii');
if (!_input) {
    process.stdin.on('data', (data) => (_input += data));
    process.stdin.on('end', () => main(_input));
}
