function solution(video_len, pos, op_start, op_end, commands) {
    let [a, b] = video_len.split(':').map(Number);
    video_len = a * 60 + b;
    [a, b] = pos.split(':').map(Number);
    pos = a * 60 + b;
    [a, b] = op_start.split(':').map(Number);
    op_start = a * 60 + b;
    [a, b] = op_end.split(':').map(Number);
    op_end = a * 60 + b;

    let t = pos;
    for(let i = 0; i < commands.length; i++) {
        console.log(t);
        const command = commands[i];
        if(t >= op_start && t <= op_end) {
            t = op_end;
        }
        if(command === 'next') {
            if(t + 10 >= video_len) t = video_len;
            else t += 10;
        }
        if(command === 'prev') {
            if(t - 10 <= 0) t = 0;
            else t -= 10;
        }
        if(t >= op_start && t <= op_end) {
            t = op_end;
        }
    }

    let minutes = Math.floor(t / 60);
    let second = t % 60;

    if(minutes < 10) minutes = '0' + minutes;
    if(second < 10) second = '0' + second;
    var answer = minutes + ':' + second;
    return answer;
}