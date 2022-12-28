import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Pricing from './pages/Pricing';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' exact element={<Home/>}/> */}
          <Route path='/Pricing' exact element={<Pricing/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
