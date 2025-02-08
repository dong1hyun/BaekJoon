const separate = (name) => {
    let index;
    let index2;
    for (let i = 0; i < name.length; i++) {
        if (index === undefined && name[i] !== ' ' && !isNaN(+name[i])) {
            index = i;
        }
        if (index !== undefined && (name[i] === ' ' || isNaN(+name[i]))) {
            index2 = i;
            break;
        }
    }
    if (index2 === undefined) {
        index2 = name.length;
        if (index2 > index + 5) index2 = index + 5;
    }
    const header = name.substring(0, index).toUpperCase();
    const number = +name.substring(index, index2);
    const tail = name.substring(index2, name.length);
    return [header, number, tail];
}

function solution(files) {
    let order = {};
    for (let i = 0; i < files.length; i++) {
        order[files[i]] = i;
    }
    files.sort((a, b) => {
        const a2 = separate(a);
        const b2 = separate(b);
        if (a2[0] === b2[0]) {
            if (a2[1] === b2[1]) {
                return order[a] - order[b];
            }
            else {
                if (a2[1] > b2[1]) return 1;
                if (a2[1] < b2[1]) return -1;
            }
        }
        else {
            if (a2[0] > b2[0]) return 1;
            if (a2[0] < b2[0]) return -1;
        }
    });

    return files;
}

// ["img12.png","img10.png","img02.png","img1.png","IMG01.GIF","img2.JPG"]
// ["img1.png","IMG01.GIF","img02.png","img2.JPG","img10.png","img12.png"]


// A-10 Thunderbolt II
// A- 10 Thunderbolt II