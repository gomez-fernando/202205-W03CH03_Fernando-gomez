/* eslint-disable no-unused-vars */
import { SERIES } from '../models/data.js';
import { iSerie } from '../interfaces/interface.js';

export class StoreClass {
    store: string;
    constructor() {
        this.store = 'Series';
    }

    getSeries(): Array<iSerie> {
        return localStorage.getItem(this.store)
            ? JSON.parse(<string>localStorage.getItem(this.store))
            : SERIES;
    }

    setSeries(tasks: Array<iSerie>) {
        localStorage.setItem(this.store, JSON.stringify(tasks));
    }

    seleteSeries() {
        localStorage.removeItem(this.store);
    }
}
