import React, { useState, useRef, useEffect } from 'react';
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
 * @param {Task} [param0.editableTask] Tarefa que deve ser editada, quando presente `taskEditedAction` será chamado ao final de uma edição com sucesso
 * @param {() => void} param0.taskEditedAction Ação que permite sinalizar que uma tarefa teve seu texto atualizado
 */
export const TaskModal = ({ modalVisible, setModalVisible, addTask, editableTask, taskEditedAction }) => {
  const [text, setText] = useState('');
  /** @type {React.MutableRefObject<TextInput>} */
  const inputRef = useRef(null);

  /**
   * Hook que roda toda vez que a variável `editableTask` é modificada, quando
   * ela recebe uma `Task` aí o texto da task é usado como texto inicial do
   * textp input
   */
  useEffect(() => {
    if (editableTask) {
      setText(editableTask.text);
    }
  }, [editableTask]);

  const handleModalDismiss = () => {
    setText('');
    setModalVisible(false);
  };

  const handleSubmit = () => {
    if (text === '') return;

    if (editableTask) {
      editableTask.text = text;
      taskEditedAction();
    } else {
      const task = new Task(text);
      addTask(task);
    }
    
    handleModalDismiss();
  };
  
  return (
    <Modal
      animationType='fade'
      transparent={true}
      onShow={() => inputRef.current.focus()}
      visible={modalVisible}
      onRequestClose={handleModalDismiss}
    >
      <Pressable style={styles.pressableOverlayArea} onPress={handleModalDismiss}>
        <TextInput
          ref={inputRef}
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
