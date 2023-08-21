import React from 'react';
import PropTypes from 'prop-types';

const UWindMoon = props => {
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
      <path d="M12 19H7a1 1 0 000 2h5a1.014 1.014 0 011 1 1 1 0 102 0 3.004 3.004 0 00-3-3zm2-10a1 1 0 100-2 1 1 0 000 2zm4 0h2a3.003 3.003 0 003-3 1 1 0 00-2 0 1.013 1.013 0 01-1 1h-2a1 1 0 100 2zm2 6h-2.161c.574-.898.963-1.9 1.146-2.95a1 1 0 00-1.305-1.118 5.97 5.97 0 01-1.92.318A6.062 6.062 0 019.7 5.2c.007-.351.04-.702.098-1.049A1 1 0 008.49 3.053 8.032 8.032 0 004.266 15H3a1 1 0 000 2h5a1 1 0 000-2H6.83a6.028 6.028 0 01.882-9.36 8.065 8.065 0 008.837 7.57A6.028 6.028 0 0115.277 15H12a1 1 0 000 2h8a1 1 0 010 2 1 1 0 000 2 3 3 0 000-6zM2.62 19.08c-.121.05-.233.122-.33.21a1.028 1.028 0 00-.175 1.183.99.99 0 001.265.447c.121-.051.233-.122.33-.21A.993.993 0 004 20a1.052 1.052 0 00-.29-.71 1.001 1.001 0 00-1.09-.21z"></path>
    </svg>
  );
};

UWindMoon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWindMoon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWindMoon;
