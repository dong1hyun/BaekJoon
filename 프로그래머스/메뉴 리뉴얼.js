function solution(orders, course) {
    orders = orders.map((menu) => menu.split('').sort().join(''));
    const menuCount = {};
    const candidate = {};
    const maxCount = {};
    for (let i = 0; i < course.length; i++) {
        maxCount[course[i]] = 0;
    }
    const counter = (n, start, menu, selectedMenu) => {
        if (selectedMenu.length === n) {
            const result = selectedMenu.join('');
            if (candidate[result]) {
                candidate[result]++;
                maxCount[n] = Math.max(maxCount[n], candidate[result]);
            }
            else {
                if (menuCount[result]) {
                    candidate[result] = 2;
                    maxCount[n] = Math.max(maxCount[n], candidate[result]);
                }
                else {
                    menuCount[result] = 1;
                }
            }

            return;
        }
        for (let i = start; i < menu.length; i++) {
            selectedMenu.push(menu[i]);
            counter(n, i + 1, menu, selectedMenu);
            selectedMenu.pop();
        }
    }

    for(let i = 0; i < orders.length; i++) {
        for(let j = 0; j < course.length; j++) {
            counter(course[j], 0, orders[i], []);
        }
    }
    Object.keys(candidate).forEach((menu) => {
        if(candidate[menu] < maxCount[menu.length]) {
            delete candidate[menu];
        }
    });
    
    return Object.keys(candidate).sort();
}


["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]
[2, 3, 4]
["AC", "ACDE", "BCFG", "CDE"]