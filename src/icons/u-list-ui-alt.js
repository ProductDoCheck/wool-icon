import React from 'react';
import PropTypes from 'prop-types';

const UListUiAlt = props => {
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
      <path d="M3.5 6a1 1 0 100 2 1 1 0 000-2zm4 2h14a1 1 0 100-2h-14a1 1 0 000 2zm0 3a1 1 0 100 2 1 1 0 000-2zm4 5a1 1 0 100 2 1 1 0 000-2zm10-5h-10a1 1 0 000 2h10a1 1 0 000-2zm0 5h-6a1 1 0 000 2h6a1 1 0 000-2z"></path>
    </svg>
  );
};

UListUiAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UListUiAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UListUiAlt;
