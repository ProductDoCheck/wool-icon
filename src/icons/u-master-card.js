import React from 'react';
import PropTypes from 'prop-types';

const UMasterCard = props => {
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
      <path d="M15.265 5.274a6.682 6.682 0 00-3.273.855 6.727 6.727 0 100 11.746 6.726 6.726 0 103.273-12.6zm-5.028 11.183c-.487.174-1 .267-1.518.273a4.728 4.728 0 010-9.456c.518.006 1.03.099 1.518.273a6.688 6.688 0 000 8.91zm1.755-1.057a4.695 4.695 0 010-6.796 4.697 4.697 0 010 6.796zm3.273 1.33a4.668 4.668 0 01-1.519-.273 6.688 6.688 0 000-8.91c.488-.174 1-.267 1.519-.273a4.727 4.727 0 110 9.456z"></path>
    </svg>
  );
};

UMasterCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMasterCard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMasterCard;
