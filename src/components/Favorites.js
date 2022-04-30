import React, { useState, useEffect } from "react";
import axios from "axios";
import GenTruckList from "./GenTruckList";
import API from './redux/api';

const Favorites = () => {
  const [favoritedTrucks, setFavoritedTrucks] = useState([]);

  useEffect(() => {
    // window.localStorage.setItem('user', JSON.stringify(response.data))
    const user = JSON.parse(window.localStorage.getItem("user"));
    const token = user.token;
    axios
      .get(API + "user/favorites/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setFavoritedTrucks(res.data);
      })
      .catch((err) => {
        console.log("Error from GenTruckList.");
      });
  }, []);

  return (
    <div className="container">
      <GenTruckList foodTrucks={favoritedTrucks} />
    </div>
  );
};

export default Favorites;
