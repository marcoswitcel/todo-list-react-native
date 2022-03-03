import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, Keyboard, Modal, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import Button from './components/Button';
import DateAndTime from './components/DateAndTime';
import TaskList from './components/TaskList';
import Task from './models/Task';


export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  const updateList = (task) => {
    setTasks([...tasks, task]);
  }
  const handlePress = () => {
    
    setModalVisible(true);
  }
  const handleModalDismiss = () => {
    const task = new Task(text);
    updateList(task);

    setText('');
    setModalVisible(!modalVisible);
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
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable style={{ backgroundColor: 'rgba(0,0,0,.4)', flex: 1 }} onPress={handleModalDismiss}>
          <TextInput
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
