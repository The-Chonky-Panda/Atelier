/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageNavButton = (props) => (
    <div>
      <FontAwesomeIcon
        className='gallery-nav'
        icon={props.icon}
        size='2x'
        onClick={() => props.onClick(props.direction)} />
    </div>
);

export default ImageNavButton;