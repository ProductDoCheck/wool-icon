import React from 'react';
import PropTypes from 'prop-types';

const UGoogle = props => {
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
      <path d="M22.602 10.004a1 1 0 00-.984-.822H12.2a1 1 0 00-1 1v3.868a1 1 0 001 1h3.962c-.282.476-.669.882-1.131 1.187a5.06 5.06 0 01-2.831.785 4.935 4.935 0 01-4.646-3.437v-.002a4.904 4.904 0 010-3.167v-.002A4.936 4.936 0 0112.2 6.978a4.377 4.377 0 013.131 1.217 1 1 0 001.399-.015l2.868-2.869a1 1 0 00-.025-1.438A10.623 10.623 0 0012.2 1a10.949 10.949 0 00-9.829 6.059l-.001.002A10.922 10.922 0 001.2 12a11.078 11.078 0 001.17 4.94l.001.001A10.949 10.949 0 0012.2 23a10.525 10.525 0 007.295-2.687l.001-.001a10.786 10.786 0 003.304-8.085c0-.745-.066-1.49-.198-2.223zM12.2 3a8.682 8.682 0 015.209 1.673l-1.454 1.453A6.463 6.463 0 0012.2 4.978a6.886 6.886 0 00-5.99 3.55L5.142 7.7l-.585-.454A8.953 8.953 0 0112.2 3zM3.68 14.903a9.03 9.03 0 010-5.806l1.782 1.382a6.854 6.854 0 000 3.042l-1.783 1.382zM12.2 21a8.953 8.953 0 01-7.644-4.246l.379-.294 1.276-.99a6.885 6.885 0 005.989 3.552 7.276 7.276 0 003.306-.75l1.691 1.313A8.89 8.89 0 0112.2 21zm6.526-2.76l-.183-.143-1.377-1.069a5.606 5.606 0 001.4-2.795 1 1 0 00-.984-1.183H13.2v-1.868h7.549c.034.345.051.695.051 1.045a9.051 9.051 0 01-2.074 6.012z"></path>
    </svg>
  );
};

UGoogle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGoogle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGoogle;
