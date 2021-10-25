import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function GoBack(
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) {
  return (
    <Svg width={22} height={18} viewBox="0 0 22 18" fill="none" {...props}>
      <Path
        d="M21 9H1m0 0l7.87 8M1 9l7.87-8"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
