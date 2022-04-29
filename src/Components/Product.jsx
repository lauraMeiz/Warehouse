function Product({
  product,
  products,
  deleteA,
  show,
  isActive,
  handleInput,
  getView,
}) {
  const handleDelete = (id) => {
    deleteA(parseInt(id));
  };

  // const handleView = (id) => {
  //   getView(parseInt(id));
  // };
  return (
    <>
      <div className="product">
        {" "}
        <li>{product.EAN}</li>
        <li>{product.name}</li>
        <li>{product.type}</li>
        <li>{product.color}</li>
        <li>{product.weight}</li>
        {/* <div className="active"></div> */}
        {/* <label>Active</label> */}
        <input
          style={{ width: "50px" }}
          type="checkbox"
          checked={isActive}
          onChange={(e) => handleInput(e, "isActive")}
        />
        <div className="buttons">
          <button onClick={(id) => getView(product.id)} className="view">
            VIEW
          </button>

          <button className="delete" onClick={() => handleDelete(product.id)}>
            DELETE
          </button>
          <button className="editB" onClick={(id) => show(product.id)}>
            EDIT
          </button>
        </div>
      </div>
    </>
  );
}
export default Product;
