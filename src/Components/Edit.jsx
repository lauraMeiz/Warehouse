import { useEffect, useState } from "react";
import getNewId from "../Common/id";

function Edit({ edit, product, cancel, products }) {
  const [name, setName] = useState("");
  const [EAN, setEAN] = useState();
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [isActive, setIsActive] = useState(0);
  const [price, setPrice] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    setName(products.name);
    setEAN(products.EAN);
    setType(products.type);
    setColor(products.color);
    setIsActive(0);
    setWeight(products.weight);
    setPrice(products.price);
    setQuantity(products.quantity);
    setDate(products.date);
  }, [products]);
  const handleCancel = () => {
    cancel();
  };

  const handleEdit = (e) => {
    e.preventDefault();
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
      date: new Date().toLocaleString(),
    };
    console.log(date);
    edit(data);
    setName("");
    setEAN("");
    setType("");
    setColor("");
    setIsActive(0);
    setWeight("");
    setPrice([]);
    setQuantity([]);
    setDate("");
    console.log("price", price);
    console.log("quan", quantity);
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
      <div className="modal">
        <div className="edit">
          <h2>Edit</h2>
          <div className="form">
            <div className="input">
              <label> EAN</label>
              <input
                type="text"
                value={EAN}
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
              <label>Weigth</label>
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

            <div className="buttons">
              <button className="editB" onClick={handleEdit}>
                Save
              </button>
              <button className="delete" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Edit;
