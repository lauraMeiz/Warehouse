import { useEffect, useState } from "react";
import tulpe from "../img/tulip.jpg";
import rose from "../img/rose.jpg";
import snapdragon from "../img/snapdragon.jpg";
import chrysanthemum from "../img/chrysanthemum.jpg";
import geranium from "../img/geranium.jpg";
import sunflower from "../img/sunflower.jpg";
import petunia from "../img/petunia.jpg";

// import getNewId from "../Common/id";

function View({ cancel, products, product }) {
  // const [name, setName] = useState("");
  // const [EAN, setEAN] = useState();
  // const [type, setType] = useState("");
  // const [weight, setWeight] = useState("");
  // const [color, setColor] = useState("");
  // const [isActive, setIsActive] = useState(0);
  console.log(products);
  // useEffect(() => {
  //   setName(products.name);
  //   setEAN(products.EAN);
  //   setType(products.type);
  //   setColor(products.color);
  //   setIsActive(0);
  //   setWeight(products.weight);
  // }, [products]);
  const handleCancel = () => {
    cancel();
  };

  return (
    <>
      <div className="modal">
        <div className="view">
          <h2>View</h2>
          <div className="form">
            <div className="input">
              {products.name === "tulips" && (
                <img src={tulpe} alt="tulip"></img>
              )}
              {products.name === "rose" && <img src={rose} alt="rose"></img>}
              {products.name === "snapdragon" && (
                <img src={snapdragon} alt="snapdragon"></img>
              )}
              {products.name === "chrysanthemum" && (
                <img src={chrysanthemum} alt="chrysanthemum"></img>
              )}
              {products.name === "geranium" && (
                <img src={geranium} alt="geranium"></img>
              )}
              {products.name === "sunflower" && (
                <img src={sunflower} alt="sunflower"></img>
              )}
              {products.name === "petunia" && (
                <img src={petunia} alt="petunia"></img>
              )}
              <label> EAN: {products.EAN}</label>
              <label>
                Name:
                <span
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "BOLDER",
                    fontSize: "30px",
                  }}
                >
                  {" "}
                  {products.name}
                </span>
              </label>
              {products.type ? (
                <label> Type: {products.type}</label>
              ) : (
                <div>
                  {" "}
                  Type{" "}
                  <span style={{ opacity: "0.5" }}>
                    Nothing is registered
                  </span>{" "}
                </div>
              )}
              {products.weight ? (
                <label> Weigth: {products.weight} grames</label>
              ) : (
                <div>
                  {" "}
                  Weigth{" "}
                  <span style={{ opacity: "0.5" }}>
                    Nothing is registered
                  </span>{" "}
                </div>
              )}

              <div className="buttons">
                <button className="viewB" onClick={handleCancel}>
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
