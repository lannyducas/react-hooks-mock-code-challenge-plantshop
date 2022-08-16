import React, {useState, useEffect} from "react";

function NewPlantForm({onAddItem}) {
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [price, setPrice] = useState("");

function handleSubmit(e) {
  e.preventDefault();
  const plantData = {
    name: name,
    image: image,
    price: price,
  };
  console.log(plantData);

  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plantData),
  })
    .then((r) => r.json())
    .then((newItem) => onAddItem(newItem));
}

return (
  <div className="new-plant-form" onSubmit={handleSubmit}>
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}


export default NewPlantForm;
