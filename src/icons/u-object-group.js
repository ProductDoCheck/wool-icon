import React from 'react';
import PropTypes from 'prop-types';

const UObjectGroup = props => {
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
      <path d="M16 10h-2V8a1 1 0 00-1-1H8a1 1 0 00-1 1v5a1 1 0 001 1h2v2a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-6 1v1H9V9h3v1h-1a1 1 0 00-1 1zm5 4h-3v-3h3v3zm6 3.28V5.72A2 2 0 1018.28 3H5.72A2 2 0 103 5.72v12.56A2 2 0 105.72 21h12.56A2 2 0 1021 18.28zm-2 0c-.3.17-.55.42-.72.72H5.72c-.17-.3-.42-.55-.72-.72V5.72c.3-.17.55-.42.72-.72h12.56c.17.3.42.55.72.72v12.56z"></path>
    </svg>
  );
};

UObjectGroup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UObjectGroup.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UObjectGroup;
