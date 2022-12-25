import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { images } from '../constants';

const AboutUs = () => (
  <section className="app_bg about-us flex-center relative about" style={{ minHeight: '50vh' }} id="about">
    <div className="absolute flex-center">
      <img src={images.G} alt="G_overlay" className="g-img" />
    </div>
    <Container className="py-5 flex-center relative">
      <Row className="flex-center">
        <Col lg="4" md="5" sm="12" className="flex-center">
          <div style={{ textAlign: 'right' }}>
            <h2 className="headtext">about us</h2>
            <img src={images.spoon} alt="spoon_image" className="spoon__img" />
            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            <button type="button" className="custom__button">Explore Menu</button>
          </div>
        </Col>
        <Col lg="2" md="2" sm="10" className="flex-center">
          <img src={images.knife} alt="about_knife" style={{ maxHeight: '900px' }} />
        </Col>
        <Col lg="4" md="5" sm="12" className="flex-center">
          <div>
            <h2 className="headtext">our history</h2>
            <img src={images.spoon} alt="spoon_image" className="spoon__img" />
            <p className="paragraph">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
            <button type="button" className="custom__button">Explore Menu</button>
          </div>
        </Col>
      </Row>
    </Container>
  </section>

);

export default AboutUs;
