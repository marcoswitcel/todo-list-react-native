import React, { useState }  from 'react';
import Task from '../models/Task';

/**
 * @typedef {{
 *  tasks: Task[],
 *  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
 * }} GlobalContex
 */

/** @type {React.Context<GlobalContex>} */ // @ts-expect-error
export const GlobalAppContext = React.createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(Array(200).fill(0).map((_, i) => new Task("teste " + (i+1))));

  return (
    <GlobalAppContext.Provider
      value={{
        tasks, setTasks
      }}
    >
      {children}
    </GlobalAppContext.Provider>
  );
}

export default GlobalContextProvider;
