import { useState, useEffect, useRef } from "react";
import { PlayersState } from "../states/playersState";
import { observer } from "mobx-react-lite";
const ShowPlayer = observer(({ player, playersState }) => {
  return (
    <div style={{ maxWidth: "300px", borderStyle: "solid" }}>
      <h2>{player.name}</h2>
      <img src={player.imgLink} alt="" width="200" height="200" />
      <h2>
        {
          <h2>
            score: {player.score} letters: {player.charsList}
          </h2>
        }
        {!playersState.gameStart && (
          <button
            onClick={() => {
              playersState.removePlayer(player);
            }}
          >
            {" "}
            Delete
          </button>
        )}
      </h2>
    </div>
  );
});
export default ShowPlayer;
