import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { func, string } from 'prop-types';
import styles from './styles';

const Button = ({ disabled, handleSubmit, textTitle }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={handleSubmit}
      style={[styles.buttonContainer, disabled ? styles.btnContainerDisable : null]}
      disabled={disabled}>
      <Text style={[styles.buttonText, disabled ? styles.btnDisable : null]}>{textTitle}</Text>
    </TouchableOpacity>
  </View>
);

Button.propTypes = {
  handleSubmit: func.isRequired,
  textTitle: string.isRequired,
};

export default Button;
