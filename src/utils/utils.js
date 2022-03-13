
/**
 * @typedef {import('../models/Task.js').default} Task
 */

let counter = 0;

export const gen = () => ++counter;

/**
 * Formata uma `Task` usando emojis e formatação do WhasApp para
 * deixá-la riscada quando concluída e com ícones representando o estado
 * 
 * Links da documentação de formatação do WhasApp
 * @note https://faq.whatsapp.com/general/chats/how-to-format-your-messages/?lang=pt_br
 * 
 * @param {Task} task
 * @returns {string}
 */
const formatLine = (task) => (task.done)
  ? `✔ ~${task.text}~`
  : `☐ ${task.text}`;

/**
 * Formata uma `Task` para um linha com um emoji `▪️`
 * 
 * @param {Task} task
 * @returns {string}
 */
const formatLineSimple = (task) => `▪️ ${task.text}`;

/**
 * Função que recebe a lista e o título e retorna a `string` com o texto
 * formatado preparado para ser compartilhado.
 * 
 * @param {string} title
 * @param {Task[]} tasks
 * @returns {string}
 */
export const formatToShare = (title, tasks) => {
  return `${title}\n\n${tasks.map(formatLineSimple).join('\n')}`;
}
