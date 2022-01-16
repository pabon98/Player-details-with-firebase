import React from 'react';
import { Link } from 'react-router-dom';

const Player = ({player}) => {
    const{name,image,profession,description} = player
    return (
        <div>
            <div className="ms-5">
        <div class="card" style={{ width: "18rem" }}>
          <img className='w-75' src={image}class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-title">{profession} player</p>
            <p class="card-text">
              {description}
            </p>
            <Link to={`details/${player.id}`}>
              <button className="btn btn-warning">Details</button>
            </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Player;