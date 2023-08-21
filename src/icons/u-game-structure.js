import React from 'react';
import PropTypes from 'prop-types';

const UGameStructure = props => {
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
      <path d="M21 18h-2v-3a1 1 0 00-1-1h-5v-2.71l1.13.59a1 1 0 001.45-1.05l-.4-2.37 1.72-1.69a1 1 0 00.26-1 1 1 0 00-.81-.68L14 4.72l-1.1-2.16a1 1 0 00-1.8 0L10 4.72l-2.39.35a1 1 0 00-.81.68 1 1 0 00.26 1l1.76 1.71-.4 2.37a1 1 0 001.45 1.05l1.13-.59V14H6a1 1 0 00-1 1v3H3a1 1 0 00-1 1v2a1 1 0 002 0v-1h4v1a1 1 0 002 0v-2a1 1 0 00-1-1H7v-2h10v2h-2a1 1 0 00-1 1v2a1 1 0 002 0v-1h4v1a1 1 0 002 0v-2a1 1 0 00-1-1zm-9-9.37a1 1 0 00-.47.12l-.8.42.15-.9a1 1 0 00-.29-.88l-.65-.64.9-.13a1 1 0 00.76-.54l.4-.82.4.82a1 1 0 00.76.54l.9.13-.65.64a1 1 0 00-.29.88l.15.9-.8-.42a1 1 0 00-.47-.12z"></path>
    </svg>
  );
};

UGameStructure.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGameStructure.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGameStructure;