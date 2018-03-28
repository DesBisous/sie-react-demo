import { combineReducers } from "redux";
import user from "./redSub/user";
import toast from "./redSub/toast";
import async from "./redSub/async";

export default combineReducers({
    user,
    toast,
    async
})