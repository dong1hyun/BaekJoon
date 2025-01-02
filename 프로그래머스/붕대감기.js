function solution(bandage, health, attacks) {
    const endTime = attacks[attacks.length - 1][0];
    let maxHP = health;
    const [activateTime, heal, bonusHeal] = bandage;
    let attackIndex = 0;
    let c = 0;
    for (let i = 0; i <= endTime; i++) {
        if (i === attacks[attackIndex][0]) {
            health -= attacks[attackIndex][1];
            attackIndex++;
            c = 0;
            if (health <= 0) {
                return -1;
            }
        }
        else {
            health += heal;
            c++;
            if (c === activateTime) {
                health += bonusHeal;
                c = 0;
            }
            health = health >= maxHP ? maxHP : health;
        }

        console.log(health);
    }

    return health;
}