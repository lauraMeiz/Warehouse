import Product from "./Product";

function Read({ products, deleteA, show, getView }) {
  return (
    <>
      <div className="read-all">
        <div className="productTitle">
          {" "}
          <li className="ean">EAN</li>
          <li className="name">Name</li>
          <li>Type</li>
          <li>Color</li>
          <li>Weight</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Do it Active!</li>
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
      </div>
    </>
  );
}
export default Read;
