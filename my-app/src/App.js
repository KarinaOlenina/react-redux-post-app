
import './App.css';
import airBalloon from "./assets/post.jpeg";
import Likes from "./Likes";
import Title from "./Title";




function App() {
  return (
      <div className="App">
        <div className="wrap">
          <div className="card">
            <div className="card-image">
              <img src={airBalloon} alt="Air balloon"/>
                <Title/>
                <Likes/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;