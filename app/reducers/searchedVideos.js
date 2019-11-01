import {
    LOADED_VIDEO_QUERY,
    UPDATED_VIDEOS,
    ERROR_FETCHING_VIDEOS
} from "../actions/actionTypes";

const initialState = {
    query: "",
    videos: [],
    currentVideo: {},
    loadingVideoQuery: false,
    error: false
};

/**
 *  Determines the correct video by search for the video in the
 *  videos array with the matching videoID. If the videoID
 *  doesn't match with any of the videos, default to the first video
 *  in the array
 *
 *  @param Object videos
 *  @param String videoID
 *  @return Object currentVideo
 */
function determineCurrentVideo(videos = [], videoID = "") {
    let currentVideo = {};
    for (
        let i = 0;
        i < videos.length && Object.keys(currentVideo).length === 0;
        i++
    ) {
        let video = videos[i];
        if (video.id.videoId === videoID) {
            currentVideo = video;
        }
    }

    if (!currentVideo.hasOwnProperty("id")) {
        currentVideo = videos[0];
    }

    return currentVideo;
}

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
            // iterate through action.videos and find video that matched videoID
            var currentVideo = determineCurrentVideo(
                action.videos,
                action.videoID
            );

            return {
                ...state,
                videos: action.videos,
                currentVideo,
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
