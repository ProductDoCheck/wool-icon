import React from 'react';
import PropTypes from 'prop-types';

const UBolt = props => {
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
      <path d="M19.87 8.6A1 1 0 0019 8h-4.58l1.27-4.74a1 1 0 00-.52-1.157A1 1 0 0014.73 2h-7a1 1 0 00-1 .74l-2.68 10a1 1 0 00.524 1.159A1 1 0 005.02 14h3.87l-1.81 6.74a1 1 0 001.71.93l10.9-12a1 1 0 00.18-1.07zm-9.79 8.68l1.07-4a1 1 0 00-.52-1.157 1 1 0 00-.44-.103H6.35L8.49 4h4.93l-1.27 4.74a1 1 0 001 1.26h3.57l-6.64 7.28z"></path>
    </svg>
  );
};

UBolt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBolt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBolt;
