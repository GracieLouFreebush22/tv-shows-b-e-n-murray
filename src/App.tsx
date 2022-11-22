import episodes from "./episodes.json";
import EpisodeListView from "./components/EpisodeListView";

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  return (
    <>
      <div>
        <> Hello World</>;
        <EpisodeListView listOfEpisodes={episodes}/>
      </div>
    </>
  );
}

export default App;
