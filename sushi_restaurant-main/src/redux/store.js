import { legacy_createStore as createStore } from "redux";
import SushiReducer from "./SushiReducer";
const store = createStore(SushiReducer);
export default store;