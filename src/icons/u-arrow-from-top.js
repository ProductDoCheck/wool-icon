import React from 'react';
import PropTypes from 'prop-types';

const UArrowFromTop = props => {
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
      <path d="M15.29 16.29L13 18.59V7a1 1 0 00-2 0v11.59l-2.29-2.3a1.004 1.004 0 10-1.42 1.42l4 4a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l4-4a1.004 1.004 0 10-1.42-1.42zM19 2H5a1 1 0 000 2h14a1 1 0 100-2z"></path>
    </svg>
  );
};

UArrowFromTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowFromTop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowFromTop;
