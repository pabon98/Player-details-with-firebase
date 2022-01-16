import React, { useEffect, useState } from 'react';
import People from '../People/People';

const AllPlayers = () => {
    const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((dt) => setPeoples(dt));
  }, []);
    return (
        <div className="my-2 container">
      <h1>All Players</h1>
      <div className="row">
          {
              peoples.map(people=> 
                <div className="col-md-4 gy-2 ">
                    <People key={people.id}
                    people={people}
                    >
                    </People>
                </div>
                )
          }
      </div>
    </div>
    );
};

export default AllPlayers;