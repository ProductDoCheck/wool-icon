import React from 'react';
import PropTypes from 'prop-types';

const UYinYang = props => {
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
      <path d="M12 15.5a1 1 0 100 2.002 1 1 0 000-2.002zM12 2c-.188 0-.375.01-.562.029A9.993 9.993 0 0012 22c.188 0 .375-.01.562-.029A9.993 9.993 0 0012 2zm0 18A7.989 7.989 0 016.71 6.015 5.484 5.484 0 0012 13a3.5 3.5 0 010 7zm5.29-2.015A5.483 5.483 0 0012 11a3.5 3.5 0 110-7 7.989 7.989 0 015.29 13.985zM12 6.5a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UYinYang.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UYinYang.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UYinYang;
