import React from 'react';
import PropTypes from 'prop-types';

const UTumblrSquare = props => {
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
      <path d="M2 2v20h20V2H2zm11.57 15.85a3.4 3.4 0 01-3.75-3.33v-4.08H8.56V8.83A3.83 3.83 0 0011 5.47a.09.09 0 01.09-.09h1.82v3.17h2.5v1.89h-2.49v3.89a1.11 1.11 0 001.2 1.23 3 3 0 001-.22l.6 1.78a3.34 3.34 0 01-2.15.73z"></path>
    </svg>
  );
};

UTumblrSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTumblrSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTumblrSquare;
