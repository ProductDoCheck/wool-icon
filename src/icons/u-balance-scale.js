import React from 'react';
import PropTypes from 'prop-types';

const UBalanceScale = props => {
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
      <path d="M22.964 13.823a.943.943 0 00-.028-.175l-2.305-6.137A2.995 2.995 0 0022 5a1 1 0 00-2 0 1 1 0 01-1.882.473A2.894 2.894 0 0015.54 4H13V3a1 1 0 00-2 0v1H8.46a2.893 2.893 0 00-2.578 1.473A1 1 0 014 5a1 1 0 00-2 0 2.995 2.995 0 001.369 2.511l-2.305 6.137a.949.949 0 00-.028.175A.95.95 0 001 14c0 .01.003.018.003.027 0 .013.003.025.004.039a3.994 3.994 0 007.986 0c.001-.014.004-.026.004-.039 0-.01.003-.018.003-.027a.95.95 0 00-.036-.177.949.949 0 00-.028-.175L6.629 7.504A2.99 2.99 0 007.643 6.42.917.917 0 018.46 6H11v14H8a1 1 0 000 2h8a1 1 0 000-2h-3V6h2.54a.917.917 0 01.817.42c.242.44.59.814 1.014 1.084l-2.307 6.144a.952.952 0 00-.028.175A.95.95 0 0015 14c0 .01.003.018.003.027 0 .013.003.025.004.039a3.994 3.994 0 007.986 0c.001-.014.004-.026.004-.039 0-.01.003-.018.003-.027a.943.943 0 00-.036-.177zM5 8.856L6.556 13H3.444L5 8.856zM6.723 15A2.023 2.023 0 015 16a2 2 0 01-1.731-1h3.454zM19 8.856L20.556 13h-3.112L19 8.856zM19 16a2 2 0 01-1.731-1h3.454A2.023 2.023 0 0119 16z"></path>
    </svg>
  );
};

UBalanceScale.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBalanceScale.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBalanceScale;