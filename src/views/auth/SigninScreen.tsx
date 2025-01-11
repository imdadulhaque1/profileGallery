import {Keyboard, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {COLORS} from '@utils/COLORS';
import {screenWidth} from '@utils/handler/window/useWindowSize';
import AuthInput from '@components/input/AuthInput';
import Button from '@components/btn/Button';
import MyStatusBar from '@components/statusbar/MyStatusBar';

interface Props {}

const SigninScreen: FC<Props> = props => {
  const [signupActivities, setSignupActivities] = useState({
    isSecurePassword: true,
  });

  const signupValidationSchema = yup.object().shape({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
  });
  const keyboardClose = () => {
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <MyStatusBar
        backgroundColor={COLORS.primaryLight90}
        barStyle={COLORS.primaryLight90}
      />
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          console.log('Form submitted:', JSON.stringify(values, null, 2));
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          isSubmitting,
        }) => (
          <View onTouchStart={keyboardClose} style={styles.formikContainer}>
            <Text style={styles.formTitleStyle}>Profile Gallery (Signin)</Text>

            <AuthInput
              mainContainerStyle={{marginVertical: 10}}
              label="Email / Phone"
              isIconShow={false}
              isSecure={false}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Enter your email"
              errorMsg={errors.email}
            />

            <AuthInput
              label="Password"
              isIconShow={true}
              isSecure={signupActivities.isSecurePassword}
              secureOnPress={() =>
                setSignupActivities({
                  ...signupActivities,
                  isSecurePassword: !signupActivities.isSecurePassword,
                })
              }
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Enter password"
              errorMsg={errors.password}
            />

            <Button
              onPress={() => !isSubmitting && handleSubmit()}
              submitStatus={isSubmitting ? 'Singing...' : 'Singin'}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryLight90,
    paddingHorizontal: 10,
  },
  formikContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    width: screenWidth - 50,
    padding: 15,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textStyle: {
    fontSize: 18,
    color: '#111111',
  },
  formTitleStyle: {
    color: COLORS.black,
    fontFamily: 'PlaywriteIS-Regular',
    textAlign: 'center',
    fontSize: screenWidth / 20,
    marginVertical: 15,
  },
});

export default SigninScreen;
