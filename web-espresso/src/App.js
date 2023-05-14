import './App.css';
import Score from './component/Score';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

function App() {
  return (
    <div className="App">
      <Score text={"sugar"} top={110} imgMargin={100}/>
      <Score text={"acidity"} top={70} imgMargin={100}/>
      <Score text={"bitter"} top={70} imgMargin={120}/>
      <div>
        <button className='no_outline_btn'>
          <img src={process.env.PUBLIC_URL + `/images/submit_button.png`}/>
        </button>
      </div>
    </div>
  );
}

export default App;
