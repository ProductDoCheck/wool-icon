import React from 'react';
import PropTypes from 'prop-types';

const UFileQuestion = props => {
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
      <path d="M12.57 17.29a1 1 0 00-1.63.33 1.07 1.07 0 000 .76c.054.122.129.233.22.33a1 1 0 00.32.21c.123.052.256.08.39.08a1 1 0 00.92-1.38.91.91 0 00-.22-.33zM20 8.94a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19h-.09a.88.88 0 00-.33-.11H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V9v-.06zm-6-3.53L16.59 8H15a1 1 0 01-1-1V5.41zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3v9zm-6.13-9a3 3 0 00-2.6 1.5 1 1 0 101.73 1 1 1 0 011.577-.207A1 1 0 0111.87 14a1 1 0 000 2 3 3 0 000-6z"></path>
    </svg>
  );
};

UFileQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileQuestion.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileQuestion;
