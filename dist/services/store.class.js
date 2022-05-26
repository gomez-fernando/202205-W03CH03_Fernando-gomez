/* eslint-disable no-unused-vars */
import { SERIES } from '../models/data.js';
export class StoreClass {
    store;
    constructor() {
        this.store = 'Series';
    }
    getSeries() {
        return localStorage.getItem(this.store)
            ? JSON.parse(localStorage.getItem(this.store))
            : SERIES;
    }
    setSeries(tasks) {
        localStorage.setItem(this.store, JSON.stringify(tasks));
    }
    seleteSeries() {
        localStorage.removeItem(this.store);
    }
}
