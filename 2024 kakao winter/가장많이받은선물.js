function solution(friends, gifts) {
    var answer = 0;
    const limit = friends.length;
    const fArray = new Array(limit).fill(0);
    giftList = Array.from(Array(limit), () => new Array(limit).fill(0));
    gifts.forEach(p => {
        const [a, b] = p.split(' ');
        const a_index = friends.findIndex((name) => name === a);
        const b_index = friends.findIndex((name) => name === b);
        
        fArray[a_index]++;
        fArray[b_index]--;
        giftList[a_index][b_index]++;
    });
    const result = new Array(limit).fill(0);
    for(let i = 0; i < limit; i++) {
        for(let j = i + 1; j < limit; j++) {
            if(giftList[i][j] !== giftList[j][i]) {
                if(giftList[i][j] > giftList[j][i]) result[i]++;
                else result[j]++;
            } 
            else if(fArray[i] !== fArray[j]) {
                if(fArray[i] > fArray[j]) result[i]++;
                else result[j]++;
            }
        }
    }
    console.log(fArray);
    console.log(giftList)
    console.log(result)
    for(let i = 0; i < limit; i++) {
        answer = Math.max(answer, result[i]);
    }
    return answer;
}