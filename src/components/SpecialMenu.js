import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import SubHeading from './SubHeading/SubHeading.js';
import MenuItemm from './MenuItem';
import { data, images } from '../constants';

const SpecialMenu = () => (
  <section className="black_bg flex-center menu" style={{ minHeight: '50vh' }} id="menu">
    <Container className="py-5">
      <Row className="py-5">
        <Col lg="12" md="12" sm="12" className="text-center">
          <SubHeading title="Menu that fits your palatte" />
          <h2 className="headtext">Today&apos;s Special</h2>
        </Col>
      </Row>
      <Row className="flex-center align-items-start">
        <Col lg="4" md="12" sm="10">
          <div>
            <p className="menu-heading py-5 text-center">Coffee</p>
            {data.wines.map((wine, index) => {
              const { title, price, tags } = wine;
              return (
                <MenuItemm key={index} title={title} price={price} tags={tags} />
              );
            })}
          </div>
        </Col>
        <Col lg="4" md="10" sm="12" className="flex-center align-self-center my-4"><img src={images.menu} alt="menu__img" style={{ maxWidth: '280px' }} /></Col>
        <Col lg="4" md="12" sm="10">
          <div>
            <p className="menu-heading py-5 text-center">Cocktails</p>
            {data.cocktails.map((cocktail, index) => {
              const { title, price, tags } = cocktail;
              return (
                <MenuItemm key={index} title={title} price={price} tags={tags} />
              );
            })}
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" sm="12" className="text-center py-2">
          <button type="button" className="custom__button">Explore Menu</button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default SpecialMenu;
