import React from 'react';
import PropTypes from 'prop-types';

const UHeart = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M20.16 5A6.29 6.29 0 0012 4.36a6.27 6.27 0 00-8.16 9.48l6.21 6.22a2.78 2.78 0 003.9 0l6.21-6.22a6.27 6.27 0 000-8.84zm-1.41 7.46l-6.21 6.21a.76.76 0 01-1.08 0l-6.21-6.24a4.29 4.29 0 010-6 4.27 4.27 0 016 0 .999.999 0 001.42 0 4.27 4.27 0 016 0 4.29 4.29 0 01.08 6v.03z"></path>
    </svg>
  );
};

UHeart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHeart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHeart;
