import React from 'react';
import PropTypes from 'prop-types';

const UBullseye = props => {
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
      <path d="M12 5a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-9.999A5 5 0 0112 17zm0-8a3 3 0 100 6 3 3 0 000-6zm0 4a1 1 0 110-2 1 1 0 010 2zm0-12a11 11 0 100 22 11 11 0 000-22zm0 20a9 9 0 110-18 9 9 0 010 18z"></path>
    </svg>
  );
};

UBullseye.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBullseye.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBullseye;
