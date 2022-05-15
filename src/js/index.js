export function randomIdEpisode() {
    let rand = 1 + Math.random() * (51 + 1 - 1);
    return Math.floor(rand);
}

export function randomIdLocation() {
    let rand = 1 + Math.random() * (126 + 1 - 1);
    return Math.floor(rand);
}

export function randomIdCharacter() {
    let rand = 1 + Math.random() * (826 + 1 - 1);
    return Math.floor(rand);
}