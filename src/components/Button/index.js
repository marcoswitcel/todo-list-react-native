import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';


/**
 * Botão que usarei no app
 * 
 * @param {object} param0 
 * @param {string} param0.text
 * @param {(event: import('react-native').GestureResponderEvent) => void} param0.onPress
 * @returns 
 */
export const Button = ({ text, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.button}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
