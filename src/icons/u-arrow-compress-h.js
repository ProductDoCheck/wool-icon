import React from 'react';
import PropTypes from 'prop-types';

const UArrowCompressH = props => {
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
      <path d="M12 5a1 1 0 00-1 1v12a1 1 0 002 0V6a1 1 0 00-1-1zm-1.29 6.29l-2.5-2.5a1.004 1.004 0 00-1.42 1.42l.8.79H3a1 1 0 000 2h4.59l-.8.79a1 1 0 00.325 1.639 1 1 0 001.095-.219l2.5-2.5a1 1 0 00.21-.33.94.94 0 000-.76 1 1 0 00-.21-.33zM21 11h-4.59l.8-.79a1.005 1.005 0 00-1.42-1.42l-2.5 2.5a1.002 1.002 0 000 1.42l2.5 2.5a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-.8-.79H21a1 1 0 000-2z"></path>
    </svg>
  );
};

UArrowCompressH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowCompressH.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowCompressH;
