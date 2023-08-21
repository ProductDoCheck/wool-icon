import React from 'react';
import PropTypes from 'prop-types';

const UYenCircle = props => {
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
      <path d="M12 1a11 11 0 100 22 11 11 0 000-22zm0 20a9 9 0 110-18 9 9 0 010 18zm2.83-14.55L12 10.7 9.17 6.45a1 1 0 00-1.67 1.1l2.11 3.17H9a1 1 0 000 2h2l.05.08v.92H9a1 1 0 000 2h2V18a1 1 0 002 0v-2.28h2a1 1 0 000-2h-2v-.92l.05-.08H15a1 1 0 000-2h-.61l2.11-3.17a1 1 0 00-1.67-1.1z"></path>
    </svg>
  );
};

UYenCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UYenCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UYenCircle;
