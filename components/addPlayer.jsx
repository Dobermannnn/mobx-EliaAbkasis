import { useState, useEffect, useRef } from "react";
import { PlayersState } from "../states/playersState";
import { observer } from "mobx-react-lite";
const AddPlayer = observer(({ playersState }) => {
  const [imgLink, setImgLink] = useState(
    playersState.imgList[
      Math.floor(Math.random() * playersState.imgList.length)
    ]
  );
  const handleAddPlayer = () => {
    const playerName = document.getElementsByName("name")[0].value;
    if (playerName != "") playersState.addPlayer(playerName, imgLink);
  };
  const ChangeImg = () => {
    setImgLink(
      playersState.imgList[
        Math.floor(Math.random() * playersState.imgList.length)
      ]
    );
  };

  return (
    <>
      <h1>Name</h1>
      <input type="text" name="name" />
      <img src={imgLink} alt="" width="200" height="200" />
      <button onClick={ChangeImg}> random img</button>
      <button onClick={() => handleAddPlayer()}>Add</button>
    </>
  );
});

export default AddPlayer;
