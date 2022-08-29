import store from './redux/store'

import './App.css';
import Likes from "./Likes";
import airBalloon from "./assets/post.jpeg";


function App() {
  return (
      <div className="App">
        <div className="wrap">
          <div className="card">
            <div className="card-image">
              <img src={airBalloon} alt="Air balloon"/>
                <Likes store={store}/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;