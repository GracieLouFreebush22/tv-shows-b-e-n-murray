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
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div>
        <input
          className="search-bar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div>
        <p>
          {" "}
          Episodes Displayed: {epCount(searchText, props.listOfEpisodes)} / 73
        </p>
      </div>
      <div className="list-view">
        <ul>
          {findMatchingEps(searchText, props.listOfEpisodes).map((epItem) => (
            <OneEpisodeView episode={epItem} key={epItem.id} />
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}

export function epCount(message: string, filteredArr: IEpisode[]): number {
  return findMatchingEps(message, filteredArr).length;
}

function findMatchingEps(message: string, filteredArr: IEpisode[]) {
  if (!message) {
    return filteredArr;
  }
  return filteredArr.filter(
    (episode) =>
      episode.name.toLowerCase().includes(message.toLowerCase()) ||
      episode.summary.toLowerCase().includes(message.toLowerCase())
  );
}

export default EpisodeListView;
