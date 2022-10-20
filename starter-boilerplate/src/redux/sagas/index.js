import {all} from 'redux-saga/effects';
import Auth from './Auth';
import UserList from './UserList'

export default function* rootSaga(getState) {
    yield all([
        Auth(),
        UserList()
    ]);
}
