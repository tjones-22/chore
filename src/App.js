
import './App.css';
import NavBar from './navbar';
import Welcome from './Welcome';
import CurrentKids from './current_kids';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Welcome />
      <CurrentKids />
    </div>
  );
}

export default App;
