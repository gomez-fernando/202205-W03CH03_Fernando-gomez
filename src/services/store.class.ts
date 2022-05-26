/* eslint-disable no-unused-vars */
import { SERIES } from '../models/data.js';
import { seriesList } from '../models/data original.js';

export class StoreClass {
    store: string;
    constructor() {
        this.store = 'Tasks';
    }

    getTasks(): Array<iSerie> {
        return localStorage.getItem(this.store)
            ? JSON.parse(<string>localStorage.getItem(this.store))
            : TASKS;
    }

    setTasks(tasks: Array<iSerie>) {
        localStorage.setItem(this.store, JSON.stringify(tasks));
    }

    deleteTasks() {
        localStorage.removeItem(this.store);
    }
}
