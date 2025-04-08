import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';

const Home = () => {
  return (
    <Container className='home-container'>
      <Row>
        <Col xs={12} sm={2}>Column 1</Col>
        <Col xs={12} sm={8}>Column 2</Col>
        <Col xs={12} sm={2}>Column 3</Col>
      </Row>
    </Container>
  );
};

export default Home;
