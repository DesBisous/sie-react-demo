import { combineReducers } from "redux";
import user from "./redSub/user";
import toast from "./redSub/toast";
import async from "./redSub/async";
import loc from "./redSub/loc";

export default combineReducers({
    user,
    toast,
    async,
    loc
})