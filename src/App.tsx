import episodes from "./episodes.json";
import EpisodeListView from "./components/EpisodeListView";

function App(): JSX.Element {
  return (
    <>
      <div>
        <EpisodeListView listOfEpisodes={episodes} />
      </div>
    </>
  );
}

export default App;
