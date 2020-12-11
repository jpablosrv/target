import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { func, string, bool } from 'prop-types';
import styles from './styles';

const Button = ({ disabled, handleSubmit, textTitle, testID }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={handleSubmit}
      style={[styles.buttonContainer, disabled && styles.btnContainerDisable]}
      disabled={disabled}
      testID={testID}>
      <Text style={[styles.buttonText, disabled && styles.btnDisable]}>{textTitle}</Text>
    </TouchableOpacity>
  </View>
);

Button.propTypes = {
  handleSubmit: func.isRequired,
  textTitle: string.isRequired,
  disabled: bool.isRequired,
};

export default Button;
