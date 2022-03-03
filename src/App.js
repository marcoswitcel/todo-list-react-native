import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import DateAndTime from './components/DateAndTime';
import TaskList from './components/TaskList';
import Task from './models/Task';


export default function App() {
  const [tasks, setTasks] = useState([]);
  const updateList = (task) => {
    setTasks([...tasks, task]);
  }
  const handlePress = () => {
    const task = new Task('tarefa');
    updateList(task);
    console.log(task.id);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <DateAndTime />
      <TaskList title='Lista aqui' tasks={tasks} setTasks={setTasks}></TaskList>
      <Button title='Adicionar item' onPress={handlePress} />
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
