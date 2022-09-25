import logo from './logo.svg';
import './App.css';
import { Route,Routes} from "react-router-dom";
import RegAndLog from './pages/RegisterAndLogin';
import Home from './pages/Home';

function App() {
  
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<RegAndLog/>}/>
      <Route path='/Home' element={<Home/>}/>

    </Routes>
    </div>
  );
}

export default App;
