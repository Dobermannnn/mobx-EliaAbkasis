import { useState, useEffect, useRef } from "react";
import { PlayersState } from "../states/playersState";
import { observer } from "mobx-react-lite";

const Game = observer(({ players }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let intervalId;
  const [turn, setTurn] = useState(0);
  function intervalFunction() {
    if (players.gameStart) {
      players.changeTurn();
      setTurn(players.getTurn);
      players.letter = letters[Math.floor(Math.random() * letters.length)];
      console.log("randomLetter " + players.letter);
      console.log("gamestart " + players.gameStart);

      players.checkIndex(players.players[turn]);

      if (!players.blurWord.includes("*")) {
        let max = 0;
        let winner;
        for (let i = 0; i < players.players.length; i++) {
          if (players.players[i].score > max) {
            max = players.players[i].score;
            winner = players.players[i];
          }
        }

        setTimeout(() => {
          if (
            window.confirm(
              winner.name +
                " won!! \nwould you like to continue with these players?"
            )
          ) {
            players.gameStart = false;
            players.startGame();
          } else {
            players.gameStart = false;
          }
        }, 0);
      }
    }
  }
  useEffect(() => {
    const intervalID = setInterval(intervalFunction, 1000);
    return () => clearInterval(intervalID);
  }, [players.gameStart]);

  const play = () => {
    players.startGame();
    console.log("word " + players.word);
  };

  return (
    <div>
      {players.players.length >= 2 && (
        <button onClick={play} disabled={players.gameStart}>
          {" "}
          Play
        </button>
      )}
      {players.gameStart && (
        <h2>
          {" "}
          word: {players.blurWord} {players.players[turn].name} turn char:{" "}
          {players.letter}
        </h2>
      )}
    </div>
  );
});
export default Game;
