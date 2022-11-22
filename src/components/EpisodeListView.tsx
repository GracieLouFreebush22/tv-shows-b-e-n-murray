import OneEpisodeView from "./OneEpisodeView";

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  rating: { average: number };
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

interface IEpisodeListViewProps {
  listOfEpisodes: IEpisode[];
}

function EpisodeListView(props: IEpisodeListViewProps): JSX.Element {
  return (

      <div className= "list-view">
        <ul>
        {props.listOfEpisodes.map((epItem) => (
          < OneEpisodeView episode={epItem} key={epItem.id} />
        ))}
        ;
        </ul> 
      </div>

  );
}

export default EpisodeListView;
