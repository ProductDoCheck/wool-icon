import React from 'react';
import PropTypes from 'prop-types';

const UHeartMedical = props => {
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
      <path d="M14 11h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 000-2zm6.16-6A6.29 6.29 0 0012 4.41a6.27 6.27 0 00-8.16 9.48l6 6.05a3 3 0 004.24 0l6-6.05A6.27 6.27 0 0020.16 5zm-1.41 7.46l-6 6a1.001 1.001 0 01-1.42 0l-6-6a4.29 4.29 0 010-6 4.27 4.27 0 016 0 .999.999 0 001.42 0 4.27 4.27 0 016 0 4.29 4.29 0 010 6.02v-.02z"></path>
    </svg>
  );
};

UHeartMedical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHeartMedical.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHeartMedical;
