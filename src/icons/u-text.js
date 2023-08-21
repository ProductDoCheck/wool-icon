import React from 'react';
import PropTypes from 'prop-types';

const UText = props => {
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
      <path d="M17 6H7a1 1 0 000 2h4v9a1 1 0 002 0V8h4a1 1 0 100-2z"></path>
    </svg>
  );
};

UText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UText.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UText;
