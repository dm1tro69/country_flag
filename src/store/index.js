import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from "./root_reducer";
import thunk from "redux-thunk";
import axios from "axios";
import * as api from '../config'


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({
    client: axios,
     api
}))))
