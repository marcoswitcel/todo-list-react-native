import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
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
  };
  
  /**
   * Menu de opções extras
   * @param {Task} task 
   */
  const openExtraOptions = (task) => {
    /** @type {import('react-native').AlertButton[]} */
    const buttons = [
      {
        text: 'Deletar',
        onPress: () => removeTaskFromList(task),
        style: 'destructive',
      },
      {
        text: 'Cancelar',
        onPress: () => null,
        style: 'cancel'
      },
    ];
    const message = `${task.text.slice(0, 28)}${task.text.length > 28 ? '...' : ''}\nEstado: ${task.done ? 'Concluída' : 'Pendente'}`
    Alert.alert('Tarefa', message, buttons);
  };

  /**
   * Ação que remove a tarefa da lista
   * 
   * @param {Task} task Tarefa a ser removida da lista
   */
  const removeTaskFromList = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

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
            onLongPress={() => openExtraOptions(task)}
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
    </View>
  );
};

export default TaskList;
