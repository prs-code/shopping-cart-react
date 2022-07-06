import './App.css';
//Components
import Store from './components/Store';

import ProductContext from './context/ProductContext';//Context

function App() {
  return (
    <ProductContext>
      <Store />
    </ProductContext>
  );
}

export default App;
