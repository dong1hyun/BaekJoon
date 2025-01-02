function solution(dice) {
    const n = dice.length / 2;

    function selectDice() {
        const selectedDice = [];
        const unSelectedDice = [];
        const selectedNum = [];

        let dice_count = 0;
        let dice_arr = [];
        const select = (start, c) => { // 주사위 선택
            if(c === n) {
                for(let i = 0; i < n * 2; i++) {
                    if(selectedDice[i] !== i) unSelectedDice.push(i);
                }
                dice_arr.push([...selectedDice]);
                selectNum(0);
                return;
            }
            for(let i = start; i < n * 2; i++) {
                selectedDice.push(i);
                select(i + 1, c + 1);
                selectedDice.pop();
            }
        }

        let sum = 0;
        let sum2 = 0;
        const A_List = [];
        const B_List = [];
        function selectNum(c) { // 주사위 숫자 선택
            for (let i = 0; i < 6; i++) {
                if (c === n) {
                    for(let i = 0; i < n; i++) {
                        const dice_index = selectedDice[i];
                        const num_index = selectedNum[i];
                        const v = dice[dice_index][num_index];
                        sum += v;

                        const dice_index2 = unSelectedDice[i];
                        const num_index2 = selectedNum[i];
                        const v2 = dice[dice_index2][num_index2];
                        sum2 += v2;
                    }

                    A_List.push(sum);
                    B_List.push(sum2);
                    sum = 0;
                    sum2 = 0;
                    return;
                }
                selectedNum.push(i);
                select(c + 1);
                selectedNum.pop();
            }
        }
    }
}