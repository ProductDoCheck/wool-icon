import React from 'react';
import PropTypes from 'prop-types';

const UBorderHorizontal = props => {
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
      <path d="M8 5a1 1 0 100-2 1 1 0 000 2zM4 9a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2zM4 5a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2zM4 19a1 1 0 100 2 1 1 0 000-2zm16 0a1 1 0 100 2 1 1 0 000-2zm0-4a1 1 0 100 2.002A1 1 0 0020 15zm0-4H4a1 1 0 000 2h16a1 1 0 000-2zm-4 8a1 1 0 100 2 1 1 0 000-2zM4 15a1 1 0 100 2.001A1 1 0 004 15zm16-8a1 1 0 100 2 1 1 0 000-2zM8 19a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm0-4a1 1 0 100 2.002A1 1 0 0012 15z"></path>
    </svg>
  );
};

UBorderHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBorderHorizontal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBorderHorizontal;
