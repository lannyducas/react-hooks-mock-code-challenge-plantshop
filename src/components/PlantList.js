import React, {useState, useEffect}from "react";
import PlantCard from "./PlantCard";


function PlantList() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }, []);

  function handleAddPlant(newPlant) {
    console.log(newplant);
}
  
  
  return (

    <ul className="cards">/
    <PlantCard />
    </ul>
  );
}

export default PlantList;
