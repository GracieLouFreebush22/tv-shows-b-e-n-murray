import episodes from "./episodes.json";
import EpisodeListView from "./components/EpisodeListView";
import "./style.css";

function App(): JSX.Element {
  return (
    <>
      <div className="app">
        <h1 className="header"> Game Of Thrones </h1>
        <div className="all-view">
          <EpisodeListView listOfEpisodes={episodes} />
        </div>
      </div>
      <div className="ep-link">
        <h6>
          <a href="https://www.tvmaze.com/shows/82/game-of-thrones/episodes">
            Link to Game of Thrones Episodes
          </a>
        </h6>
      </div>
    </>
  );
}

export default App;
