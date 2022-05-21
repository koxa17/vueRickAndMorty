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