import { legacy_createStore as createStore } from "redux";
import todoReducer from "./todo/Todo";

const store = createStore(todoReducer)

export default store