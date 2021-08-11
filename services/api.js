// Llamá a la petición que indicamos
import axios from 'axios';

const serverUrl = process.env.APP_SERVER || 'http://localhost:8080';

const api = {
    items() {
        return {
            getItems: (text) => axios.get(`${serverUrl}/api/items?search=${text}`),
            getItemById: (id) => axios.get(`${serverUrl}/api/items/${id}`)

        }
    }
}

export default api;