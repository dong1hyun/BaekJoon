function solution(bridge_length, weight, truck_weights) {
    let index = 0;
    let index2 = 0;
    let on_weight = 0;
    let heap = [];
    let t = 0;
    while (index2 < truck_weights.length) {
        t++;
        w = truck_weights[index];
        if (heap[index2] && heap[index2]['time'] === t) {
            on_weight -= heap[index2]['weight'];
            index2++;
        }
        if (on_weight + w <= weight) {
            on_weight += w;
            heap.push({
                time: t + bridge_length,
                weight: w
            });
            index++;
        }
    }
    return t;
}