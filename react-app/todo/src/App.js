// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Additems from './compouents/Additems';





function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/Additems' element={<Additems/>} />
      </Routes>
    </div>
  );
}

export default App;
