import {GET_LIST, GET_LIST_SUCCESS} from "../constants/UserList";


export const getUsersRequest = () => ({
    type: GET_LIST
});

export const getUsersSuccess = (users) => {
    return {
        type: GET_LIST_SUCCESS,
        payload: users
    }
}