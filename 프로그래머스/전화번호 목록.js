function solution(phone_book) {
    const obj = {};
    phone_book.forEach((number) => {
        obj[number] = true;
    });
    for(const number of phone_book) {
        for(let i = 0; i < number.length; i++) {
            const prefix = number.substring(0, i);
            if(obj[prefix]) return false;
        }
    }
    return true;
}