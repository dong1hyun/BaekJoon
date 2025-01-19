function solution(expression) {
    let op1, op2, op3
    let c = 0;
    for (let i = 0; i < expression.length; i++) {
        const v = expression[i];
        if (!Number(v) && v !== '0') {
            if (!op1) {
                op1 = v;
                c = 1;
            }
            else if (!op2) {
                if (op1 !== v) {
                    op2 = v;
                    c = 2;
                }
            }
            else {
                if (op1 !== v && op2 !== v) {
                    op3 = v;
                    c = 3;
                    break;
                }
            }
        }
    }

    const calculator = (n1, n2, op) => {
        if (op === '*') return n1 * n2;
        if (op === '+') return n1 + n2;
        if (op === '-') return n1 - n2;
    }

    let num = expression.split('*').flatMap((ex) => ex.split('+')).flatMap((ex) => ex.split('-'));
    let operator = [];
    for (let i = 0; i < expression.length; i++) {
        const v = expression[i];
        if (v !== '0' && !Number(v)) {
            operator.push(v);
        }
    }
    let max = 0;
    const checked = new Array(3).fill(false);
    const priority = [op1, op2, op3];
    const solve = (selectedOp) => {
        // [100, 200, 300, 500, 20]
        // ['-', '*', '-', '+']
        if (selectedOp.length === c) {
            console.log(selectedOp)
            let cal = [];
            let i = 0;
            let index = 0;
            while (i < num.length) {
                if (selectedOp[index] === operator[i]) {
                    let v = calculator(num[i], num[i + 1], operator[index]);
                    i++;
                    while (selectedOp[index] !== operator[i] && i < num.length) {
                        v = calculator(v, num[i + 1], operator[index]);
                        i++;
                    }
                    cal.push(v);
                }
                else {
                    cal.push(num[i++]);
                }
            }
            console.log(cal);
            return;
        }
        for (let i = 0; i < c; i++) {
            if (!checked[i]) {
                checked[i] = true;
                solve([...selectedOp, priority[i]]);
                checked[i] = false;
            }
        }
    }

    solve([]);
}