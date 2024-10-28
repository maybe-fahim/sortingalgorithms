import { createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(rootReducer);
//RootReducer is the main reducer that combines all the reducers in the app.