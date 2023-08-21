import React from 'react';
import PropTypes from 'prop-types';

const UCloudRedo = props => {
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
      <path d="M15 12.5a1 1 0 00-.91.6 4 4 0 10.55 6.4 1.001 1.001 0 00-.981-1.714 1 1 0 00-.339.214 2 2 0 01-1.32.5 2 2 0 111-3.75h-.22a1 1 0 000 2H15a1 1 0 001-1V13.5a1 1 0 00-1-1zm3.42-4.78A7 7 0 005.06 9.61a4 4 0 00-.38 7.66c.104.032.212.049.32.05a1.013 1.013 0 10.32-2A2 2 0 014 13.5a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1.004 1.004 0 001 1.74A5 5 0 0022 12.5a5 5 0 00-3.58-4.78z"></path>
    </svg>
  );
};

UCloudRedo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudRedo.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudRedo;
