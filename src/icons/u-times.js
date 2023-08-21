import React from 'react';
import PropTypes from 'prop-types';

const UTimes = props => {
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
      <path d="M13.41 12l4.3-4.29a1.004 1.004 0 10-1.42-1.42L12 10.59l-4.29-4.3a1.004 1.004 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42.998.998 0 001.42 0l4.29-4.3 4.29 4.3a.999.999 0 001.42 0 1 1 0 000-1.42L13.41 12z"></path>
    </svg>
  );
};

UTimes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTimes.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTimes;
