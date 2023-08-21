import React from 'react';
import PropTypes from 'prop-types';

const UTextFields = props => {
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
      <path d="M16 6a1 1 0 00-1-1H3a1 1 0 000 2h5v11a1 1 0 102 0V7h5a1 1 0 001-1zm5 5h-6a1 1 0 000 2h2v5a1 1 0 002 0v-5h2a1 1 0 000-2z"></path>
    </svg>
  );
};

UTextFields.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTextFields.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTextFields;
