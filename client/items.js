// Tengo las funciones que desencadenarán una petición
import { getItems, getItemById } from '../services/items'

export default {
    async searchWithText(search) {
        const { data } = await getItems(search)
        return data
    },
    async getItemById(id) {
        const { data } = await getItemById(id)
        return data
    }
}