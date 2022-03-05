import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Button from './components/Button';
import DateAndTime from './components/DateAndTime';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';
import UseBackHandlerIfAndroid from './hooks/UseBackHandlerIfAndroid';
import Task from './models/Task';


export default function App() {
  /** @type {[ Task[], React.Dispatch<React.SetStateAction<Task[]>> ]} */
  const [ tasks, setTasks ] = useState([]);
  const [ modalVisible, setModalVisible ] = useState(false);

  UseBackHandlerIfAndroid('Desejar realmente sair?', 'Essa ação fechará o aplicativo');

  const handlePress = () => {
    setModalVisible(true);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <ScrollView style={styles.scrollView}>
        <DateAndTime />
        <TaskList title='Lista aqui' tasks={tasks} setTasks={setTasks}></TaskList>
      </ScrollView>
      <Button text='Adicionar item' onPress={handlePress} />
      <TaskModal addTask={addTask} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
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
    paddingHorizontal: 10,
    paddingTop: 70,
  },
});
