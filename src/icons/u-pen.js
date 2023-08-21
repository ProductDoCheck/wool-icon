import React from 'react';
import PropTypes from 'prop-types';

const UPen = props => {
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
      <path d="M22 7.24a.999.999 0 00-.29-.71l-4.24-4.24a.999.999 0 00-.71-.29 1 1 0 00-.71.29l-2.83 2.83L2.29 16.05a1.001 1.001 0 00-.29.71V21a1 1 0 001 1h4.24a1.001 1.001 0 00.76-.29l10.87-10.93L21.71 8c.091-.097.166-.208.22-.33.01-.08.01-.16 0-.24a.697.697 0 000-.14l.07-.05zM6.83 20H4v-2.83l9.93-9.93 2.83 2.83L6.83 20zM18.17 8.66l-2.83-2.83 1.42-1.41 2.82 2.82-1.41 1.42z"></path>
    </svg>
  );
};

UPen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPen;
