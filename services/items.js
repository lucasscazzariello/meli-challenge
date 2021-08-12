// Llamá a la petición que indicamos
import axios from 'axios';

const serverUrl = process.env.APP_SERVER || 'http://localhost:8080';

const getItems = (text) => axios.get(`${serverUrl}/api/items?search=${text}`)
const getItemById = (id) => axios.get(`${serverUrl}/api/items/${id}`)

module.exports = {
    getItems,
    getItemById
}