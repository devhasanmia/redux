import {createStore} from "redux";
import reducer from "./reducer/productReducer";

const store = createStore(reducer);

export default store;