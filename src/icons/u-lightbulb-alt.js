import React from 'react';
import PropTypes from 'prop-types';

const ULightbulbAlt = props => {
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
      <path d="M17.09 2.82a8 8 0 00-6.68-1.66 8 8 0 00-6.27 6.32 8.07 8.07 0 001.72 6.65A4.54 4.54 0 017 17v3a3 3 0 003 3h4a3 3 0 003-3v-2.81A5.17 5.17 0 0118.22 14a8 8 0 00-1.13-11.2v.02zM15 20a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1h6v1zm1.67-7.24A7.13 7.13 0 0015 17h-2v-3a1 1 0 00-2 0v3H9a6.5 6.5 0 00-1.6-4.16 6 6 0 013.39-9.72A6 6 0 0118 9a5.89 5.89 0 01-1.33 3.76z"></path>
    </svg>
  );
};

ULightbulbAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULightbulbAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULightbulbAlt;
