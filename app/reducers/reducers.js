import { combineReducers } from "redux";
import searchedVideos from "./searchedVideos";
import user from "./user";
import theme from "./theme";

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

const reducers = combineReducers({ user, searchedVideos, theme });

export default reducers;
