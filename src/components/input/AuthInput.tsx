import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import MCIcons from '@components/icons/MCIcons';
import {COLORS} from '@utils/COLORS';
import {screenWidth} from '@utils/handler/window/useWindowSize';
import {AuthInputInterafce} from '@interface/auth/AuthInputInterface';

const AuthInput: FC<AuthInputInterafce> = ({
  secureOnPress,
  label,
  errorMsg,
  mainContainerStyle,
  labelStyle,
  inputContainerStyle,
  inputFieldStyle,
  isSecure = false,
  isIconShow = false,
  onChangeText,
  onBlur,
  value,
  placeholder,
  ...props
}) => {
  return (
    <View style={[mainContainerStyle, {width: '100%'}]}>
      <Text style={[styles.txtStyle, {...labelStyle}]}>{label}</Text>
      <View style={[styles.containerStyle, inputContainerStyle]}>
        <TextInput
          style={[styles.inputStyle, {...inputFieldStyle}]}
          secureTextEntry={isSecure}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          {...props}
        />
        {isIconShow && (
          <MCIcons
            onPress={secureOnPress}
            name={isSecure ? 'eye-off-outline' : 'eye-outline'}
            color={COLORS.primary}
            size={20}
          />
        )}
      </View>
      {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  txtStyle: {
    fontFamily: 'WorkSans-Regular',
    fontSize: screenWidth / 25,
    color: COLORS.black,
  },
  containerStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primaryLight90,
    borderRadius: 10,
    minHeight: 45,
    paddingHorizontal: 10,
  },
  inputStyle: {
    fontFamily: 'WorkSans-Regular',
    height: '100%',
    width: '90%',
  },
  errorText: {
    color: 'red',
    fontFamily: 'WorkSans-Regular',
    fontSize: screenWidth > 550 ? screenWidth / 35 : screenWidth / 30,
  },
});

export default AuthInput;
