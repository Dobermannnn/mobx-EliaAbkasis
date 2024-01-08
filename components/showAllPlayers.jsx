import ShowPlayer from "./showPlayers";
import { useState, useEffect, useRef } from "react";
import { PlayersState } from "../states/playersState";
import { observer } from "mobx-react-lite";

const ShowAllPlayer = observer(({ players }) => {
  return (
    <>
      {players.players.map((player) => (
        <ShowPlayer player={player} playersState={players} />
      ))}
    </>
  );
});
export default ShowAllPlayer;
