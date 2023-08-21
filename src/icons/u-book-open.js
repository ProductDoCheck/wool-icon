import React from 'react';
import PropTypes from 'prop-types';

const UBookOpen = props => {
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
      <path d="M21.17 2.06A13.1 13.1 0 0019 1.87a12.94 12.94 0 00-7 2.05 12.94 12.94 0 00-7-2 13.1 13.1 0 00-2.17.19 1 1 0 00-.83 1v12a1 1 0 001.17 1 10.9 10.9 0 018.25 1.91l.12.07h.11a.91.91 0 00.7 0h.11l.12-.07A10.898 10.898 0 0120.83 16 .999.999 0 0022 15V3a1 1 0 00-.83-.94zM11 15.35a12.87 12.87 0 00-6-1.48H4v-10c.333-.02.667-.02 1 0a10.86 10.86 0 016 1.8v9.68zm9-1.44h-1a12.87 12.87 0 00-6 1.48V5.67a10.86 10.86 0 016-1.8c.333-.02.667-.02 1 0v10.04zm1.17 4.15a13.099 13.099 0 00-2.17-.19 12.94 12.94 0 00-7 2.05 12.94 12.94 0 00-7-2.05c-.727.003-1.453.066-2.17.19A1 1 0 002 19.21a1 1 0 001.17.79 10.9 10.9 0 018.25 1.91 1 1 0 001.16 0A10.9 10.9 0 0120.83 20a1 1 0 001.17-.79 1.002 1.002 0 00-.83-1.15z"></path>
    </svg>
  );
};

UBookOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBookOpen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBookOpen;
