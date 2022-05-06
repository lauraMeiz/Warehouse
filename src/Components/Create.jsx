import { useState } from "react";
import getNewId from "../Common/id";

function Create({ create }) {
  const [name, setName] = useState("");
  const [EAN, setEAN] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [isActive, setIsActive] = useState(0);
  const [price, setPrice] = useState([]);
  const [quantity, setQuantity] = useState([]);

  const handleCreate = () => {
    const data = {
      id: getNewId(),
      name: name,
      EAN: EAN,
      type: type,
      weight: weight,
      color: color,
      isActive: isActive,
      price: price,
      quantity: quantity,
    };

    create(data);
    setName("");
    setEAN("");
    setType("");
    setColor("");
    setIsActive(0);
    setWeight("");
    setPrice([]);
    setQuantity([]);
  };

  const handleInput = (e, d) => {
    switch (d) {
      case "EAN":
        setEAN(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "type":
        setType(e.target.value);
        break;
      case "color":
        setColor(e.target.value);
        break;
      case "weight":
        setWeight(e.target.value);
        break;
      case "isActive":
        setIsActive((i) => (i === 0 ? 1 : 0));
        break;
      case "price":
        setPrice(e.target.value);
        break;
      case "quantity":
        setQuantity(e.target.value);
        break;
      default:
    }
  };
  return (
    <>
      <div className="create">
        <h2>Registration</h2>
        <div className="form">
          <div className="input">
            <label> EAN</label>
            <input
              type="text"
              value={EAN}
              placeholder="Enter new EAN"
              onChange={(e) => handleInput(e, "EAN")}
            ></input>
            <label>Name</label>
            <select value={name} onChange={(e) => handleInput(e, "name")}>
              <option value="tulips">Tulips</option>
              <option value="rose">Rose</option>
              <option value="snapdragon">Snapdragon</option>
              <option value="chrysanthemum">Chrysanthemum</option>
              <option value="geranium">Geranium</option>
              <option value="sunflower">Sunflower</option>
              <option value="petunia">Petunia</option>
            </select>
            <label>Color</label>
            <select value={color} onChange={(e) => handleInput(e, "color")}>
              <option value="pink">Pink</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="red">Red</option>
              <option value="violet">Violet</option>
            </select>
            <label>Type</label>
            <select value={type} onChange={(e) => handleInput(e, "type")}>
              <option value="all season">All season</option>
              <option value="summer">Summer</option>
            </select>
            <label> Weigth</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => handleInput(e, "weight")}
            />
            <label>Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => handleInput(e, "price")}
            />

            <label>Quantity</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => handleInput(e, "quantity")}
            />
          </div>

          <div className="input btn">
            <button className="register" onClick={handleCreate}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Create;
