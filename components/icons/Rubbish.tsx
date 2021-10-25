import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Rubbish(
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M16.11 2.802h-2.548V1.758A1.76 1.76 0 0011.805 0h-3.61a1.76 1.76 0 00-1.757 1.758v1.044H3.889A1.76 1.76 0 002.132 4.56v2.565c0 .324.262.586.586.586h.96v11.703c0 .324.262.586.585.586h11.474a.586.586 0 00.586-.586V7.711h.96a.586.586 0 00.585-.586V4.56a1.76 1.76 0 00-1.757-1.758zm-8.5-1.044c0-.323.263-.586.586-.586h3.608c.323 0 .586.263.586.586v1.044H7.61V1.758zm7.541 17.07H4.849V7.711h10.302v11.117zM16.697 6.54H3.303V4.56c0-.323.263-.586.586-.586h12.222c.323 0 .586.263.586.586v1.98z"
        fill="#000"
      />
      <Path
        d="M10 17.187a.586.586 0 00.586-.586V9.939a.586.586 0 10-1.172 0V16.6c0 .323.262.586.586.586zM12.412 17.187a.586.586 0 00.586-.586V9.939a.586.586 0 00-1.172 0V16.6c0 .323.262.586.586.586zM7.588 17.187a.586.586 0 00.586-.586V9.939a.586.586 0 00-1.172 0V16.6c0 .323.263.586.586.586z"
        fill="#000"
      />
    </Svg>
  );
}
