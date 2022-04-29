import { useEffect, useState } from "react";
import getNewId from "./Common/id";
import rand from "./Common/rand";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Read from "./Components/Read";
import View from "./Components/View";

import "./Crud.scss";

function App() {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(0);
  const [view, setView] = useState(0);

  useEffect(() => {
    let data = localStorage.getItem("products");
    if (null === data) {
      localStorage.setItem("products", JSON.stringify([]));
      setProducts([]);
    } else {
      setProducts(JSON.parse(data));
    }
  }, []);

  const cancel = () => {
    setModal(0);
    setView(0);
  };

  const show = (id) => {
    setModal(id);
  };
  const getView = (id) => {
    setView(id);

    console.log(products.id);
    // products.filter((f) => console.log(f.id));
    // setView(view);
  };
  const getProduct = () => {
    const betkas = modal !== 0 ? modal : view;
    return products.filter((p) => p.id === betkas)[0];
  };

  const create = (data) => {
    const product = {
      id: getNewId(),
      name: data.name,
      EAN: rand(4000000000000, 49999999999999),
      type: data.type,
      weight: data.weight,
      color: data.color,
      isActive: data.isActive,
    };
    // localStorage logic
    const newData = [...products, product];
    localStorage.setItem("products", JSON.stringify(newData));
    //

    setProducts((products) => [...products, product]);
  };

  const edit = (data) => {
    //LocalStorage logic

    const productsCopy = [...products];
    productsCopy.forEach((p, i) => {
      if (p.id === modal) {
        productsCopy[i].name = data.name;
        productsCopy[i].type = data.type;
        productsCopy[i].EAN = data.EAN;
        productsCopy[i].color = data.color;
        productsCopy[i].isActive = data.isActive;
      }
    });
    localStorage.setItem("products", JSON.stringify(productsCopy));

    setProducts(productsCopy);

    cancel();
  };
  const deleteA = (id) => {
    // localStorage logic
    const newData = products.filter((p) => p.id !== id);
    localStorage.setItem("products", JSON.stringify(newData));
    //
    setProducts((products) => products.filter((p) => p.id !== id));
  };

  return (
    <div className="app">
      <header>Flower warehouse</header>
      <div>
        <Create create={create}></Create>
        <Read
          deleteA={deleteA}
          products={products}
          getView={getView}
          show={show}
        ></Read>

        {view ? (
          <View
            getView={getView}
            products={getProduct()}
            cancel={cancel}
          ></View>
        ) : null}
        {modal ? (
          <Edit edit={edit} products={getProduct()} cancel={cancel}></Edit>
        ) : null}
      </div>
    </div>
  );
}

export default App;
