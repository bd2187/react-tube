"use strict";

import SearchVideos from 'youtube-api-search';
import config from '../config';
var key = config.API_KEY;

function videoCallback(videos){
  console.log(videos);
}

function YoutubeSearch(props) {
  SearchVideos({key: key, term: 'Star Wars'}, videoCallback);
}

export default YoutubeSearch;
