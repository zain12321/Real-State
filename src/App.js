import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Container } from './components/Home/styles';
import Details from './pages/Details';
import Section from './pages/Section';
function App() {
  return (
    <Container>
    <Router>
    <Routes>
   <Route path='/' element={<Home/>}/>
    <Route  path='section' element={<Section/>}/>
    <Route  path='details' element={<Details/>}/>
    </Routes>
    </Router>
        
    </Container>
  );
}

export default App;