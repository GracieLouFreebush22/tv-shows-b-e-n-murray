import { IEpisode } from "./EpisodeListView";


interface OneEpisodeViewProps {
  episode: IEpisode;
}

function OneEpisodeView(props: OneEpisodeViewProps): JSX.Element {
  return (
    <div > 
    <div >
      <h2>{props.episode.name}: 
      {GenerateEpisodeCode(props.episode.season, props.episode.number)}</h2>
      <div>
        <img src={props.episode.image.medium} alt="" />
        <p>{props.episode.summary}</p>
      </div>
    </div>
  </div>
  );
}

export function GenerateEpisodeCode(
  seasonNumber: number,
  episodeNumber: number
): string {
  let seasonCode = "S"; //sets default value
  let episodeCode = "E";
  if (seasonNumber < 10) {
    seasonCode = "S0";
  }
  if (episodeNumber < 10) {
    episodeCode = "E0";
  }
  console.log("whooo baby");
  return seasonCode + seasonNumber + episodeCode + episodeNumber;
}

export default OneEpisodeView;
