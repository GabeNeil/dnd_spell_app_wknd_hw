import logo from './logo.svg';
import './App.css';
import SpellContainer from './containers/SpellContainer.js'


function App() {
  return (
    <body>
      <header>
        <h1>Dungeons and Dragons 5th Edition</h1>
        <h2>Gabe's Spell List</h2>
      </header>
    <div className="App">
      <SpellContainer />
    </div>
    </body>
  );
}

export default App;
