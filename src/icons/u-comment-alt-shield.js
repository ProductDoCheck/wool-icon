import React from 'react';
import PropTypes from 'prop-types';

const UCommentAltShield = props => {
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
      <path d="M6.57 12a1 1 0 00.58-.19l1.62-1.16A4.56 4.56 0 0010.68 7V3.63a1.001 1.001 0 00-.767-.965 1 1 0 00-.443-.005 3 3 0 01-2.33-.48 1 1 0 00-1.14 0 3 3 0 01-2.33.48 1 1 0 00-1.2 1V7a4.55 4.55 0 001.9 3.7L6 11.81a.94.94 0 00.57.19zM4.46 7V4.72a5.16 5.16 0 002.11-.55 5.12 5.12 0 002.11.55V7a2.57 2.57 0 01-1.07 2l-1 .74L5.53 9a2.57 2.57 0 01-1.07-2zm14.08-1h-5a1 1 0 100 2h5a1 1 0 011 1v9.72L18 17.27a.94.94 0 00-.68-.27H8.54a1 1 0 01-1-1v-1a1 1 0 10-2 0v1a3 3 0 003 3h8.36l3 2.73a1 1 0 001.08.19 1 1 0 00.59-.92V9a3.001 3.001 0 00-3.03-3z"></path>
    </svg>
  );
};

UCommentAltShield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentAltShield.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentAltShield;
