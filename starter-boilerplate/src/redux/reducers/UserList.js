import {GET_LIST_SUCCESS} from "../constants/UserList";

const initialState = {
    users: null,
    loading: true
}

const userList = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        default:
            return state
    }
}

export default userList