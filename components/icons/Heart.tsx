import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function Heart(
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M18.583 2.813c-.945-.923-2.251-1.384-3.918-1.384-.461 0-.932.08-1.412.24-.48.16-.926.375-1.339.647a14.31 14.31 0 00-1.066.764c-.297.238-.58.491-.848.76-.268-.269-.55-.522-.848-.76a14.328 14.328 0 00-1.066-.764 5.714 5.714 0 00-1.34-.648c-.48-.16-.95-.24-1.411-.24-1.667 0-2.973.462-3.918 1.385C.472 3.735 0 5.015 0 6.652c0 .498.088 1.012.262 1.54.175.528.374.978.597 1.35.224.372.477.735.76 1.088.282.354.489.597.619.731s.232.231.307.29l6.964 6.72a.668.668 0 00.491.2.668.668 0 00.491-.2l6.953-6.697C19.148 9.97 20 8.296 20 6.652c0-1.637-.473-2.917-1.417-3.84zm-2.11 7.812L10 16.863l-6.484-6.25c-1.392-1.39-2.087-2.711-2.087-3.961 0-.603.08-1.135.24-1.596.16-.462.364-.828.613-1.1.25-.271.553-.492.91-.664a4.032 4.032 0 011.05-.346c.341-.06.706-.089 1.093-.089s.804.095 1.25.285c.446.19.857.427 1.233.714.376.287.698.554.966.804.267.249.49.478.67.686a.669.669 0 00.546.246c.23 0 .413-.082.547-.246.178-.208.402-.437.67-.686.267-.25.59-.517.965-.804a5.707 5.707 0 011.233-.714c.447-.19.864-.285 1.25-.285.387 0 .752.03 1.094.09.342.059.692.174 1.05.345.356.171.66.393.909.664.249.272.454.638.614 1.1.16.46.24.993.24 1.596 0 1.25-.7 2.574-2.099 3.973z"
        fill="#000"
      />
    </Svg>
  );
}
