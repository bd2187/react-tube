import { combineReducers } from "redux";
import searchedVideos from "./searchedVideos";
import user from "./user";

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

const reducers = combineReducers({ user, searchedVideos });

export default reducers;
