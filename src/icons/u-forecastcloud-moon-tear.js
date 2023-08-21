import React from 'react';
import PropTypes from 'prop-types';

const UForecastcloudMoonTear = props => {
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
      <path d="M21.7 7.57a1 1 0 00-.93-.26 3.2 3.2 0 01-.66.08 3 3 0 01-3-3c.003-.219.03-.437.08-.65A1 1 0 0016 2.53a4.93 4.93 0 00-3.83 4.21 6.24 6.24 0 00-1.67-.24 6 6 0 00-5.94 5.13 3.5 3.5 0 00-.46 6.58c.127.05.263.078.4.08a1 1 0 00.4-1.92A1.48 1.48 0 014 15a1.5 1.5 0 011.5-1.5 1 1 0 001-1 4 4 0 014-4c.776 0 1.535.23 2.18.66a4 4 0 011.57 2 1 1 0 00.78.67 2.32 2.32 0 01.97 4.28 1.004 1.004 0 001.1 1.68 4.32 4.32 0 001.9-3.62 4.23 4.23 0 00-.49-2A4.94 4.94 0 0022 8.5a1 1 0 00-.3-.93zm-4.59 2.82c-.14.011-.28.011-.42 0-.218-.15-.45-.28-.69-.39a6 6 0 00-1.82-2.28v-.37a3 3 0 011.05-2.28 5 5 0 004.23 4.23 3 3 0 01-2.35 1.09zm-6 3.94a1 1 0 00-1.12 0C9.84 14.41 7.5 16 7.5 18.5a3 3 0 106 0c0-2.5-2.35-4.1-2.44-4.17h.05zm-.61 5.17a1 1 0 01-1-1 3 3 0 011-2 3 3 0 011 2 1 1 0 01-1 1z"></path>
    </svg>
  );
};

UForecastcloudMoonTear.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UForecastcloudMoonTear.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UForecastcloudMoonTear;
