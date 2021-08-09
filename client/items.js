import api from '../services/api'

export default {
    async searchWithText(search) {
        const response = await api.items().getItems(search)
        console.log(response)
        return response
    },
}

