"use strict";

import SearchVideos from "youtube-api-search";
import API_KEY from "../config/api_key";

function YoutubeSearch(searchTerm, videoCallback) {
    SearchVideos({ key: API_KEY, term: searchTerm }, videoCallback);
}

export default YoutubeSearch;
