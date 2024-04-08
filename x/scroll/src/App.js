
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Addbolg from './Components/Addbolg';
import Api from './Components/Api';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Api/>}/>
        <Route path='/add' element={<Addbolg/>}>
          Add
        </Route>
      </Routes>
    </div>
  );
}

export default App;
