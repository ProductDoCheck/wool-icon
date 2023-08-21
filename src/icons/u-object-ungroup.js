import React from 'react';
import PropTypes from 'prop-types';

const UObjectUngroup = props => {
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
      <path d="M21 18.28v-6.56A2 2 0 1018.28 9H15V5.72A2 2 0 1012.28 3H5.72A2 2 0 103 5.72v6.56A2 2 0 105.72 15H9v3.28A2 2 0 1011.72 21h6.56A2 2 0 1021 18.28zM8 10a2 2 0 001 1.72V13H5.72c-.17-.3-.42-.55-.72-.72V5.72c.3-.17.55-.42.72-.72h6.56c.17.3.42.55.72.72V9h-1.28A2 2 0 008 10zm5 1v1.28c-.3.17-.55.42-.72.72H11v-1.28c.3-.17.55-.42.72-.72H13zm6 7.28c-.3.17-.55.42-.72.72h-6.56c-.17-.3-.42-.55-.72-.72V15h1.28A2 2 0 1015 12.28V11h3.28c.17.3.42.55.72.72v6.56z"></path>
    </svg>
  );
};

UObjectUngroup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UObjectUngroup.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UObjectUngroup;
