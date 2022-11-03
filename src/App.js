import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
function App() {
  return (
    <Container>
        <Header/>
        <Section/>
    </Container>
  );
}

export default App;

const Container = styled.div`
`