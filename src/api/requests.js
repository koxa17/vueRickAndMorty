import {request, get, responseExample} from '@/api/api.js';
import {EpisodePage, CHARACTER, EPISODE, LOCATION} from "@/api/routing";

export async function getEpisodes(id) {
    const response = await request(get, EPISODE(id))
    responseExample.data = response.data
    responseExample.status = response.status
    return response.data
}

export async function getAllEpisodes() {
    const response = await request(get, EpisodePage())
    responseExample.data = response.data
    responseExample.status = response.status
    return response.data
}

export async function getCharacters(id) {
    const response = await request(get, CHARACTER(id))
    responseExample.data = response.data
    responseExample.status = response.status
    return response.data
}

export async function getLocations(id) {
    const response = await request(get, LOCATION(id))
    responseExample.data = response.data
    responseExample.status = response.status
    return response.data
}