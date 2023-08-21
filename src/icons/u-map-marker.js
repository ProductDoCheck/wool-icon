import React from 'react';
import PropTypes from 'prop-types';

const UMapMarker = props => {
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
      <path d="M12 2a8 8 0 00-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 001.3 0C13 21.5 20 15.4 20 10a8 8 0 00-8-8zm0 17.65c-2.13-2-6-6.31-6-9.65a6 6 0 1112 0c0 3.34-3.87 7.66-6 9.65zM12 6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z"></path>
    </svg>
  );
};

UMapMarker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMapMarker.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMapMarker;
