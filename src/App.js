import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Browse from './components/Browse';
function App() {
  return (
    <div className="App">
    <Provider store={appStore}>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      
    </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
