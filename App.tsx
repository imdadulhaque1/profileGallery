import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC, useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {COLORS} from '@utils/COLORS';
import MCIcons from '@components/icons/MCIcons';
import {screenWidth} from '@utils/handler/window/useWindowSize';
import AuthInput from '@components/input/AuthInput';

interface Props {}

const App: FC<Props> = props => {
  const [signupActivities, setSignupActivities] = useState({
    isSecurePassword: true,
    isSecureConfirmPassword: true,
  });

  const signupValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(5, ({min}) => `Name must be at least ${min} characters`)
      .required('Name is required'),
    email: yup
      .string()
      .email('Please enter a valid email.')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, ({min}) => `Password must be at least ${min} characters.`)
      .matches(
        /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/,
        'Password must contain at least 6 characters, including at least 1 Capital Letter & 1 Special Character.',
      )
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  });

  return (
    <View style={styles.container}>
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={{name: '', email: '', password: '', confirmPassword: ''}}
        onSubmit={values => {
          console.log('Form submitted:', values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View style={styles.formikContainer}>
            <AuthInput
              label="Full Name"
              isIconShow={false}
              isSecure={false}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Enter your full name"
              errorMsg={errors.name}
            />
            <AuthInput
              label="Email"
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

            <AuthInput
              label="Confirm Password"
              isIconShow={true}
              isSecure={signupActivities.isSecureConfirmPassword}
              secureOnPress={() =>
                setSignupActivities({
                  ...signupActivities,
                  isSecureConfirmPassword:
                    !signupActivities.isSecureConfirmPassword,
                })
              }
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              placeholder="Enter confirm password"
              errorMsg={errors.confirmPassword}
            />

            <Text onPress={() => handleSubmit()} style={styles.submitButton}>
              Submit
            </Text>
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
    backgroundColor: COLORS.primaryLight70,
    paddingHorizontal: 10,
  },
  formikContainer: {
    backgroundColor: COLORS.white,
    width: screenWidth - 50,
    padding: 10,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 18,
    color: '#111111',
  },

  submitButton: {
    marginTop: 20,
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
