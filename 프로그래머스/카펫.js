function solution(brown, yellow) {
    const x = (brown - 4 + Math.sqrt(Math.pow(4 - brown, 2) - 16 * yellow)) / 4;
    const y = yellow / x;

    return [x + 2, y + 2];
}