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
  favFood: string;
}

function EpisodeListView(props: IEpisodeListViewProps): JSX.Element {
  return (
    <div>
      <> This is Episode List View </>
      <p>{props.listOfEpisodes[7].name}</p>
      <p>{props.favFood}</p>
    </div>
  );
}

export default EpisodeListView;
