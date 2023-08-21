import React from 'react';
import PropTypes from 'prop-types';

const UGraduationCap = props => {
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
      <path d="M21.49 10.19l-1-.55-9-5h-.11a1.06 1.06 0 00-.19-.06h-.37a1.17 1.17 0 00-.2.06h-.11l-9 5a1 1 0 000 1.74L4 12.76v4.74a3 3 0 003 3h8a3 3 0 003-3v-4.74l2-1.12v2.86a1 1 0 002 0v-3.44a1 1 0 00-.51-.87zM16 17.5a1 1 0 01-1 1H7a1 1 0 01-1-1v-3.63l4.51 2.5.15.06h.09c.083.01.167.01.25 0 .083.01.167.01.25 0h.09a.47.47 0 00.15-.06l4.51-2.5v3.63zm-5-3.14L4.06 10.5 11 6.64l6.94 3.86L11 14.36z"></path>
    </svg>
  );
};

UGraduationCap.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGraduationCap.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGraduationCap;
