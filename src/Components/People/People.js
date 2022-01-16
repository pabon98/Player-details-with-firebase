import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './People.css'

const People = ({people}) => {
    const{name,image,profession,description,rating} = people
    return (
        <div>
            <div className="ms-5">
        <div class="card" style={{ width: "18rem" }}>
          <img width="288px" height="300px" src={image}class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-title">{profession} player</p>
            <p class="card-text">
              {description}
            </p>
            <Rating
        initialRating={rating}
        emptySymbol="far fa-star icon-color"
        fullSymbol="fas fa-star icon-color"
        readonly
        ></Rating>
        <br /> <br />
            <Link to={`details/${people.id}`}>
              <button className="btn btn-warning">Details</button>
            </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default People;