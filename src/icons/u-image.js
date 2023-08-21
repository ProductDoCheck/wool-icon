import React from 'react';
import PropTypes from 'prop-types';

const UImage = props => {
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
      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zM5 18a1 1 0 01-1-1v-2.42l3.3-3.29a1 1 0 011.4 0L15.41 18H5zm15-1a1 1 0 01-1 1h-.77l-3.81-3.83.88-.88a1 1 0 011.4 0l3.3 3.29V17zm0-3.24l-1.88-1.87a3.06 3.06 0 00-4.24 0l-.88.88-2.88-2.88a3.06 3.06 0 00-4.24 0L4 11.76V7a1 1 0 011-1h14a1 1 0 011 1v6.76z"></path>
    </svg>
  );
};

UImage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImage.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImage;
