import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { TextInput, Keyboard, Modal, Pressable, SafeAreaView, StyleSheet, BackHandler, Alert } from 'react-native';
import Button from './components/Button';
import DateAndTime from './components/DateAndTime';
import TaskList from './components/TaskList';
import Task from './models/Task';


export default function App() {
  const [tasks, setTasks] = useState([]);
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

  const updateList = (task) => {
    setTasks([...tasks, task]);
  }
  const handlePress = () => {
    
    setModalVisible(true);
  }
  const handleModalDismiss = () => {
    setText('');
    setModalVisible(false);
  }

  const handleSubmit = () => {
    if (text === '') return;

    const task = new Task(text);
    updateList(task);
    setText('');
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <DateAndTime />
      <TaskList title='Lista aqui' tasks={tasks} setTasks={setTasks}></TaskList>
      <Button text='Adicionar item' onPress={handlePress} />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
