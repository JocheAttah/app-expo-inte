import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const AfterNoonIcon = (props: SvgProps) => {
  const { color } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        d="M11 .25a.75.75 0 0 1 .75.75v1a.75.75 0 1 1-1.5 0V1A.75.75 0 0 1 11 .25Zm0 5a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5ZM4.46 3.399a.75.75 0 0 0-1.061 1.06l.707.707a.75.75 0 1 0 1.06-1.06l-.706-.707ZM21.75 11a.75.75 0 0 1-.75.75h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 0 1 .75.75Zm-3.149-6.54a.75.75 0 1 0-1.06-1.061l-.707.707a.75.75 0 1 0 1.06 1.06l.707-.706ZM11 19.25a.75.75 0 0 1 .75.75v1a.75.75 0 1 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm6.894-2.416a.75.75 0 1 0-1.06 1.06l.707.707a.75.75 0 1 0 1.06-1.06l-.707-.707ZM2.75 11a.75.75 0 0 1-.75.75H1a.75.75 0 1 1 0-1.5h1a.75.75 0 0 1 .75.75Zm2.416 6.894a.75.75 0 0 0-1.06-1.06l-.707.707a.75.75 0 0 0 1.06 1.06l.707-.707Z"
      />
    </Svg>
  );
};
export default AfterNoonIcon;
