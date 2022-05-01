import React from "react";
import TruckCard from "./truckCard";

function GenTruckList({foodTrucks, onUpdated}) {
  const foodtrucks = foodTrucks;
  console.log("ListTruck: " + foodtrucks);
  let foodTruckList;

  if (!foodtrucks) {
    foodTruckList =
      "No food trucks were found. Please try a different location.";
  } else {
    foodTruckList = foodtrucks.map((foodtruck, k) => (
      <div className="col-4 mb-2">
        <TruckCard foodtruck={foodtruck} key={k} onUpdated={onUpdated} />
      </div>
    ));
  }

  return (
    <div className="GenTruckList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Food Truck</h2>
          </div>
          <div className="row">{foodTruckList}</div>
        </div>
      </div>
    </div>
  );
}

export default GenTruckList;
