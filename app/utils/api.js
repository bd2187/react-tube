"use strict";

import SearchVideos from 'youtube-api-search';
import config from '../config';
var key = config.API_KEY;

function YoutubeSearch(searchTerm, videoCallback) {
  SearchVideos({key: key, term: searchTerm}, videoCallback);
}

export default YoutubeSearch;
