import React, { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((dt) => setPlayers(dt));
  }, []);
  return (
    <div className="my-2 container">
      <h1>Our Players</h1>
      <div className="row">
          {
              players.slice(0,6).map(player=> 
                <div className="col-md-4 gy-2 ">
                    <Player key={player.id}
                    player={player}
                    >
                    </Player>
                </div>
                )
          }
      </div>
    </div>
  );
};

export default Players;
