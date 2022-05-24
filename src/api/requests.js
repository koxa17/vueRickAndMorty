import {request, get, responseExample} from '@/api/api.js';
import {CHARACTER, EPISODE, LOCATION, CharacterPage, LocationPage, EpisodePage,} from "@/api/routing";

export async function getEpisodes(id) {
    const response = await request(get, EPISODE(id))
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

export async function getAllEpisodes(number) {
    const response = await request(get, EpisodePage(number))
    responseExample.data = response.data
    responseExample.status = response.status
    return response.data
}

export async function getAllCharacters(number) {
    const response = await request(get, CharacterPage(number))
    responseExample.data = response.data
    responseExample.status = response.status
    return response.data
}

export async function getAllLocations(number) {
    const response = await request(get, LocationPage(number))
    responseExample.data = response.data
    responseExample.status = response.status
    return response.data
}