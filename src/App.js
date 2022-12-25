import React from 'react';

import { Navbar, Header, AboutUs, SpecialMenu, Chef, Video, Laurels, Gallery, FindUs, NewsLetter, Footer } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Video />
    <Laurels />
    <Gallery />
    <FindUs />
    <NewsLetter />
    <Footer />
  </div>
);

export default App;
