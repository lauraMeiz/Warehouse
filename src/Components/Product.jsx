import { useState } from "react";

function Product({
  product,
  products,
  deleteA,
  show,
  isActive,
  handleInput,
  getView,
}) {
  const [check, setCheck] = useState(0);
  const handleDelete = (id) => {
    deleteA(parseInt(id));
  };

  const checked = () => {
    setCheck((i) => (i === 0 ? 1 : 0));
    console.log(check);
  };

  return (
    <>
      <div className="product">
        {" "}
        <li>{product.EAN}</li>
        <li>{product.name}</li>
        <li>{product.type}</li>
        <li>{product.color}</li>
        <li>{product.weight}</li>
        <input
          style={{ width: "50px" }}
          type="checkbox"
          checked={check}
          onChange={() => checked()}
        />
        <div className="buttons">
          {check ? (
            <button onClick={(id) => getView(product.id)} className="view">
              VIEW
            </button>
          ) : (
            <button className="view">VIEW</button>
          )}
          {check ? (
            <button className="delete" onClick={() => handleDelete(product.id)}>
              DELETE
            </button>
          ) : (
            <button className="delete">DELETE</button>
          )}
          {check ? (
            <button className="editB" onClick={(id) => show(product.id)}>
              EDIT
            </button>
          ) : (
            <button className="editB">EDIT</button>
          )}
        </div>
      </div>
    </>
  );
}
export default Product;
