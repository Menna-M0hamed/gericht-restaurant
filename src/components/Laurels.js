import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import { images, data } from '../constants';
import SubHeading from './SubHeading/SubHeading.js';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <Container className="flex-center justify-content-start py-3">
    <Row className="flex-center justify-content-start">
      <Col lg="3" md="3" sm="3" style={{ width: '20%' }}>
        <img src={imgUrl} alt="awards" style={{ width: '50px', height: '50px' }} />
      </Col>
      <Col lg="8" md="8" sm="8" style={{ width: '80%' }}>
        <p className="title" style={{ color: '#DCCA87' }}>{title}</p>
        <p className="paragraph my-1">{subtitle}</p>
      </Col>
    </Row>
  </Container>
);

const Laurels = () => (
  <section className="app_bg laurels flex-center" style={{ minHeight: '50vh' }} id="awards">
    <Container className="py-5">
      <Row>
        <Col lg="10" md="10" sm="10">
          <SubHeading className="px-2" title="Awards & recognition" />
          <h2 className="headtext px-2 pb-3">Our Laurels</h2>
        </Col>
      </Row>
      <Row className="flex-center">
        <Col lg="6" md="10" sm="10">
          <div className="d-flex" style={{ flexWrap: 'wrap' }}>
            {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
          </div>
        </Col>
        <Col lg="5" md="10" sm="10" className="flex-center"><img src={images.laurels} alt="laurels_img" style={{ width: '100%' }} /></Col>
      </Row>
    </Container>
  </section>
);

export default Laurels;
