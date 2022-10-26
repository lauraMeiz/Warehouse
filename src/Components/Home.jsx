import chrysanthemum from "../img/chrysanthemum.jpg";
import rose from "../img/rose.jpg";
import sunflower from "../img/sunflower.jpg";
function Home() {
  return (
    <>
      <div className="foto-row">
        {/* <img src={chrysanthemum} alt="chrysanthemum" /> */}
        <img src={sunflower} alt="sunflower" />
        <div className="home-description">
          {" "}
          “If we could see the miracle of a single flower clearly our whole life
          would change.” – Buddha
        </div>
        {/* <img src={rose} alt="rose" /> */}
      </div>
    </>
  );
}
export default Home;
