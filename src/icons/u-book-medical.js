import React from 'react';
import PropTypes from 'prop-types';

const UBookMedical = props => {
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
      <path d="M13 9h-2V7a1 1 0 00-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 000-2zm5 6V5a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3zM4 15V5a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1zm17-9a1 1 0 00-1 1v10a3 3 0 01-3 3H7a1 1 0 000 2h10a5 5 0 005-5V7a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UBookMedical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBookMedical.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBookMedical;
