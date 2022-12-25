import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { images } from '../constants';
import SubHeading from './SubHeading/SubHeading.js';

const Header = () => (
  <section className="black_bg flex-center header" style={{ minHeight: '50vh' }} id="home">
    <Container className="flex-center py-5 container">
      <Row className="justify-content-around">
        <Col lg="5" md="6" sm="12" className="d-flex align-items-center justify-content-start">
          <div>
            <SubHeading title="Chase the new flavour" />
            <h1 className="header-h1">The Key To Fine Dining</h1>
            <p className="paragraph">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <button type="button" className="custom__button">Explore Menu</button>
          </div>
        </Col>
        <Col lg="5" md="6" sm="11" className="flex-center">
          <img src={images.welcome} alt="header_img" style={{ width: '100%' }} />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Header;
