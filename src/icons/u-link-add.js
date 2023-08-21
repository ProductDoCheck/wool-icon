import React from 'react';
import PropTypes from 'prop-types';

const ULinkAdd = props => {
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
      <path d="M12.11 15.39l-3.88 3.88a2.47 2.47 0 01-3.5 0 2.46 2.46 0 010-3.5l3.88-3.88a1.004 1.004 0 00-1.42-1.42l-3.88 3.89a4.48 4.48 0 006.33 6.33l3.89-3.88a1.004 1.004 0 10-1.42-1.42zm-3.28-.22a1 1 0 00.71.29 1 1 0 00.71-.29l4.92-4.92a1.004 1.004 0 10-1.42-1.42l-4.92 4.92a1 1 0 000 1.42zM21 18h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 102 0v-1h1a1 1 0 000-2zm-4.19-4.47l3.88-3.89a4.48 4.48 0 00-6.33-6.33l-3.89 3.88a1.005 1.005 0 00.71 1.714 1.004 1.004 0 00.71-.294l3.88-3.88a2.47 2.47 0 013.5 0 2.46 2.46 0 010 3.5l-3.88 3.88a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219z"></path>
    </svg>
  );
};

ULinkAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULinkAdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULinkAdd;
