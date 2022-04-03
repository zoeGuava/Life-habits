import './App.css';
import HomePage from './pages';
import GetImg from './components/_ImgurApi';

function App() {
  return (
    <div className="App">
      <h2>Diet and Exercise record</h2>
      <HomePage />
      <GetImg />
    </div>
  );
}
export default App;
