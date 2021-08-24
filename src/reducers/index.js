import { combineReducers } from "redux";
import user from './userReducer'
import permissions from './permissionReducer'
import roles from './rolesReducer'
import userProfile  from "./userProfile";
const rootReducer = combineReducers({
    user,
    permissions,
    roles,
    userProfile
})

export default rootReducer