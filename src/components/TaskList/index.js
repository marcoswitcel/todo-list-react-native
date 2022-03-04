import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
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
          <TouchableOpacity
            style={[styles.listItem, task.done ? styles.listItemMarked : styles.listItemUnmarked ]}
            onPress={() => toggleTaskDone(task)}
            key={task.id}
          >
            <Text
              style={{ textDecorationLine: task.done ? 'line-through' : 'none', textDecorationStyle: 'solid' }}
            >
              {task.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TaskList;
