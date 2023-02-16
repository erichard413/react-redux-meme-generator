import logo from './logo.svg';
import './App.css';
import Memes from './Memes';
import MemeForm from './MemeForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MemeForm />
        <Memes />
      </header>
    </div>
  );
}

export default App;
