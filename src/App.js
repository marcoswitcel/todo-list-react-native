import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { TextInput, Keyboard, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, BackHandler, Alert } from 'react-native';
import Button from './components/Button';
import DateAndTime from './components/DateAndTime';
import TaskList from './components/TaskList';
import GlobalContextProvider, { GlobalAppContext } from './contexts/GlobalContext';
import Task from './models/Task';


export default function App() {
  // @TODO desfazer aqui

  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');

  const handleBackPress = () => {
    Alert.alert('Desejar realmente sair?', 'Essa ação fechará o aplicativo', [
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


  const handlePress = () => {
    
    setModalVisible(true);
  }
  const handleModalDismiss = () => {
    setText('');
    setModalVisible(false);
  }

  return (
    <GlobalContextProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style='light' backgroundColor='blue' />
        <ScrollView style={styles.scrollView}>
          <DateAndTime />
          <TaskList title='Lista'/>
        </ScrollView>
        <Button text='Adicionar item' onPress={handlePress} />
        <GlobalAppContext.Consumer>
          {(contex) => {
            const updateList = (task) => {
              contex.setTasks([...contex.tasks, task]);
            }
            const handleSubmit = () => {
              if (text === '') return;

              const task = new Task(text);
              updateList(task);
              setText('');
              setModalVisible(false);
            }
            return (
              <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setText('');
                  setModalVisible(false);
                }}
              >
                <Pressable style={{ backgroundColor: 'rgba(0,0,0,.4)', flex: 1 }} onPress={handleModalDismiss}>
                  <TextInput
                    onSubmitEditing={handleSubmit}
                    style={{ backgroundColor: 'white', borderRadius: 10, margin: 10, padding: 10 }}
                    onChange={(event) => setText(event.nativeEvent.text)}
                    value={text}
                  />
                </Pressable>
              </Modal>
            );
          }}
        </GlobalAppContext.Consumer>
      </SafeAreaView>
    </GlobalContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    padding: 10,
    paddingTop: 70,

  },
});
