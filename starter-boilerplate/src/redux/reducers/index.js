import {combineReducers} from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import userList from './UserList'

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    user: userList
});

export default reducers;