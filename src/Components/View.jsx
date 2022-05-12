import tulpe from "../img/tulip.jpg";
import rose from "../img/rose.jpg";
import snapdragon from "../img/snapdragon.jpg";
import chrysanthemum from "../img/chrysanthemum.jpg";
import geranium from "../img/geranium.jpg";
import sunflower from "../img/sunflower.jpg";
import petunia from "../img/petunia.jpg";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function View({ cancel, products, product }) {
  const handleCancel = () => {
    cancel();
  };

  const getPrice = () => {
    let data = JSON.parse(localStorage.getItem("products"));

    const arr = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].name === products.name) {
        for (let j = 0; j < data[i].priceHistory.length; j++) {
          const k = parseInt(data[i].priceHistory[j]);

          arr.push(k);
        }
      }
    }
    console.log("price", arr);
    return arr.length < 5 ? arr : arr.slice(-5);
  };

  const getQuantity = () => {
    let data = JSON.parse(localStorage.getItem("products"));

    const arr2 = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].name === products.name) {
        for (let j = 0; j < data[i].quantityHistory.length; j++) {
          const k = parseInt(data[i].quantityHistory[j]);

          arr2.push(k);
        }
      }
    }

    console.log("quantity", arr2);
    return arr2.length < 5 ? arr2 : arr2.slice(-5);
  };

  const getDate = () => {
    let data = JSON.parse(localStorage.getItem("products"));
    console.log(data);

    const arr = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].name === products.name) {
        for (let j = 0; j < data[i].dateHistory.length; j++) {
          const k = data[i].dateHistory[j];

          arr.push(k);
        }
      }
    }
    console.log(arr);
    return arr;
  };
  const options = {
    accessibility: {
      enabled: false,
    },
    title: {
      text: "Price History",
    },
    series: [
      {
        name: "Price",
        data: getPrice(),
      },
    ],
    chart: {
      style: {
        height: 250,
        type: "line",
        fontSize: "20px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: getDate(),
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br/>",
      pointFormat: "{point.category}: {point.y}",
    },
  };
  const options2 = {
    accessibility: {
      enabled: false,
    },
    title: {
      text: "Quantity History",
    },
    series: [
      {
        name: "Quantity",
        data: getQuantity(),
      },
    ],
    chart: {
      style: {
        height: 250,
        type: "line",
        fontSize: "20px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: getDate(),
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br/>",
      pointFormat: "{point.category}: {point.y}",
    },
  };

  return (
    <>
      <div className="modal">
        <div className="view">
          {/* <h2>View</h2> */}

          {/* <div className="form">
            <div className="input"> */}
          {products.name === "tulips" && <img src={tulpe} alt="tulip"></img>}
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

          <div className="view-description">
            <label> EAN: {products.EAN}</label>
            <label>
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
          </div>
          <div className="graf">
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
            ></HighchartsReact>
            <HighchartsReact
              highcharts={Highcharts}
              options={options2}
            ></HighchartsReact>
          </div>
          {/* <div className="buttons"> */}
          <button className="cancelB" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
      {/* </div> */}
      {/* </div>
      </div> */}
    </>
  );
}
export default View;
