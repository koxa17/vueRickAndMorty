export function CHARACTER(id) {
    return `/character/${id}`
}

export function LOCATION(id) {
    return `/location/${id}`
}

export function EPISODE(id) {
    return `/episode/${id}`
}

export function EpisodePage(page) {
    if(page) return `/episode?page=${page}`
    return `/episode`
}

export function CharacterPage(page) {
    if(page) return `/character?page=${page}`
    return `/character`
}

export function LocationPage(page) {
    if(page) return `/location?page=${page}`
    return `/location`
}