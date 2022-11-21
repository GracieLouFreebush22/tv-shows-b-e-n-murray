
interface IEpisode {
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

interface IEpisodeListViewProps{
    episode: IEpisode
}

function EpisodeListView(props: IEpisodeListViewProps): JSX.Element{



    return (
        <div>
            <> This is Episode List View </>
            <ul> {props.episode.name} </ul>
        </div>
    )
}




export default EpisodeListView;