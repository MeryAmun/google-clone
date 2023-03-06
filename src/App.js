import './App.css';
import { Home, SearchPage } from './pages';
import {Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      google

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/search' element={<SearchPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
