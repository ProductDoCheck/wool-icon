import React from 'react';
import PropTypes from 'prop-types';

const UFolderQuestion = props => {
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
      <path d="M12.57 16.3a.64.64 0 00-.15-.13l-.17-.09-.19-.08a1 1 0 00-.9.28 1 1 0 00-.22.32 1 1 0 00-.07.39 1 1 0 00.29.7 1 1 0 00.32.22 1 1 0 00.39.07 1 1 0 00.38-.07 1 1 0 00.32-.22 1 1 0 00.3-.7c0-.134-.027-.267-.08-.39a.87.87 0 00-.22-.3zm-.7-7.3a3 3 0 00-2.6 1.5 1 1 0 101.73 1 1 1 0 011.87.5 1 1 0 01-1 1 1 1 0 000 2 3 3 0 100-6zM19 5.5h-6.28l-.32-1a3 3 0 00-2.84-2H5a3 3 0 00-3 3v13a3 3 0 003 3h14a3 3 0 003-3v-10a3 3 0 00-3-3zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-13a1 1 0 011-1h4.56a1 1 0 01.95.68l.54 1.64a1 1 0 00.95.68h7a1 1 0 011 1v10z"></path>
    </svg>
  );
};

UFolderQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFolderQuestion.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFolderQuestion;
