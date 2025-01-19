function solution(s) {
    let arr = s.split('{');
    arr = arr.map((item) => item.split('}'))
    arr.splice(0, 2);
    arr = arr.map((item, i) => {
        if (i === arr.length - 1) return item.slice(0, item.length - 2);
        return item.slice(0, item.length - 1);
    });

    arr = arr.map((item) => item[0].split(','));
    arr.sort((a, b) => a.length - b.length);
    const num = {};
    const result = [];
    arr.forEach((ar) => {
        ar.forEach((n) => {
            if(!num[n]) {
                num[n] = true;
                result.push(+n);
            }
        });
    });

    return result;
}
// [ [ '2' ], [ '2', '1' ], [ '2', '1', '3' ], [ '2', '1', '3', '4' ] ]
// "{{2},{2,1},{2,1,3},{2,1,3,4}}"