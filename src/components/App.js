import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
// import PlantData from "./PlantData";

// function App() {
//   const [plants, setPlantInfo] = useState(null)

//   useEffect(() => {
//     fetch("http://localhost:6001/plants")
//       .then((res) => res.json())
//       .then((plants) => setPlantInfo(plants))
//       }, []);

  
//   return (
//     <div className="app">
//       <Header />
//       <PlantPage />

//     </div>
//   );

// }


function App() {
return (
  <div className = "app">
      <Header />
      <PlantPage />
        </div>
)}
export default App;



// When the app starts, I can see all plants.
// I can add a new plant to the page by submitting the form.
// I can mark a plant as "sold out".
// I can search for plants by their name and see a filtered list of plants.