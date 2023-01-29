import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Products from './components/products/Products'
import { Routes,Route } from "react-router-dom";
import Services from './components/Services';
import Vagetables from './components/products/Vagetables';
import Fruits from './components/products/Fruits';
import Meats from './components/products/Meats';

function App() {
  return (
    <div className='App'>
      <Navigation />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Services' element={<Services/>}/>
          <Route path='Products' element={<Products/>}>
              <Route path='Vagetables' element={<Vagetables/>}/>
              <Route path='Fruits' element={<Fruits/>}/>
              <Route path='Meats' element={<Meats/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
