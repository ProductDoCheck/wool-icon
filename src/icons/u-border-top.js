import React from 'react';
import PropTypes from 'prop-types';

const UBorderTop = props => {
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
      <path d="M8 18.5a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 100 2 1 1 0 000-2zm4 8a1 1 0 100 2 1 1 0 000-2zm-8-12a1 1 0 100 2 1 1 0 000-2zm0 12a1 1 0 100 2 1 1 0 000-2zm0-14h16a1 1 0 100-2H4a1 1 0 000 2zm0 10a1 1 0 100 2 1 1 0 000-2zm0-4a1 1 0 100 2 1 1 0 000-2zm8-4a1 1 0 100 2 1 1 0 000-2zm8 8a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2zm-8-4a1 1 0 100 2 1 1 0 000-2zm8-8a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2zm-8 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm0 8a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UBorderTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBorderTop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBorderTop;
