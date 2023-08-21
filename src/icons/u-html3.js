import React from 'react';
import PropTypes from 'prop-types';

const UHtml3 = props => {
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
      <path d="M3.195 2l1.602 17.994L11.99 22l7.212-2.013L20.805 2H3.195zm14.281 4.123l-.534 5.994.002.033-.002.074-.38 4.19-.041.373L12 18.037l-.004.004-4.512-1.258-.306-3.465H9.39l.157 1.762 2.453.665H12l2.461-.674.26-2.869H9.577l-.044-.485-.101-1.136-.052-.61h5.538l.202-2.232H6.682l-.044-.485-.1-1.137-.053-.61h11.044l-.053.616z"></path>
    </svg>
  );
};

UHtml3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHtml3.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHtml3;
