import React from 'react';
import PropTypes from 'prop-types';

const UVkAlt = props => {
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
      <path d="M15.744 13.53a5.514 5.514 0 00-.978-.837 7.873 7.873 0 002.859-4.471 1 1 0 10-1.95-.444 5.86 5.86 0 01-3.02 3.903V8.002a.957.957 0 00-.044-.216 1.025 1.025 0 00-.035-.171.992.992 0 00-.167-.25c-.018-.02-.027-.048-.046-.068a1.002 1.002 0 00-.246-.167c-.026-.014-.045-.037-.072-.048a1.02 1.02 0 00-.236-.049.944.944 0 00-.152-.031L11.003 7H11a.995.995 0 00-.35 1.929v4.89a11.307 11.307 0 01-3.01-5.984 1 1 0 00-1.972.334 13.333 13.333 0 005.4 8.643.98.98 0 00.128.065c.035.02.07.038.108.054.111.045.23.069.35.071a.982.982 0 00.424-.102c.01-.005.022-.002.031-.007a.99.99 0 00.24-.176c.015-.014.024-.03.038-.045a.992.992 0 00.197-.324.987.987 0 00.07-.346v-2.126a3.55 3.55 0 011.616 1.005l1.648 1.797a.999.999 0 101.473-1.352l-1.647-1.797zM15.073 1H8.937C2.78 1 1 2.778 1 8.927v6.136C1 21.22 2.778 23 8.927 23h6.136C21.22 23 23 21.222 23 15.073V8.937C23 2.78 21.222 1 15.073 1zM21 15.073c0 5.04-.888 5.927-5.938 5.927H8.928C3.887 21 3 20.112 3 15.062V8.928C3 3.887 3.888 3 8.938 3h6.135C20.113 3 21 3.888 21 8.938v6.135z"></path>
    </svg>
  );
};

UVkAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVkAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVkAlt;
