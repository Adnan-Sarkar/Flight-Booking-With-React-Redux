import { createStore } from "redux";
import bookingActionReducer from "./booking/bookingActionReducer";

const store = createStore(bookingActionReducer);

export default store;
