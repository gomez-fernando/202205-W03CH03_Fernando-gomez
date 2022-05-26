/* eslint-disable no-unused-vars */
import { SERIES } from '../models/data.js';
import { iSerie } from '../interfaces/interface.js';

export class StoreClass {
    store: string;
    constructor() {
        this.store = 'Series';
    }

    getTasks(): Array<iSerie> {
        return localStorage.getItem(this.store)
            ? JSON.parse(<string>localStorage.getItem(this.store))
            : SERIES;
    }

    setTasks(tasks: Array<iSerie>) {
        localStorage.setItem(this.store, JSON.stringify(tasks));
    }

    deleteTasks() {
        localStorage.removeItem(this.store);
    }
}
