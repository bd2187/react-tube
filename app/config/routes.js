import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoContainer from "../containers/VideoContainer";
import NavigationContainer from "../containers/NavigationContainer";
import SignInContainer from "../containers/SignInContainer";

// import SearchBar from "../components/SearchBar";
// import SelectedVideo from "../components/SelectedVideo";
// import Videos from "../components/Videos";
// import YoutubeSearch from "../utils/api";
// class Home extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchTerm: "React JS",
//             videosArr: null,
//             selectedVideo: null
//         };
//         this.handleSearch = this.handleSearch.bind(this);
//         this.changeSelectedVideo = this.changeSelectedVideo.bind(this);
//     }
//     handleSearch(searchTerm) {
//         YoutubeSearch(searchTerm, (videosArr = []) => {
//             console.warn(videosArr);
//             this.setState({ videosArr, selectedVideo: videosArr[0] });
//         });
//     }
//     changeSelectedVideo(video) {
//         YoutubeSearch(video.snippet.title, (videosArr = []) => {
//             this.setState({ videosArr });
//         });

//         this.setState(function() {
//             return { selectedVideo: video };
//         });
//     }
//     componentDidMount() {
//         this.handleSearch(this.state.searchTerm);
//     }
//     render() {
//         var videosArr = this.state.videosArr;
//         return (
//             <div className="container">
//                 <SearchBar onSubmit={this.handleSearch} />
//                 {!videosArr ? (
//                     <div className="loader" />
//                 ) : (
//                     <div className="main-box clearfix">
//                         <SelectedVideo
//                             selectedVideo={this.state.selectedVideo}
//                         />
//                         <Videos
//                             videosArr={videosArr}
//                             changeSelectedVideo={this.changeSelectedVideo}
//                         />
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

const routes = (
    <Router>
        <NavigationContainer />
        <Switch>
            <Route exact path="/" component={VideoContainer} />
            <Route exact path="/signin" component={SignInContainer} />
        </Switch>
    </Router>
);

export default routes;
