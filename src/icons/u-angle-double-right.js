import React from 'react';
import PropTypes from 'prop-types';

const UAngleDoubleRight = props => {
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
      <path d="M8.46 8.29A1.018 1.018 0 107 9.71L9.34 12 7 14.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l3-3a1 1 0 000-1.42l-2.96-3zm8.5 3l-3-3a1.004 1.004 0 00-1.42 1.42l2.3 2.29-2.3 2.29a1.002 1.002 0 00.325 1.639 1 1 0 001.095-.219l3-3a1 1 0 00.04-1.42h-.04z"></path>
    </svg>
  );
};

UAngleDoubleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAngleDoubleRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAngleDoubleRight;
