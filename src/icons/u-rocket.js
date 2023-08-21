import React from 'react';
import PropTypes from 'prop-types';

const URocket = props => {
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
      <path d="M22.601 2.062a1.001 1.001 0 00-.713-.713A11.252 11.252 0 0010.47 4.972L9.354 6.296 6.75 5.668a2.777 2.777 0 00-3.387 1.357l-2.2 3.9a1 1 0 00.661 1.469l3.073.659c-.26.792-.446 1.607-.555 2.434a1 1 0 00.284.836l3.1 3.1a.998.998 0 00.794.29c.846-.077 1.68-.24 2.492-.49l.644 3.003a1 1 0 001.469.661l3.905-2.203a3.035 3.035 0 001.375-3.303l-.669-2.76 1.238-1.137A11.204 11.204 0 0022.6 2.062zM3.572 10.723l1.556-2.76a.826.826 0 011.07-.375l1.718.416-.65.772a13.096 13.096 0 00-1.59 2.398l-2.104-.45zm12.47 8.222l-2.715 1.532-.43-2.005a11.34 11.34 0 002.414-1.62l.743-.683.404 1.664a1.041 1.041 0 01-.415 1.112zm1.615-6.965l-3.685 3.386a9.773 9.773 0 01-5.17 2.304l-2.405-2.404a10.932 10.932 0 012.401-5.206l1.679-1.993a.949.949 0 00.078-.092L11.99 6.27a9.277 9.277 0 018.81-3.12 9.218 9.218 0 01-3.143 8.829zm-.923-6.164a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
    </svg>
  );
};

URocket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URocket.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URocket;
