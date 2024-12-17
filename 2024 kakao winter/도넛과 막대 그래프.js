function solution(h1, m1, s1, h2, m2, s2) {
    var answer = 0;
    // 1
    // 60
    // 3600
    // 초침 1초에 6도
    // 분침 1초에 1/10도
    // 시침 1초에 1/600도
    
    hh = h2 - h1;
    mm = m2 - m1;
    ss = s2 - s1;
    
    hl = hh * 3600;
    ml = mm * 60;
    sl = ss;
    
    hms = hh * 3600 + mm * 60 + ss;
    
    
    return answer;
}