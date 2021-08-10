import api from '../../services/api'

// const
const initialData = {
    result: {},
    items: [],
    categories: [],
    errorItems: '',
    itemSelected: {}
}

const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'
// const GET_ITEMS_ERROR = 'GET_ITEMS'
// const GET_ITEM_ID = 'GET_ITEM_ID'

// reducer
export default function itemsReducer(state = initialData, action) {
    switch (action.type) {
        case GET_ITEMS_SUCCESS:
            return { ...state, result: action.payload.data, items: action.payload.data.items, categories: action.payload.data.categories }
        // case GET_ITEMS_ERROR:
        //     return { ...state, errorItems: action.payload }
        default:
            return state
    }
}


// actions
export const searchWithText = (search) => async (dispatch) => {
    try {
        const response = await api.items().getItems(search)
        dispatch({
            type: GET_ITEMS_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        console.log(err)
        // dispatch({
        //     type: GET_ITEMS_ERROR,
        //     payload: err.response.data
        // })
    }
}