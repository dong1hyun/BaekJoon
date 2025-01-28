function solution(citations) {
    citations.sort((a, b) => b - a);
    let h_index = 0;
    for (let i = 0; i < citations.length; i++) {
        const n = citations[i];
        const index = i + 1;
        if(n >= index && citations.length - index <= index) {
            h_index = index;
        }
    }

    return h_index;
}