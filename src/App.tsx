// import episodes from "./episodes.json";
import EpisodeListView, { IEpisode } from "./components/EpisodeListView";
import "./style.css";
import { useState } from "react";


function App(): JSX.Element {
  const [episodes, setEpisodes] = useState<IEpisode[]>([])
  function fetchAndStoreEpisodes() {
    fetch("https://api.tvmaze.com/shows/82/episodes")
      .then((response) => response.json())
      .then((fetchedEpisodes: IEpisode[]) => {
        console.log(fetchedEpisodes);
        setEpisodes(fetchedEpisodes);
      })
  }

  return (
    <>
      <div className="app">
        <h1 className="header"> Game Of Thrones </h1>
        <div className="all-view">
          <EpisodeListView listOfEpisodes={episodes} />
          <button onClick={fetchAndStoreEpisodes}>get them eps</button>
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
