import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { images } from '../constants';
import SubHeading from './SubHeading/SubHeading.js';

const Chef = () => (
  <section className="app_bg flex-center chef" style={{ minHeight: '50vh' }}>
    <Container className="py-5 flex-center">
      <Row className="flex-center justify-content-around">
        <Col lg="5" md="8" sm="9" className="py-5">
          <img src={images.chef} alt="chef_image" style={{ width: '100%' }} />
        </Col>
        <Col lg="6" md="10" sm="9" className="d-flex justify-content-start col">
          <SubHeading title="Chef's word" />
          <h2 className="headtext">What we believe in</h2>
          <div className="flex-center justify-content-start mt-5">
            <img src={images.quote} alt="quote_image" style={{ width: '45px', height: '40px' }} />
            <p className="paragraph my-0 mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . </p>
          </div>
          <p className="paragraph mt-2 mb-5"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
          <p className="paragraph2">Kevin Luo</p>
          <p className="paragraph mt-0 pb-5">Chef & Founder</p>
          <img src={images.sign} alt="sign_image" style={{ minWidth: '180px', maxWidth: '250px' }} />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Chef;
