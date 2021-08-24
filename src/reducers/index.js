import { combineReducers } from "redux";
import users from './userReducer'
import permissions from './permissionReducer'
import roles from './rolesReducer'
import userProfile  from './userProfile';
import clients from './clientReducer'
const rootReducer = combineReducers({
    users,
    permissions,
    roles,
    userProfile,
    clients
})

export default rootReducer