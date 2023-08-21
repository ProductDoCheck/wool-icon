import React from 'react';
import PropTypes from 'prop-types';

const UCloudMoonShowers = props => {
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
      <path d="M8.5 14a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1zm4-1a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1zm9.2-5.93a1 1 0 00-.94-.26 3 3 0 01-.65.08 3 3 0 01-3-3c.003-.222.03-.443.08-.66a1 1 0 00-.26-.93A1 1 0 0016 2a4.93 4.93 0 00-3.83 4.21A6.24 6.24 0 0010.5 6a6 6 0 00-5.94 5.13 3.5 3.5 0 00-.46 6.58c.127.05.263.078.4.08a1 1 0 00.4-1.92A1.48 1.48 0 014 14.5 1.5 1.5 0 015.5 13a1 1 0 001-1 4 4 0 014-4c.773 0 1.528.23 2.17.66a3.94 3.94 0 011.57 2 1 1 0 00.78.67 2.32 2.32 0 01.98 4.28 1.003 1.003 0 101.1 1.68 4.32 4.32 0 001.9-3.62 4.23 4.23 0 00-.49-2A4.94 4.94 0 0022 8a1 1 0 00-.3-.93zm-4.59 2.82c-.14.01-.28.01-.42 0a4.603 4.603 0 00-.69-.35 6.06 6.06 0 00-1.82-2.28v-.37a3 3 0 011.05-2.28 5 5 0 004.23 4.23 3 3 0 01-2.35 1.05z"></path>
    </svg>
  );
};

UCloudMoonShowers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudMoonShowers.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudMoonShowers;
