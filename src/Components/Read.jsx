import Product from "./Product";

function Read({ products, deleteA, show }) {
  return (
    <>
      <div className="read">
        <ul className="product">
          {products.map((product) => (
            <Product
              //   className="productOne"
              key={product.id}
              product={product}
              deleteA={deleteA}
              show={show}
            ></Product>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Read;
