import React from 'react';
import PropTypes from 'prop-types';

const UBorderBottom = props => {
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
      <path d="M12 13.5a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0-8a1 1 0 100-2 1 1 0 000 2zm-4-4a1 1 0 100-2 1 1 0 000 2zm0 8a1 1 0 100-2 1 1 0 000 2zm12-8a1 1 0 100-2 1 1 0 000 2zm-4 8a1 1 0 100-2 1 1 0 000 2zm-4-8a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm4 10a1 1 0 100 2.002 1 1 0 000-2.002zm0-4a1 1 0 100 2.002 1 1 0 000-2.002zm0 8H4a1 1 0 000 2h16a1 1 0 000-2zm0-12a1 1 0 100 2 1 1 0 000-2zm-16 6a1 1 0 100-2 1 1 0 000 2zm0-4a1 1 0 100-2 1 1 0 000 2zm0 8a1 1 0 100-2 1 1 0 000 2zm0-12a1 1 0 100-2 1 1 0 000 2z"></path>
    </svg>
  );
};

UBorderBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBorderBottom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBorderBottom;
