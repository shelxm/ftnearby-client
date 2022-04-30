import React from "react";
import FavoriteButton from './FavoriteButton';

const TruckCard = ({ foodtruck }) => {
  //console.log(foodtruck);
  return (
    <div className="card container">
      <img src="{foodtruck.imageUrl}" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{foodtruck.name}</h5>
        <p className="card-text">{foodtruck.hours}</p>
        <p className="card-text">{foodtruck.location}</p>
        <a href={foodtruck.link} className="btn btn-primary">
          For more information
        </a>
        <>{FavoriteButton}</>
      </div>
    </div>
  );
};

export default TruckCard;
