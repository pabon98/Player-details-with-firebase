import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import './PlayerDetails.css'

const PlayerDetails = () => {
   const{playerdetails} = useParams()
   const[data, setData] = useState([])
   useEffect( ()=>{
       fetch('/data.json')
       .then(res=>res.json())
       .then(data=>setData(data))
   },[])
   const exactPlayer = data.filter(dt=> dt.id == playerdetails)
//    console.log(exactPlayer)
    return (
        <div className='container'>
            <h1>Player Details</h1>
            <div className="row my-4">
            <div className="col-md-6">
                <img className='w-75' src={exactPlayer[0]?.image} alt="" />
            </div>
            <div className="col-md-5 shadow p-3 mb-5 bg-body rounded">
                <h5>Details {exactPlayer[0]?.id}</h5>
             <h2>Name: {exactPlayer[0]?.name}</h2>
             <h3>{exactPlayer[0]?.profession} Player</h3>
             <Rating
        initialRating={exactPlayer[0]?.rating}
        emptySymbol="far fa-star icon-color"
        fullSymbol="fas fa-star icon-color"
        readonly
        ></Rating>
             <p>{exactPlayer[0]?.description}</p>
            </div>
            </div>
        </div>
    );
};

export default PlayerDetails;