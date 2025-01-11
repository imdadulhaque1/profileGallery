import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {screenWidth} from '@utils/handler/window/useWindowSize';
import {COLORS} from '@utils/COLORS';

interface Props {
  onPress?: () => void;
  submitStatus?: string;
  btnContainerStyle?: any;
  txtStyle?: any;
}

const Button: FC<Props> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[props.btnContainerStyle, styles.btnStyle]}>
      <Text style={[props.txtStyle, styles.btnTxtStyle]}>
        {props.submitStatus}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: COLORS.inValidSubmitColor,
    width: screenWidth / 2.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 8,
  },
  btnTxtStyle: {
    color: COLORS.black,
    fontFamily: 'WorkSans-Regular',
    fontSize: screenWidth / 28,
  },
});

export default Button;
