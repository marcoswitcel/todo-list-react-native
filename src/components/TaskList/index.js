import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { GlobalAppContext } from '../../contexts/GlobalContext';

/**
 * @typedef {import('../../models/Task.js').default} Task
 */

/**
 * @param {object} param0 
 * @param {string} param0.title
 */
export const TaskList = ({ title  }) => (
  <View style={styles.container}>
    <View style={styles.title}>
      <Text>{title}</Text>
    </View>
    <GlobalAppContext.Consumer>
      {(context) => {
        const toggleTaskDone = (task) => {
          task.done = !task.done;
          context.setTasks([...context.tasks]);
        }

        return (
          <View style={styles.list}>
            {context.tasks.map((task) => (
              <TouchableOpacity
                style={[styles.listItem, task.done ? styles.listItemMarked : styles.listItemUnmarked]}
                onPress={() => toggleTaskDone(task)}
                key={task.id}
              >
                {task.done
                  ? <MaterialIcons style={styles.icon} name='radio-button-checked' size={16} color='white' />
                  : <MaterialIcons style={styles.icon} name='radio-button-unchecked' size={16} color='white' />
                }
                <Text
                  style={[styles.listItemText, { textDecorationLine: task.done ? 'line-through' : 'none', textDecorationStyle: 'solid' }]}
                >
                  {task.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      }}
    </GlobalAppContext.Consumer>
  </View>
);

export default TaskList;
