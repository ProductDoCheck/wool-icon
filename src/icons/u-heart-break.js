import React from 'react';
import PropTypes from 'prop-types';

const UHeartBreak = props => {
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
      <path d="M20.16 4.61A6.27 6.27 0 0012 4a6.27 6.27 0 00-8.16 9.48l7.45 7.46a1 1 0 001.42 0l7.45-7.46a6.273 6.273 0 000-8.87zm-1.41 7.45L12 18.81l-6.75-6.75a4.26 4.26 0 015.54-6.45l-1.71 4a1 1 0 000 .83 1 1 0 00.65.53l2.77.7-1.4 2.89A.999.999 0 0012 16a1 1 0 00.9-.56l2-4a1 1 0 00-.276-1.207 1.051 1.051 0 00-.394-.203l-2.83-.71 1.45-3.39a4.26 4.26 0 115.92 6.13h-.02z"></path>
    </svg>
  );
};

UHeartBreak.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHeartBreak.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHeartBreak;
