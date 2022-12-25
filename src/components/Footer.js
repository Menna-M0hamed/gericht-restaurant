import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../constants';

const Footer = () => (
  <section className="app_bg flex-center footer" style={{ minHeight: '50vh' }}>
    <Container className="app_bg">
      <Row className="flex-center text-center">
        <Col lg="4" md="7" sm="10" className="py-5">
          <h2 className="paragraph2">Contact Us</h2>
          <p className="paragraph">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="paragraph">+1 212-344-1230</p>
          <p className="paragraph">+1 212-555-1230</p>
          <p className="paragraph mb-0">+1 212-225-1230</p>
        </Col>
        <Col lg="4" md="7" sm="10" className="py-5">
          <img src={images.gericht} alt="footer_logo" style={{ width: '80%' }} />
          <p className="paragraph">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
          <img src={images.spoon} className="spoon__img mt-3 mb-2" style={{ width: '45px' }} />
          <div className="icons">
            <FiFacebook />
            <FiTwitter className="mx-3" />
            <FiInstagram />
          </div>
        </Col>
        <Col lg="4" md="7" sm="10" className="py-5">
          <h2 className="paragraph2">Working Hours</h2>
          <p className="paragraph">Monday-Friday:</p>
          <p className="paragraph">08:00 am - 12:00 am</p>
          <p className="paragraph">Saturday-Sunday:</p>
          <p className="paragraph">07:00 am - 11:00 pm</p>
        </Col>
      </Row>
      <Row className="flex-center">
        <Col lg="12" md="10" sm="10" className="text-center pb-4">
          <p className="paragraph">2022 Gericht. All Rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Footer;
