// import episodes from "./episodes.json";
import EpisodeListView, { IEpisode } from "./components/EpisodeListView";
import "./style.css";

function printGOTEpInfo(): Promise<T> {
    return fetch("https://api.tvmaze.com/shows/82/episodes")
    .then((response) => response.json())
    .then((episodes: IEpisode[]) => {
      console.log(episodes);
    });
  }
function App(): JSX.Element {
  return (
    <>
      <div className="app">
        <h1 className="header"> Game Of Thrones </h1>
        <div className="all-view">
          <EpisodeListView listOfEpisodes={printGOTEpInfo()} />
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
