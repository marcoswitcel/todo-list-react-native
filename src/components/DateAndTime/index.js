import React, { useEffect, useState } from 'react';
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
  const [ showingDate, setShowingDate ] = useState(new Date);
  const month = months[showingDate.getMonth()];
  const day = String(showingDate.getDate()).padStart(2, '0');
  const hours = String(showingDate.getHours()).padStart(2, '0');
  const minutes = String(showingDate.getMinutes()).padStart(2, '0');

  /**
   * Callback que será chamado para definir se precisa ou não atualizar o
   * estado `showingDate`
   */
  const checkDateChange = () => {
    const now = new Date;

    /**
     * Se o minuto tiver mudado já é suficiente para atualizar o componente. Sempre que o resto muda
     * o minuto muda junto.
     */ 
    if (now.getMinutes() !== showingDate.getMinutes()) {
      setShowingDate(now);
    }
  }

  /**
   * O efeito é uma função que roda sempre que o componente estiver disponível na tela
   * e a função (callback) retornada pela nossa função de efeito é chamada sempre que o
   * componente for removido da tela. Assim é possível por exemplo, chamar a função `setInterval` 
   * e a função `clearInterval` sempre em pares e na ordem certa.
   */
  useEffect(() => {
    /**
     * O callback definido aqui será chamado de 3 em 3 segundos até gerar uma mutação no estado
     * e assim causando a troca do componente por uma versão atualizada e rodando a função
     * `clearInterval` que realizar a limpeza do callback setado através da função `setInterval`.
     */
    const idTimeout = setInterval(checkDateChange, 3000);
    return () => {
      clearInterval(idTimeout);
    };
  });

  return (
    <View style={styles.wrapper}>
      <Text>
        {day} de {month}
      </Text>
      <Text>
        {hours}:{minutes}
      </Text>
    </View>
  )
};

export default DateAndTime;
