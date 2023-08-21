import React from 'react';
import PropTypes from 'prop-types';

const UMapMarkerQuestion = props => {
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
      <path d="M12.44 13.11l-.17-.11a1 1 0 00-1.09.22 1.002 1.002 0 00-.3.71c.002.13.029.26.08.38.107.24.3.432.54.54.12.051.25.078.38.08a1.09 1.09 0 00.39-.08 1 1 0 00.32-.22 1 1 0 000-1.41l-.15-.11zM11.88 6A2.75 2.75 0 009.5 7.32a1 1 0 101.73 1 .77.77 0 01.65-.32.75.75 0 110 1.5 1 1 0 100 2 2.75 2.75 0 100-5.5zm8.58 3.68A8.5 8.5 0 007.3 3.36a8.56 8.56 0 00-3.76 6.27A8.46 8.46 0 006 16.46l5.3 5.31a1.002 1.002 0 001.42 0L18 16.46a8.46 8.46 0 002.46-6.83v.05zm-3.86 5.37l-4.6 4.6-4.6-4.6a6.49 6.49 0 01-1.87-5.22A6.57 6.57 0 018.42 5a6.47 6.47 0 017.16 0 6.57 6.57 0 012.89 4.81 6.49 6.49 0 01-1.87 5.24z"></path>
    </svg>
  );
};

UMapMarkerQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMapMarkerQuestion.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMapMarkerQuestion;
