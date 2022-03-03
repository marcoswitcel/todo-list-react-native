import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import DateAndTime from './components/DateAndTime';
import TaskList from './components/TaskList';

export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <DateAndTime />
      <TaskList title="Lista aqui"></TaskList>
    </View>
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
