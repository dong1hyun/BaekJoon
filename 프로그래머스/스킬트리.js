function solution(skill, skill_trees) {
    const st = {};
    st[skill[0]] = [true, skill[1]];
    for (let i = 1; i < skill.length; i++) {
        st[skill[i]] = [false, skill[i + 1]];
    }
    let result = 0;
    skill_trees.forEach((skills) => {
        const copy = JSON.parse(JSON.stringify(st));
        let isSuccess = true;
        for (let i = 0; i < skills.length; i++) {
            const skill = skills[i];
            if (copy[skill]) {
                if (copy[skill][0]) {
                    const nextSkill = copy[skill][1];
                    if (copy[nextSkill]) copy[nextSkill][0] = true;
                }
                else {
                    isSuccess = false;
                    break;
                }
            }
        }
        if (isSuccess) result++;
    });

    return result;
}