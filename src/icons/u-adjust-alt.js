import React from 'react';
import PropTypes from 'prop-types';

const UAdjustAlt = props => {
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
      <path d="M20.83 7.32a.2.2 0 000-.08 10 10 0 00-3.38-3.65A9.89 9.89 0 0012 2a1 1 0 00-1 1v18a1 1 0 001 1h.28a10 10 0 008.55-14.68zM13 4.06c.865.11 1.706.36 2.49.74L13 9.12V4.06zm0 9.06l4.17-7.22a7.888 7.888 0 011.58 1.83L13 17.69v-4.57zm1.16 6.57L19.75 10c.164.654.248 1.326.25 2a7.94 7.94 0 01-5.84 7.69z"></path>
    </svg>
  );
};

UAdjustAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAdjustAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAdjustAlt;
