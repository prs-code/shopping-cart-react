import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';

//Components :
import Store from './components/Store';
import ProductsDetails from './components/ProductsDetails';

//Context :
import ProductContext from './context/ProductContext';

function App() {
  return (
    <ProductContext>
      <Routes>
        <Route path='/products' element={ <Store /> }/>
        <Route path='/products/:id' element={ <ProductsDetails /> } />
        <Route path='/*' element={ <Navigate to='/products' />} />
      </Routes>
    </ProductContext>
  );
}

export default App;
