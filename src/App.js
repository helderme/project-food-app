import AppProvider from './context/AppProvider';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Products />
      </AppProvider>
    </div>
  );
}

export default App;
