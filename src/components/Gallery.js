import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Col, Container, Row } from 'reactstrap';

import { images } from '../constants';
import SubHeading from './SubHeading/SubHeading.js';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <section className="black_bg">
      <Container className="py-5">
        <Row className="flex-center">
          <Col lg="6" md="11" sm="10">
            <SubHeading title="Instagram" />
            <h2 className="headtext">Photo Gallery</h2>
            <p className="paragraph" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <button type="button" className="custom__button">View More</button>
          </Col>
          <Col lg="6" md="10" sm="10" className="app__gallery-images">
            <div className="app__gallery-images_container" ref={scrollRef}>
              {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
                <div className="app__gallery-images_card flex-center" key={index}>
                  <img src={image} alt="gallery_image" />
                  <BsInstagram className="gallery__image-icon" />
                </div>
              ))}
            </div>
            <div className="app__gallery-images_arrows">
              <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
              <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
