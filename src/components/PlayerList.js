import React from "react"; //optional
import playerData from '../data/playerData';
import matchData from '../data/matchData';
import Player from "./Player";
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';

function PlayerList(props) {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  console.log(parsedPlayerData);
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  );
}

export default PlayerList;