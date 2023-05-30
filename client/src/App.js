import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages';
import { NavBar } from './components';

function App() {
  return (
    <div className="App">

    <header>
      <NavBar/>
    </header>
      <main>
        <h1>test</h1>
        <Routes>
          {/* <Route path='/' element={<LandingPage />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
