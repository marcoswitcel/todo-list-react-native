import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

/**
 * @typedef {import('../../models/Task.js').default} Task
 */

/**
 * @param {object} param0 
 * @param {string} param0.title
 * @param {Task[]} param0.tasks
 * @param { React.Dispatch<React.SetStateAction<Task[]>>} param0.setTasks
 * @returns 
 */
export const TaskList = ({ title, tasks, setTasks }) => {
  
  const toggleTaskDone = (task) => {
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
            onPress={() => toggleTaskDone(task)}
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
