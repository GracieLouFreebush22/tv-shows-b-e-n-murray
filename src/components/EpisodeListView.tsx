import OneEpisodeView from "./OneEpisodeView";
import { useState } from "react";

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
  const [searchText, setSearchText]= useState("")

  return (
    <div>
      <input value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      <p> Episodes Displayed: {findMatchingEps(searchText, props.listOfEpisodes).length} / 73</p>
      <div className= "list-view">
        <ul>
        {findMatchingEps(searchText, props.listOfEpisodes).map((epItem) => (
          < OneEpisodeView episode={epItem} key={epItem.id} />
        ))}
        ;
        </ul> 
      </div>
    </div>
  );
}


function findMatchingEps( message: string, filteredArr: IEpisode[]) {
  if (!message){
    return filteredArr
  } 
  return filteredArr.filter(episode => episode.name.toLowerCase().includes(message.toLowerCase()) || 
  episode.summary.toLowerCase().includes(message.toLowerCase()))
}


export default EpisodeListView