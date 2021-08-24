import { combineReducers } from "redux";
import user from './userReducer'
import permissions from './permissionReducer'
import roles from './rolesReducer'
import userProfile  from './userProfile';
import clients from './clientReducer'
const rootReducer = combineReducers({
    user,
    permissions,
    roles,
    userProfile,
    clients
})

export default rootReducer