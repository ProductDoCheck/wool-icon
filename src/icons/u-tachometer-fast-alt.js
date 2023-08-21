import React from 'react';
import PropTypes from 'prop-types';

const UTachometerFastAlt = props => {
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
      <path d="M12 5a10 10 0 00-8.66 15 1.004 1.004 0 001.74-1A7.92 7.92 0 014 15a8 8 0 1114.93 4 1 1 0 101.73 1A10 10 0 0012 5zm2.84 5.76l-1.55 1.54A2.91 2.91 0 0012 12a3 3 0 103 3 2.9 2.9 0 00-.3-1.28l1.55-1.54a1.002 1.002 0 00-.705-1.71 1 1 0 00-.705.29zM12 16a1 1 0 010-2 1 1 0 01.7.28 1.002 1.002 0 01.3.72 1 1 0 01-1 1z"></path>
    </svg>
  );
};

UTachometerFastAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTachometerFastAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTachometerFastAlt;
