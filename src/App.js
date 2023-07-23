import './CSS/chore-card.css'
import './CSS/App.css';
import NavBar from './Components/navbar';
import Welcome from './Components/Welcome';
import CurrentKids from './Components/current_kids';

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
