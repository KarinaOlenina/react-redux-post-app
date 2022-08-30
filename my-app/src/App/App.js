
import './App.css';
import airBalloon from "../assets/post.jpeg";
import Likes from "../components/Likes";
import Title from "../components/Title";
import Comments from "../components/Comments";




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
              <Comments/>
          </div>
        </div>
      </div>
  );
}

export default App;