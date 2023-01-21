import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import MenuItemDetails from './components/Menu/MenuItemDetails';

// Placeholders (to avoid Errors)
import Coupons from './pages/Coupons';
import Customers from './pages/Customers';

function App() {
  const API = process.env.REACT_APP_API_URL;

  const [pizzaData, setPizzaData] = useState([]);

  useEffect(() => {
    try {
      fetch(`${API}/pizzas`)
        .then((res) => res.json())
        .then(data => {
          console.log(data)
          setPizzaData(data);
        });   
    } catch (err){
      console.log(err)
    }
  }, [API])

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu pizzaData={pizzaData} />} />
          <Route path="/menu/:id" element={<MenuItemDetails />} />
          <Route path="/menu/:id/customers" element={<Customers />} />
          <Route path="/menu/:id/coupons" element={<Coupons />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
