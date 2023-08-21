import React from 'react';
import PropTypes from 'prop-types';

const UDashboard = props => {
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
      <path d="M19.088 4.955c-.007-.008-.01-.019-.017-.026-.008-.008-.018-.01-.026-.018a9.979 9.979 0 00-14.09 0c-.008.008-.018.01-.026.018-.007.007-.01.018-.017.026a10 10 0 1014.176 0zM12 20a7.984 7.984 0 01-6.235-3H9.78a2.964 2.964 0 004.44 0h4.015A7.986 7.986 0 0112 20zm-1-5a1 1 0 112.002 0A1 1 0 0111 15zm8.41.002L19.4 15H15a2.995 2.995 0 00-2-2.816V9a1 1 0 10-2 0v3.184A2.995 2.995 0 009 15H4.6l-.01.002A7.931 7.931 0 014.07 13H5a1 1 0 000-2h-.93a7.951 7.951 0 011.619-3.898l.654.655a1 1 0 101.414-1.414l-.654-.655A7.952 7.952 0 0111 4.07V5a1 1 0 002 0v-.93a7.953 7.953 0 013.897 1.618l-.654.655a1 1 0 101.414 1.414l.654-.655A7.951 7.951 0 0119.931 11H19a1 1 0 000 2h.93a7.932 7.932 0 01-.52 2.002z"></path>
    </svg>
  );
};

UDashboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDashboard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDashboard;
