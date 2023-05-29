import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import userReducer from "./user/reducer";
import formReducer from "./form/reducer";
const rootReducer = combineReducers({ cartReducer, userReducer, formReducer });

export default rootReducer;
