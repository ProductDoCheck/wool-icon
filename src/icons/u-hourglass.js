import React from 'react';
import PropTypes from 'prop-types';

const UHourglass = props => {
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
      <path d="M18.992 21.002h-1v-1.667a4.998 4.998 0 00-.3-1.678.958.958 0 00-.036-.084 4.978 4.978 0 00-.664-1.237l-1.4-1.867a3.019 3.019 0 01-.6-1.801v-1.01a3.021 3.021 0 01.878-2.12l.657-.658a4.945 4.945 0 001.397-2.838c0-.014.008-.026.008-.04l-.003-.014c.035-.213.056-.428.063-.643V3.002h1a1 1 0 100-2h-14a1 1 0 000 2h1v2.343c.007.215.028.43.063.643l-.003.014c0 .014.007.026.008.04A4.946 4.946 0 007.456 8.88l.657.657c.56.564.876 1.326.879 2.121v1.01a3.022 3.022 0 01-.6 1.8l-1.4 1.868a4.98 4.98 0 00-.665 1.237.982.982 0 00-.036.084 5.003 5.003 0 00-.3 1.678v1.667h-1a1 1 0 000 2h14a1 1 0 100-2zm-11-16v-2h8v2h-8zm.878 2.464a2.97 2.97 0 01-.377-.464h6.997a2.97 2.97 0 01-.377.464l-.657.657a4.96 4.96 0 00-1.422 2.879H10.95a4.96 4.96 0 00-1.422-2.879l-.657-.657zm1.122 8.202c.579-.775.922-1.7.988-2.666h2.023c.066.965.41 1.89.989 2.666l1 1.334h-6l1-1.334zm6 5.334h-8v-1.667c.002-.111.012-.223.027-.333h7.945c.016.11.025.222.028.333v1.667z"></path>
    </svg>
  );
};

UHourglass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHourglass.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHourglass;
