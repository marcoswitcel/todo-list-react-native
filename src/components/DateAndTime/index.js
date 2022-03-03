import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js';

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export const DateAndTime = () => {
  const today = new Date;
  const month = months[today.getMonth()];
  const day = today.getDate();
  /**
   * @TODO fazer a hora atualizar usando algum callback temporizado que altera o estado
   */
  return (
    <View style={styles.wrapper}>
      <Text>
        {day} de {month}
      </Text>
      <Text>
        {today.getHours()}:{today.getMinutes()}
      </Text>
    </View>
  )
};

export default DateAndTime;
