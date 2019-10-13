import { combineReducers } from "redux";
import searchedVideos from "./searchedVideos";

/*
    {
        user: {
            id: ''.
            username: '',
            email: '',
            favorites: [],
            token: ''
        }
        search: {
            query:
            videos: [],
            loadingVideoQuery: false
        },
        darkmode: false
    }
*/

const reducers = combineReducers({ searchedVideos });

export default reducers;
