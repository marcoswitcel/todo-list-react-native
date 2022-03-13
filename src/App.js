import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
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
  /** @type {[ Task, React.Dispatch<React.SetStateAction<Task>> ]} */
  const [ editableTask, setEditableTask ] = useState(null);

  UseBackHandlerIfAndroid('Desejar realmente sair?', 'Essa ação fechará o aplicativo');

  useEffect(() => {
    if (!modalVisible) {
      setEditableTask(null);
    }
  }, [modalVisible]);

  useEffect(() => {
    if (editableTask) {
      setModalVisible(true);
    }
  }, [editableTask]);

  const handlePress = () => {
    setModalVisible(true);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  /**
   * Ação que permite sinalizar que uma tarefa teve seu texto atualizado
   * Isso deve causar o rerender
   */
  const taskEditedAction = () => {
    setTasks([...tasks]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <ScrollView style={styles.scrollView}>
        <DateAndTime />
        <TaskList title='Minha Lista' tasks={tasks} setTasks={setTasks} editTaskAction={setEditableTask} />
      </ScrollView>
      <Button text='Adicionar item' onPress={handlePress} />
      <TaskModal
        addTask={addTask}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        editableTask={editableTask}
        taskEditedAction={taskEditedAction}
      />
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
