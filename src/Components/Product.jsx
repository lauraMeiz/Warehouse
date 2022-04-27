function Product({ product, deleteA, show }) {
  console.log(product.name);
  const handleDelete = (id) => {
    deleteA(parseInt(id));
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
        <div className="active"></div>
      </div>
      <div className="buttons">
        <button onClick={() => handleDelete(product.id)}>DELETE</button>
        <button onClick={(id) => show(product.id)}>EDIT</button>
      </div>
    </>
  );
}
export default Product;
