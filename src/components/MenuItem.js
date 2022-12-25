import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const MenuItem = ({ title, price, tags }) => (
  <section>
    <Container className="py-3 px-0 mx-0">
      <Row>
        <Col className="title" style={{ color: '#DCCA87', width: '100%' }}>{title}</Col>
        <Col>
          <Row className="flex-center justify-content-end">
            <div style={{ backgroundColor: '#DCCA87', height: '1px', width: '40%' }} />
            <div className="title my-0" style={{ width: '40%' }}>{price}</div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" sm="12" className="paragraph my-0" style={{ color: '#AAAAAA' }}>{tags}</Col>
      </Row>
    </Container>
  </section>
);

export default MenuItem;

