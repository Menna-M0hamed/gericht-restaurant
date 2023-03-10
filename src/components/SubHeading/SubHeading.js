import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div className="mb-3">
    <p className="title">{title}</p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
