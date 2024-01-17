import HomePage from './pages/HomePage';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CityPage from './pages/CityPage';

function App() {
  return (
    <>
    <BrowserRouter>
    < Container >
    <Routes>
    
    <Route path='/' element={ <HomePage/>} />
    <Route path='/result/:lon/:lat' element={ <CityPage/>} />
    
    
    </Routes>
    </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
