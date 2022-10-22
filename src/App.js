import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Individual from './components/Individual';
import Organization from './components/Organization';
import Loans from './components/Loans';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/individual" element={<Individual/>}/>
          <Route path="/organization" element={<Organization/>}/>
          <Route path="/loans" element={<Loans/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
