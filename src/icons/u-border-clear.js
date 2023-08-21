import React from 'react';
import PropTypes from 'prop-types';

const UBorderClear = props => {
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
      <path d="M8 11a1 1 0 100 2.001A1 1 0 008 11zm0 8a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zM4 3a1 1 0 100 2 1 1 0 000-2zm0 8a1 1 0 100 2.001A1 1 0 004 11zm16-6a1 1 0 100-2 1 1 0 000 2zM4 19a1 1 0 100 2 1 1 0 000-2zm8-4a1 1 0 100 2.002A1 1 0 0012 15zm-8 0a1 1 0 100 2.001A1 1 0 004 15zm0-8a1 1 0 100 2 1 1 0 000-2zm4-4a1 1 0 100 2 1 1 0 000-2zm12 12a1 1 0 100 2.002A1 1 0 0020 15zm0 4a1 1 0 100 2 1 1 0 000-2zm0-12a1 1 0 100 2 1 1 0 000-2zm-8 4a1 1 0 100 2.002A1 1 0 0012 11zm8 0a1 1 0 100 2.002A1 1 0 0020 11zm-4-8a1 1 0 100 2 1 1 0 000-2zm-4 0a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2zm4 12a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 100 2.002A1 1 0 0016 11z"></path>
    </svg>
  );
};

UBorderClear.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBorderClear.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBorderClear;
