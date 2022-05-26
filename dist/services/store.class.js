/* eslint-disable no-unused-vars */
import { SERIES } from '../models/data.js';
export class StoreClass {
    store;
    constructor() {
        this.store = 'Series';
    }
    getTasks() {
        return localStorage.getItem(this.store)
            ? JSON.parse(localStorage.getItem(this.store))
            : SERIES;
    }
    setTasks(tasks) {
        localStorage.setItem(this.store, JSON.stringify(tasks));
    }
    deleteTasks() {
        localStorage.removeItem(this.store);
    }
}
