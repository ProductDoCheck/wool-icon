import React from 'react';
import PropTypes from 'prop-types';

const UTrafficLight = props => {
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
      <path d="M12 5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm10 3h-.54a6 6 0 001.54-4 1 1 0 00-1-1h-4.18a3 3 0 00-2.82-2H9a3 3 0 00-2.82 2H2a1 1 0 00-1 1 6 6 0 001.54 4H2a1 1 0 00-1 1 6 6 0 001.54 4H2a1 1 0 00-1 1 6 6 0 005.16 5.93A3 3 0 009 22.5h6a3 3 0 002.84-2.07A6 6 0 0023 14.5a1 1 0 00-1-1h-.54a6 6 0 001.54-4 1 1 0 00-1-1zM6 18.37a4 4 0 01-2.87-2.87H6v2.87zm0-5a4 4 0 01-2.87-2.87H6v2.87zm0-5a4.09 4.09 0 01-1.83-1 4.09 4.09 0 01-1-1.83H6v2.83zM16 19.5a1 1 0 01-1 1H9a1 1 0 01-1-1v-15a1 1 0 011-1h6a1 1 0 011 1v15zm3.83-2.17a4.09 4.09 0 01-1.83 1V15.5h2.87a4.09 4.09 0 01-1.04 1.83zm0-5a4.09 4.09 0 01-1.83 1V10.5h2.87a4.09 4.09 0 01-1.04 1.83zm0-5a4.09 4.09 0 01-1.83 1V5.5h2.87a4.09 4.09 0 01-1.04 1.83zM12 15.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0-5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
    </svg>
  );
};

UTrafficLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTrafficLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTrafficLight;
