function solution(s) {
    const str = s.split('');
    let init = true;
    const result = str.map((w) => {
        if(w === ' ') {
            init = true;
        }
        else if (w !== ' ') {
            if (init) {
                init = false;
                return w.toUpperCase();
            }
            else {
                return w.toLowerCase();
            }
        }
        return w;
    });

    return result.join('');
}