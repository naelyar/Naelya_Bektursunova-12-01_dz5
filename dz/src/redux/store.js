import { combineReducers } from "redux";
import {messageReducer} from "./messageReducer";

export const rootreducer = combineReducers({
    message: messageReducer
})