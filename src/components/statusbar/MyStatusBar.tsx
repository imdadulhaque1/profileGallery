import React from 'react';
import {StatusBar} from 'react-native';

export type Props = {
  backgroundColor: any;
  barStyle: any;
  translucent: boolean;
};

const MyStatusBar: React.FC<Props> = ({
  backgroundColor,
  barStyle,
  translucent = false,
  ...props
}) => (
  <StatusBar
    barStyle={barStyle}
    hidden={false}
    animated={false}
    backgroundColor={backgroundColor}
    translucent={translucent}
    {...props}
  />
);

export default MyStatusBar;
