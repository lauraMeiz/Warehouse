import { useEffect, useState } from "react";
// import getNewId from "../Common/id";

function View({ product, cancel, products }) {
  console.log(products);
  //   const [name, setName] = useState("");
  //   const [EAN, setEAN] = useState();
  //   const [type, setType] = useState("");
  //   const [weight, setWeight] = useState("");
  //   const [color, setColor] = useState("");
  //   const [isActive, setIsActive] = useState(0);
  //   useEffect(
  //     (e) => {
  //       e.preventDefault();
  //       setName(products.name);

  //       setEAN(products.EAN);
  //       setType(products.type);
  //       setColor(products.color);
  //       setIsActive(0);
  //       setWeight(products.weight);
  //     },
  //     [products]
  //   );
  const handleCancel = () => {
    cancel();
  };

  //   const handleEdit = (e) => {
  //     e.preventDefault();
  //     const data = {
  //       id: getNewId(),
  //       name: name,
  //       EAN: EAN,
  //       type: type,
  //       weight: weight,
  //       color: color,
  //       isActive: isActive,
  //     };

  //     edit(data);
  //     setName("");
  //     setEAN("");
  //     setType("");
  //     setColor("");
  //     setIsActive(0);
  //     setWeight("");
  //   };

  //   const handleInput = (e, d) => {
  //     switch (d) {
  //       case "EAN":
  //         setEAN(e.target.value);
  //         break;
  //       case "name":
  //         setName(e.target.value);
  //         break;
  //       case "type":
  //         setType(e.target.value);
  //         break;
  //       case "color":
  //         setColor(e.target.value);
  //         break;
  //       case "weight":
  //         setWeight(e.target.value);
  //         break;
  //       default:
  //     }
  //};
  return (
    <>
      <div className="modal">
        <div className="edit">
          <h2>View</h2>
          <div className="form">
            <div className="input">
              <label> EAN</label>
              <div>{product.EAN}</div>
              <label>Name</label>
              <div>{product.name}</div>
              <label>Type</label>
              <div>{product.type}</div>
              <label> Weigth</label>
              <div>{product.weight}</div>
              <div className="buttons">
                <button className="delete" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default View;
