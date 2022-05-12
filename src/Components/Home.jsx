import chrysanthemum from "../img/chrysanthemum.jpg";
import rose from "../img/rose.jpg";
import sunflower from "../img/sunflower.jpg";
function Home() {
  return (
    <>
      <div className="foto-row">
        <img src={chrysanthemum} alt="chrysanthemum" />
        <img src={rose} alt="rose" />
        <img src={sunflower} alt="sunflower" />
      </div>
    </>
  );
}
export default Home;
