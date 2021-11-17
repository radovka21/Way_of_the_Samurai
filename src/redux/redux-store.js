import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


// сбор всех нашех Reducer
const redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})
// сбор всех нашех Reducer


const store =  (redusers)

export default store