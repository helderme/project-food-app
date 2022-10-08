import AppProvider from './context/AppProvider';
import Cart from './pages/Cart';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Cart />
        <Products />
      </AppProvider>
    </div>
  );
}

export default App;
