import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';

//Components 
import Store from './components/Store';
import ProductsDetails from './components/ProductsDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

//Context 
import ProductContext from './context/ProductContext';
import  CrtContext  from './context/CartContext';

function App() {
  return (
    <ProductContext>
      <CrtContext>
        <Navbar />
        <Routes>
          <Route path='/products' element={ <Store /> }/>
          <Route path='/products/:id' element={ <ProductsDetails /> } />
          <Route path='/*' element={ <Navigate to='/products' />} />
          <Route path='/Cart' element={ <ShopCart /> } />
        </Routes>
      </CrtContext>
    </ProductContext>
  );
}

export default App;
