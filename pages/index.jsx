import { PlayersState } from "../states/playersState";
import react from "react";
import ShowPlayer from "../components/showPlayers";
import AddPlayer from "../components/addPlayer";
import { Observer } from "mobx-react-lite";
import ShowAllPlayer from "../components/showAllPlayers";
import Game from "../components/game";
export default function App() {
  const playersState = new PlayersState();
  return (
    <div>
      <AddPlayer playersState={playersState} />

      {console.log(JSON.stringify(playersState.players))}
      <Game players={playersState} />
      <ShowAllPlayer players={playersState} />
    </div>
  );
}
