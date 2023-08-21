import React from 'react';
import PropTypes from 'prop-types';

const UTablets = props => {
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
      <path d="M20.54 3.46a5 5 0 10-7.062 7.08 5 5 0 007.062-7.08zm-5.66 1.42A3 3 0 0117 4a3 3 0 011.28.3l-4 4a3 3 0 01.6-3.42zm4.24 4.24a3 3 0 01-3.4.58l4-4a3 3 0 01-.6 3.42zM8 10a5.93 5.93 0 00-4.21 1.73A6 6 0 008 22a6 6 0 004.14-1.66l.12-.08c.021-.038.044-.075.07-.11A6 6 0 008 10zm-2.83 8.83A4 4 0 014.56 14L10 19.44a4 4 0 01-4.83-.61zm6.27-.83L6 12.56A4 4 0 018 12a4 4 0 013.44 6z"></path>
    </svg>
  );
};

UTablets.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTablets.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTablets;
