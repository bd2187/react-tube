import API_KEY from "../config/api_key";
import SearchVideos from "youtube-api-search";
import {
    LOADING_VIDEO_QUERY,
    UPDATE_VIDEOS,
    ERROR_FETCHING_VIDEOS
} from "./actionTypes";

function updateVideos(query) {
    return function(dispatch) {
        dispatch({ type: LOADING_VIDEO_QUERY });

        return SearchVideos({ key: API_KEY, term: query }, function(data) {
            try {
                return data && data.length > 0
                    ? dispatch({ type: UPDATE_VIDEOS, videos: data })
                    : dispatch({ type: ERROR_FETCHING_VIDEOS });
            } catch (err) {
                return dispatch({ type: ERROR_FETCHING_VIDEOS });
            }
        });
    };
}

export default updateVideos;
