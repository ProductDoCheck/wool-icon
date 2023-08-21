import React from 'react';
import PropTypes from 'prop-types';

const UAwardAlt = props => {
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
      <path d="M12 1a7 7 0 00-5 11.89V22a1 1 0 001.45.89L12 21.12l3.55 1.77a1 1 0 00.98-.04A1 1 0 0017 22v-9.11A7 7 0 0012 1zm3 19.38l-2.55-1.27a1 1 0 00-.9 0L9 20.38v-6.06a7 7 0 002 .6V16a1 1 0 002 0v-1.08a7 7 0 002-.6v6.06zM12 13a5 5 0 110-9.999A5 5 0 0112 13z"></path>
    </svg>
  );
};

UAwardAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAwardAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAwardAlt;
