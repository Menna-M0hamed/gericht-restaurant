import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import { images } from '../constants';
import SubHeading from './SubHeading/SubHeading.js';

const FindUs = () => (
  <section className="app_bg" id="contact">
    <Container className="py-5 flex-center">
      <Row className="flex-center">
        <Col lg="6" md="10" sm="10">
          <SubHeading title="Contact" />
          <h2 className="headtext">Find Us</h2>
          <p className="paragraph">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <p className="title mt-2" style={{ color: '#DCCA87' }}>Opening Hours</p>
          <p className="paragraph">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="paragraph">Sat - Sun: 10:00 am - 03:00 am</p>
          <button type="button" className="custom__button mb-5">Visit Us</button>
        </Col>
        <Col lg="5" md="10" sm="10" className="flex-center"><img src={images.findus} alt="finus_img" style={{ width: '90%' }} /></Col>
      </Row>
    </Container>
  </section>
);

export default FindUs;
