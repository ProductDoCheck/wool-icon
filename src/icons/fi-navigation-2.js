import React from 'react';
import PropTypes from 'prop-types';

const FiNavigation2 = props => {
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
      <path d="M12 2l7 19-7-4-7 4 7-19z"></path>
    </svg>
  );
};

FiNavigation2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiNavigation2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiNavigation2;
