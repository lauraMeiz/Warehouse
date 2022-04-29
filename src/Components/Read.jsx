import Product from "./Product";

function Read({ products, deleteA, show, getView }) {
  return (
    <>
      <div className="productTitle">
        {" "}
        <li>EAN</li>
        <li>Name</li>
        <li>Type</li>
        <li>Color</li>
        <li>Weight</li>
        <li>Active</li>
        {/* <div className="active"></div> */}
      </div>
      <div className="read">
        <ul>
          {products.map((product) => (
            <Product
              //   className="productOne"
              key={product.id}
              product={product}
              deleteA={deleteA}
              show={show}
              getView={getView}
            ></Product>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Read;
