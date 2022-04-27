import { useEffect, useState } from "react";
import getNewId from "../Common/id";

function Edit({ edit, product, cancel }) {
  const [name, setName] = useState("");
  const [EAN, setEAN] = useState();
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [isActive, setIsActive] = useState(0);
  //   useEffect(() => {
  //     setName(product.name);
  //     setEAN(product.EAN);
  //     setType(product.type);
  //     setColor(product.color);
  //     setIsActive(0);
  //     setWeight(product.weight);
  //   }, [product]);
  const handleCancel = () => {
    cancel();
  };

  const handleEdit = () => {
    const data = {
      id: getNewId(),
      name: name,
      EAN: EAN,
      type: type,
      weight: weight,
      color: color,
      isActive: isActive,
    };

    edit(data);
    setName("");
    setEAN("");
    setType("");
    setColor("");
    setIsActive(0);
    setWeight("");
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
              <label> Weigth</label>
              <input
                type="text"
                value={weight}
                onChange={(e) => handleInput(e, "weight")}
              />
              grames
            </div>

            <div className="input btn">
              <button onClick={handleEdit}>Register</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Edit;
