import { IEpisode } from './EpisodeListView'

interface OneEpisodeViewProps {
    episode: IEpisode;
  }

function OneEpisodeView(props: OneEpisodeViewProps): JSX.Element {

    let seasonCode = 'S'; //sets default value
    let episodeCode = 'E';
    if (props.episode.season < 10){
        seasonCode = 'S0'
    }
    if (props.episode.number < 10){
        episodeCode = 'E0'
    }

    return(
        <div>
            <div>{props.episode.name}</div>
            <div>{seasonCode}{props.episode.season}{episodeCode}{props.episode.number}</div>
            <img src={props.episode.image.medium} alt=""/>
            <div>{props.episode.summary}</div>
        </div>
    )
}

export default OneEpisodeView;