import './App.css';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import { Canva, ControlMenu } from './views';

function App() {
  return (
    <Row className="App">
      <Col lg={10}>
        <ControlMenu />
      </Col>
      <Col lg={10}>
        <Canva />
      </Col>
    </Row>
  );
}

export default App;
