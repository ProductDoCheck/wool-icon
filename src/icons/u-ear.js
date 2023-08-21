import React from 'react';
import PropTypes from 'prop-types';

const UEar = props => {
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
      <path d="M12 8a1 1 0 011 1 1 1 0 002 0 3 3 0 10-5.018 2.22c.01.01.162.17.194.215a.988.988 0 010 1.12.999.999 0 101.648 1.13 2.983 2.983 0 00-.005-3.388 7.107 7.107 0 00-.49-.557A1 1 0 0112 8zm0-6a7 7 0 00-6.762 8.812 1 1 0 001.932-.518A5 5 0 1117 9a5.114 5.114 0 01-.705 2.567L12.73 19A2.006 2.006 0 0111 20a2.027 2.027 0 01-2-2c0-.35.093-.695.269-.999a1 1 0 10-1.733-1.002 3.999 3.999 0 106.963 3.934l3.563-7.433A7 7 0 0012 2z"></path>
    </svg>
  );
};

UEar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEar.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEar;
