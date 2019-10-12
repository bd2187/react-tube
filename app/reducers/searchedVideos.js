import {
    LOADING_VIDEO_QUERY,
    UPDATE_VIDEOS,
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
        case LOADING_VIDEO_QUERY:
            return { ...state, loadingQuery: true };

        case UPDATE_VIDEOS:
            return {
                ...state,
                query: action.query,
                videos: action.videos,
                error: false,
                loadingVideoQuery: false
            };

        case ERROR_FETCHING_VIDEOS:
            return { ...state, error: true, loadingQuery: false };

        default:
            return state;
    }
}

export default searchedVideos;
