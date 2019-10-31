import {
    LOADED_VIDEO_QUERY,
    UPDATED_VIDEOS,
    ERROR_FETCHING_VIDEOS
} from "../actions/actionTypes";

const initialState = {
    query: "",
    videos: [],
    loadingVideoQuery: false,
    error: false
};

/**
 *  Updates the searchedVideo property of redux store
 *
 * @param Object state
 * @param Object action
 * @return Object updated state
 */
function searchedVideos(state = initialState, action) {
    switch (action.type) {
        case LOADED_VIDEO_QUERY:
            return { ...state, query: action.query, loadingVideoQuery: true };

        case UPDATED_VIDEOS:
            return {
                ...state,
                videos: action.videos,
                error: false,
                loadingVideoQuery: false
            };

        case ERROR_FETCHING_VIDEOS:
            return { ...state, error: true, loadingVideoQuery: false };

        default:
            return state;
    }
}

export default searchedVideos;
