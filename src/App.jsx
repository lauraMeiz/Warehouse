import { useEffect, useState } from "react";
import getNewId from "./Common/id";
import rand from "./Common/rand";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Read from "./Components/Read";
import View from "./Components/View";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./Crud.scss";
import Home from "./Components/Home";

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
  };

  const getProduct = () => {
    const pro = modal !== 0 ? modal : view;
    return products.filter((p) => p.id === pro)[0];
  };

  const create = (data) => {
    let priceHistory = [];
    let quantityHistory = [];
    let dateHistory = [];
    let date = new Date().toLocaleString();
    const product = {
      id: getNewId(),
      name: data.name,
      EAN: rand(400000000000, 499999999999),
      type: data.type,
      weight: data.weight,
      color: data.color,
      isActive: data.isActive,
      price: data.price,
      quantity: data.quantity,

      priceHistory: [...priceHistory, data.price],
      quantityHistory: [...quantityHistory, data.quantity],
      dateHistory: [...dateHistory, date],
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
        productsCopy[i].weight = data.weight;
        productsCopy[i].price = data.price;
        productsCopy[i].quantity = data.quantity;
        productsCopy[i].date = data.date;
        productsCopy[i].dateHistory = [
          ...productsCopy[i].dateHistory,
          data.date,
        ];
        productsCopy[i].priceHistory = [
          ...productsCopy[i].priceHistory,
          data.price,
        ];
        productsCopy[i].quantityHistory = [
          ...productsCopy[i].quantityHistory,
          data.quantity,
        ];
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
      <BrowserRouter>
        <div>
          <div className="list">
            <Link
              style={{
                textDecoration: "none",
                padding: "10px",
                backgroundColor: "rgb(90, 90, 115)",
                color: "white",
                marginRight: "20px",
              }}
              to="/registration"
            >
              Registration
            </Link>
            <Link
              style={{
                textDecoration: "none",
                padding: "10px",
                backgroundColor: "rgb(90, 90, 115)",
                color: "white",
                width: "100px",
                textAlign: "center",
              }}
              to="/list"
            >
              List
            </Link>

            <Link
              style={{
                textDecoration: "none",
                padding: "10px",
                backgroundColor: "rgb(90, 90, 115)",
                color: "white",
                width: "100px",
                textAlign: "center",
                marginLeft: "20px",
              }}
              to="/Warehouse"
            >
              HOME
            </Link>
          </div>
          <Routes>
            <Route path="/Warehouse" element={<Home></Home>}></Route>

            <Route
              path="/registration"
              element={<Create create={create}></Create>}
            ></Route>

            <Route
              path="/list"
              element={
                <Read
                  deleteA={deleteA}
                  products={products}
                  getView={getView}
                  show={show}
                ></Read>
              }
            ></Route>
          </Routes>

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
      </BrowserRouter>
    </div>
  );
}

export default App;
