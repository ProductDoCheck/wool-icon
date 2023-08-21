import React from 'react';
import PropTypes from 'prop-types';

const UTemperatureEmpty = props => {
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
      <path d="M12 15a2 2 0 100 4 2 2 0 000-4zm4.5-2V5.5a4.5 4.5 0 10-9 0V13a6 6 0 003.21 9.83A7 7 0 0012 23a6 6 0 004.5-10zm-2 7.07a4.009 4.009 0 11-5.32-6 1 1 0 00.3-.71V5.5a2.5 2.5 0 115 0v7.94a1.001 1.001 0 00.3.71 4 4 0 01-.28 6v-.08z"></path>
    </svg>
  );
};

UTemperatureEmpty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTemperatureEmpty.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTemperatureEmpty;
