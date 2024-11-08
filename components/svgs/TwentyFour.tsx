import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const TwentyFourIcon = (props: SvgProps) => {
  const { color } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <Path
        fill={color}
        d="M15.243 11.03a1 1 0 0 1 .727 1.213L15.28 15H16v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 0 2v1a1 1 0 1 1-2 0v-1h-2a1 1 0 0 1-.97-1.242l1-4a1 1 0 0 1 1.213-.728ZM10.5 11a2.5 2.5 0 0 1 2.495 2.336L13 13.5v.325c0 .6-.19 1.181-.541 1.663l-.14.175L11.175 17H12a1 1 0 0 1 .117 1.993L12 19H9a1 1 0 0 1-.837-1.548l.078-.103 2.56-2.987a.83.83 0 0 0 .19-.42l.009-.117V13.5a.5.5 0 0 0-1 0 1 1 0 1 1-2 0 2.5 2.5 0 0 1 2.5-2.5ZM9 0c4.195 0 7.717 2.87 8.716 6.75a1 1 0 1 1-1.937.5 7 7 0 1 0-10.28 7.814 1 1 0 0 1-1 1.73A9 9 0 0 1 9 0Zm0 4a1 1 0 0 1 .993.883L10 5v4a1 1 0 0 1-.883.993L9 10H7a1 1 0 0 1-.117-1.993L7 8h1V5a1 1 0 0 1 1-1Z"
      />
    </Svg>
  );
};
export default TwentyFourIcon;
