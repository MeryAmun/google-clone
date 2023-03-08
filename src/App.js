import './App.css';
import { Home, SearchPage } from './pages';
import {Routes,Route } from 'react-router-dom'
import { Footer } from './components';

function App() {
  return (
    <div className="app">
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/search' element={<SearchPage/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
