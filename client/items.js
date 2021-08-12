// Tengo las funciones que desencadenarán una petición
import { getItems, getItemById } from '../services/items'

export async function searchWithText(search) {
    const { data } = await getItems(search)
    return data
}

export async function getItemDetail(id) {
    const { data } = await getItemById(id)
    return data
}