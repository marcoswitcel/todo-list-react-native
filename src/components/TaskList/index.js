import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';


export const TaskList = ({ title }) => {
  const [tasks, setTasks] = useState([{ id: 1, text: 'primeira tarefa', done: false }]);
  const updateList = (task) => {
    task.done = !task.done;
    setTasks([...tasks]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>{title}</Text>
      </View>
      <View style={styles.list}>
        {tasks.map((task) => (
          <Text
            style={[styles.listItem, { textDecorationLine: task.done ? 'line-through' : 'none', textDecorationStyle: 'solid' }]}
            onPress={() => updateList(task)}
            key={task.id}
          >
            {task.text}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default TaskList;
