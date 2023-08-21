import React from 'react';
import PropTypes from 'prop-types';

const UBorderAlt = props => {
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
      <path d="M11.5 18.5a1 1 0 100 2 1 1 0 000-2zm9-15a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 102 0v-15h15a1 1 0 001-1zm-5 15a1 1 0 100 2 1 1 0 000-2zm-8 0a1 1 0 100 2 1 1 0 000-2zm12-12a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UBorderAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBorderAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBorderAlt;
