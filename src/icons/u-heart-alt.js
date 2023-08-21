import React from 'react';
import PropTypes from 'prop-types';

const UHeartAlt = props => {
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
      <path d="M20.16 4.61A6.27 6.27 0 0012 4a6.27 6.27 0 00-8.16 9.48l7.45 7.45a1.002 1.002 0 001.42 0l7.45-7.45a6.27 6.27 0 000-8.87zm-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 013-7.3 4.25 4.25 0 013 1.25 1 1 0 001.42 0 4.27 4.27 0 016 6.05h.08z"></path>
    </svg>
  );
};

UHeartAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHeartAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHeartAlt;
