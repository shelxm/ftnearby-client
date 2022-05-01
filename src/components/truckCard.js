import React from "react";
import FavoriteButton from './FavoriteButton';

const TruckCard = ({ foodtruck, onUpdated }) => {
  //console.log(foodtruck);
  return (
    <div className="card container">
      <div className="embed-responsive embed-responsive-16by9">
        <img src={foodtruck.imgUrl} className="card-img-top embed-responsive-item" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{foodtruck.name}</h5>
        <p className="card-text">{foodtruck.hours}</p>
        <p className="card-text">{foodtruck.location}</p>
        <a href={foodtruck.link} className="btn btn-primary">
          For more information
        </a>
        <FavoriteButton foodTruck={foodtruck} onUpdated={onUpdated}/>
      </div>
    </div>
  );
};

export default TruckCard;
