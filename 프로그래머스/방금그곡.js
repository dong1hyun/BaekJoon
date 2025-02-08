const changeMelody = (melody) => {
    let newMelody = melody.replaceAll('C#', 'c');
    newMelody = newMelody.replaceAll('D#', 'd');
    newMelody = newMelody.replaceAll('F#', 'f');
    newMelody = newMelody.replaceAll('G#', 'g');
    newMelody = newMelody.replaceAll('B#', 'b');
    newMelody = newMelody.replaceAll('A#', 'a');
    return newMelody
}
function solution(m, musicinfos) {
    result = {
        name: "",
        index: musicinfos.length,
        time: 0
    }
    m = changeMelody(m);
    musicinfos.forEach((playInfo, i) => {
        const [start, end, name, melody] = playInfo.split(',');
        const newMelody = changeMelody(melody);

        const startTime = start.split(':').map(Number);
        const endTime = end.split(':').map(Number);
        const playTime = endTime[0] * 60 + endTime[1] - (startTime[0] * 60 + startTime[1]);
        let r = Math.ceil(playTime / newMelody.length);
        let playedMelody = "";
        while (r--) playedMelody += newMelody;
        playedMelody = playedMelody.substring(0, playTime);
        if (playedMelody.includes(m)) {
            if (playTime > result['time']) {
                result['name'] = name;
                result['index'] = i;
                result['time'] = playTime;
            }
        }
    });
    if (!result['name']) return "(None)";
    return result['name'];
}