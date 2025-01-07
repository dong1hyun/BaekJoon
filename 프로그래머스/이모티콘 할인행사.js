function solution(users, emoticons) {
    const percent = [10, 20, 30, 40];
    const selectedPercent = [];
    let result = [0, 0];
    const cal = () => {
        const discountedPrice = emoticons.map((v, i) => {
            p = selectedPercent[i];
            return v * (100 - p) / 100; 
        });

        let emoticonPlus = 0;
        let buy = 0;
        for(let i = 0; i < users.length; i++) {
            const limitPercent = users[i][0];
            const limitPrice = users[i][1];
            let sum = 0;
            for(let j = 0; j < emoticons.length; j++) {
                const p = selectedPercent[j];
                if(p >= limitPercent) {
                    sum += discountedPrice[j];
                }
            }
            if(sum >= limitPrice) emoticonPlus++;
            else buy += sum;
        }
        if(emoticonPlus > result[0]) {
            result = [emoticonPlus, buy];
        }
        else if(emoticonPlus === result[0]) {
            if(buy > result[1]) result = [emoticonPlus, buy];
        }
    }

    const createSalePercent = () => {
        if(selectedPercent.length === emoticons.length) {
            cal();
            return;
        }
        percent.forEach((p) => {
            selectedPercent.push(p);
            createSalePercent();
            selectedPercent.pop();
        })
    }

    createSalePercent();

    return result;
}