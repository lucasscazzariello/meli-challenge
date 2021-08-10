// Tengo las funciones que desencadenarán una petición
import api from '../services/api'

export default {
    async searchWithText(search) {
        const response = await api.items().getItems(search)
        return response.data
    },
    async getItemById(id) {
        const response = await api.items().getItemById(id)
        return response.data
    }
}

