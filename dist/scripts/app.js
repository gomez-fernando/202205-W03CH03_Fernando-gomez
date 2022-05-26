import { index } from '../page/index.js';
import { StoreClass } from "../services/store.class.js";
import { SERIES } from '../models/data.js';
(() => {
    if (localStorage.getItem('Series') === null) {
        new StoreClass().setSeries(SERIES);
    }
    document.addEventListener('DOMContentLoaded', index);
})();
