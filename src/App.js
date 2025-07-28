import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Browse from './components/Browse';
import Navbar from './components/Navbar';
import GptSearch from './components/GptSearch';

function App() {
  return (
    <div className="App">
    <Provider store={appStore}>

    <BrowserRouter>
   <Navbar/>
    <Routes>
       
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/gptsearch" element={<GptSearch/>} />
      
    </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
