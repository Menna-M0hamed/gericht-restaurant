import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import SubHeading from './SubHeading/SubHeading.js';

const NewsLetter = () => (
  <section className="black_bg flex-center newsletter" style={{ minHeight: '50vh' }}>
    <Container className="gold-border flex-center my-5 py-5">
      <Row className="flex-center col">
        <Col lg="12" md="10" sm="10" className="text-center">
          <SubHeading title="Newsletter" />
          <h1 className="headtext pt-2">Subscribe To Our Newsletter</h1>
          <p className="paragraph">And never miss latest Updates!</p>
        </Col>
        <Col lg="12" md="10" sm="10" className="flex-center">
          <Row className="flex-center justify-content-around subscribe">
            <input type="email" placeholder="Enter your email address" />
            <button type="button" className="custom__button">Subscribe</button>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

export default NewsLetter;
