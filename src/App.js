import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, BackHandler, Alert } from 'react-native';
import Button from './components/Button';
import DateAndTime from './components/DateAndTime';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';
import Task from './models/Task';


export default function App() {
  /** @type {[ Task[], React.Dispatch<React.SetStateAction<Task[]>> ]} */
  const [ tasks, setTasks ] = useState([]);
  const [ modalVisible, setModalVisible ] = useState(false);

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
