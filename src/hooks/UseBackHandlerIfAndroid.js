import { useEffect } from 'react';
import { Platform, BackHandler, Alert } from 'react-native';

/**
 * Hooks customizado que inicializa a funcionalidade de tratamento do botão de
 * retorno no Android. O hook só faz algo no Android, em outras plataformas ela
 * retorna logo no começo, sendo uma função sem operação.
 * 
 * @note https://pt-br.reactjs.org/docs/hooks-custom.html
 * @note https://reactnative.dev/docs/platform-specific-code
 * 
 * @param {string} title
 * @param {string} [message]
 * @returns {void}
 */
export const UseBackHandlerIfAndroid = (title, message) => {
  if (Platform.OS !== 'android') return;

  const handleBackPress = () => {
    Alert.alert(title, message, [
      {
        text: 'Cancelar',
        onPress: () => null,
        style: 'cancel'
      },
      { text: 'Sair', onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  /**
   * @url https://reactnative.dev/docs/backhandler
   * @note BackHandler só funciona no Android
   */
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);
};

export default UseBackHandlerIfAndroid;
