import { gen } from '../utils/utils';

export class Task {
    /**
     * @type {number} id
     */
    id;
    /**
     * @type {string} text
     */
    text;
    /**
     * @type {boolean} done
     */
    done;

    /**
     * 
     * @param {string} text Nome da tarefa
     * @param {number} [id] Código de identificação interna
     * @param {boolean} [done] Estado concluído não concluído
     */
    constructor(text, id = gen(), done = false) {
        this.text = text;
        this.id = id;
        this.done = done;
    }
}

export default Task;
