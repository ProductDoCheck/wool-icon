import React from 'react';
import PropTypes from 'prop-types';

const UUnderline = props => {
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
      <path d="M12 15.5a5 5 0 005-5v-5a1 1 0 00-2 0v5a3 3 0 01-6 0v-5a1 1 0 00-2 0v5a5 5 0 005 5zm5 2H7a1 1 0 000 2h10a1 1 0 000-2z"></path>
    </svg>
  );
};

UUnderline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UUnderline.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UUnderline;
