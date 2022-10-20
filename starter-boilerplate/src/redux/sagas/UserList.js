import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios'
import {getUsersSuccess} from "../actions";
import {GET_LIST} from "../constants/UserList";

export function* getList() {
    try {
        const list = yield call(() => axios({
            method: "GET",
            url: 'https://jsonplaceholder.typicode.com/users'
        }))
        yield put(getUsersSuccess(list.data))
    } catch (err) {
        console.log(err)
    }
}

function* watchGetListRequest() {
    yield takeEvery(GET_LIST, getList)
}

export default function* rootSage() {
    yield all([
        fork(
            watchGetListRequest
        )
    ])
}