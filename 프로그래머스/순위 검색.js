const findIndex = (arr, v) => {
    front = 0;
    rear = arr.length - 1;
    let mid 
    while(front <= rear) {
        mid = Math.floor((front + rear) / 2);
        if(arr[mid] === v) {
            rear = mid - 1;
        }
        else if(arr[mid] > v) rear = mid - 1;
        else front = mid + 1;
    }

    return mid;
}

function solution(info, query) {
    info.sort((a, b) => {
        return a.split(' ')[4] - b.split(' ')[4];
    });

    const infoMap = new Map();
    info.forEach((item) => {
        const arr = item.split(' ');
        const key = arr[0] + arr[1] + arr[2] + arr[3];
        if (infoMap.has(key)) infoMap.get(key).push(+arr[4]);
        else infoMap.set(key, [+arr[4]]);
    });
    const language = ["cpp", "java", "python"];
    const type = ["backend", "frontend"];
    const career = ["junior", "senior"];
    const food = ["pizza", "chicken"];
    
    let combination = [];
    const createCom = (includeLanguage, n, arr) => {
        if(arr.length === n) {
            combination.push([...arr]);
            return;
        }
        if(includeLanguage && arr.length === 0) {
            for(let i = 0; i < 3; i++) {
                arr.push(i);
                createCom(includeLanguage, n, arr);
                arr.pop();
            }
        } 
        else {
            for(let i = 0; i < 2; i++) {
                arr.push(i);
                createCom(includeLanguage, n, arr);
                arr.pop();
            }
        }
    }

    const result = [];
    query.forEach((item) => {
        combination = [];
        const newItem = item.split(' and ').flatMap((item) => item.split(' '));
        const score = newItem[4];
        newItem.splice(4, 1);
        let includeLanguage = false;
        let c = 0;
        newItem.forEach((item, i) => {
            if(i === 0 && item === "-") includeLanguage = true;
            if(item === "-") c++;
        });
        if (c > 0) {
            console.log("----------")
            createCom(includeLanguage, c, []);
            let sum = 0;
            combination.forEach((com) => {
                let index = 0;
                let str = "";
                newItem.forEach((item, i) => {
                    if(item === "-") {
                        if(i === 0) str += language[com[index++]];
                        else if(i === 1) str += type[com[index++]];
                        else if(i === 2) str += career[com[index++]];
                        else str += food[com[index++]];
                    }
                    else {
                        str += item;
                    }
                });
                
                if(infoMap.has(str)) {  
                    const num = infoMap.get(str);
                    console.log(str, num, score, findIndex(num, score))
                    if(num[num.length - 1] < score) {}
                    else sum += (num.length - findIndex(num, score));
                }
            });

            result.push(sum);
        }
        else {
            const str = newItem.join('');
            if(infoMap.has(str)) {
                const arr = infoMap.get(str);
                if(arr[arr.length - 1] < score) result.push(0);
                else result.push(arr.length - findIndex(arr, score));
            }
        }
    });

    return result;
}
// ['-', 'backend', '-', 'pizza', '100']

// info
"java backend junior pizza 150"
"python frontend senior chicken 210"
"python frontend senior chicken 150"
"cpp backend senior pizza 260"
"java backend junior chicken 80"
"python backend senior chicken 50"

// query
"java and backend and junior and pizza 100"
"python and frontend and senior and chicken 200"
"cpp and - and senior and pizza 250"
"- and backend and senior and - 150"
"- and - and - and chicken 100"
"- and - and - and - 150"

// cpp, java, python
// backend와 frontend
//  junior와 senior
// chicken과 pizza
[1, 1, 1, 1, 2, 4]