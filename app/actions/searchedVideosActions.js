import API_KEY from "../config/api_key";
import SearchVideos from "youtube-api-search";
import {
    LOADED_VIDEO_QUERY,
    UPDATED_VIDEOS,
    ERROR_FETCHING_VIDEOS
} from "./actionTypes";

/**
 *
 *
 *
 */
function updateVideos(query = "javascript", videoID = "") {
    return function(dispatch) {
        dispatch({ type: LOADED_VIDEO_QUERY, query });

        return SearchVideos({ key: API_KEY, term: query }, function(data) {
            try {
                if (data && data.length > 0) {
                    dispatch({ type: UPDATED_VIDEOS, videos: data, videoID });
                } else {
                    dispatch({
                        type: ERROR_FETCHING_VIDEOS,
                        errorMessage: `0 results for ${query}`
                    });
                }
            } catch (err) {
                console.error(err);
                return dispatch({
                    type: ERROR_FETCHING_VIDEOS,
                    errorMessage: `Looks like there was an error fetching videos. Please try again`
                });
            }
        });
    };
}

export default updateVideos;
