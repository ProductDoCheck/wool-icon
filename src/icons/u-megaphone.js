import React from 'react';
import PropTypes from 'prop-types';

const UMegaphone = props => {
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
      <path d="M19.991 2.002a1 1 0 00-1 1v.637a9.036 9.036 0 01-7 3.363h-6a3.003 3.003 0 00-3 3v2a3.003 3.003 0 003 3h.484l-2.403 5.606a1 1 0 00.92 1.394h4a.999.999 0 00.918-.606l2.724-6.356a9.028 9.028 0 016.357 3.325v.637a1 1 0 002 0v-16a.998.998 0 00-1-1zm-14 11a1 1 0 01-1-1v-2a1 1 0 011-1h1v4h-1zm2.341 7H6.508l2.142-5h1.825l-2.143 5zm10.66-4.478a11.052 11.052 0 00-7-2.522h-3v-4h3a11.053 11.053 0 007-2.522v9.044z"></path>
    </svg>
  );
};

UMegaphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMegaphone.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMegaphone;
