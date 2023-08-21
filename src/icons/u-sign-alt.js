import React from 'react';
import PropTypes from 'prop-types';

const USignAlt = props => {
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
      <path d="M21.78 11.88l-2-2.5A1 1 0 0019 9h-6V3a1 1 0 00-2 0v1H5a1 1 0 00-.78.38l-2 2.5a1 1 0 000 1.24l2 2.5A1 1 0 005 11h6v9H9a1 1 0 000 2h6a1 1 0 000-2h-2v-4h6a1 1 0 00.78-.38l2-2.5a1 1 0 000-1.24zM11 9H5.48l-1.2-1.5L5.48 6H11v3zm7.52 5H13v-3h5.52l1.2 1.5-1.2 1.5z"></path>
    </svg>
  );
};

USignAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USignAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USignAlt;
