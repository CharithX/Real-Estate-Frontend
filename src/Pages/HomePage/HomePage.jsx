import "./HomePage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="tittle">
            Luxary Real Estate For Everyone & Get Your Dream Place
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            dolorem quia at perspiciatis adipisci cumque aspernatur quasi soluta
            quis nemo?
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experince</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage