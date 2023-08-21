import React from 'react';
import PropTypes from 'prop-types';

const UBoltAlt = props => {
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
      <path d="M19.89 9.55A1 1 0 0019 9h-5V3a1 1 0 00-1.309-1.002 1 1 0 00-.501.362l-8 11a1 1 0 00-.08 1A1 1 0 005 15h5v6a1 1 0 001.454.892 1 1 0 00.356-.302l8-11a1 1 0 00.08-1.04zM12 17.92V14a1 1 0 00-1-1H7l5-6.92V10a1 1 0 001 1h4l-5 6.92z"></path>
    </svg>
  );
};

UBoltAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBoltAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBoltAlt;
