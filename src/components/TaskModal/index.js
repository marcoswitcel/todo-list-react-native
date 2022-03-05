import React, { useState } from 'react';
import { TextInput, Modal, Pressable  } from 'react-native';
import Task from '../../models/Task.js';
import styles from './styles.js';

/**
 * Componenten de tela de cadastro de novas tarefas. Essa tela abre no formato de modal/overlay sobre a tela de visualização.
 * 
 * @param {object} param0 
 * @param {boolean} param0.modalVisible
 * @param {React.Dispatch<React.SetStateAction<boolean>>} param0.setModalVisible
 * @param {(Task) => void} param0.addTask
 */
export const TaskModal = ({ modalVisible, setModalVisible, addTask }) => {
  const [text, setText] = useState('');

  const handleModalDismiss = () => {
    setText('');
    setModalVisible(false);
  }

  const handleSubmit = () => {
    if (text === '') return;

    const task = new Task(text);
    addTask(task);
    setText('');
    setModalVisible(false);
  }
  
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setText('');
        setModalVisible(false);
      }}
    >
      <Pressable style={styles.pressableOverlayArea} onPress={handleModalDismiss}>
        <TextInput
          onSubmitEditing={handleSubmit}
          style={styles.textInput}
          onChange={(event) => setText(event.nativeEvent.text)}
          value={text}
          placeholder='Título da tarefa'
        />
      </Pressable>
    </Modal>
  );
};

export default TaskModal;
