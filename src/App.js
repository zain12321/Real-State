import styled from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
function App() {
  return (
    <Container>
        <Header/>
        <Section/>
        <Footer/>
    </Container>
  );
}

export default App;

const Container = styled.div`
`