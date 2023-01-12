import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


// Components
import Navbar from './components/Navbar';
import Menu from './components/Menu';

function App() {
  const API = process.env.REACT_APP_API_URL;

  const [pizzaData, setPizzaData] = useState([]);

  useEffect(() => {
    try {
      fetch(`${API}/pizza`)
        .then((res) => res.json())
        .then(data => {
          console.log(data)
          setPizzaData(data);
        });   
    } catch (err){
      console.log(err)
    }
  }, [])

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/menu" element={<Menu pizzaData={pizzaData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
