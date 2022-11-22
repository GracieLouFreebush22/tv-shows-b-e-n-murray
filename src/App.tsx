import episodes from "./episodes.json";
import EpisodeListView from "./components/EpisodeListView";

function App(): JSX.Element {
  return (
    <>
      <div>
        <EpisodeListView listOfEpisodes={episodes} />
        <div>
          <h6>
            <a href="https://www.tvmaze.com/shows/82/game-of-thrones/episodes">
              Link to Game of Thrones Episodes
            </a>
          </h6>
        </div>
      </div>
    </>
  );
}

export default App;
