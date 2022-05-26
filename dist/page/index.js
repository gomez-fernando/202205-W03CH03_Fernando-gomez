import { SeriesList } from "../components/seriesList.js";
import { StoreClass } from "../services/store.class.js";
import { SERIES } from '../models/data.js';
export function index() {
    new StoreClass().setTasks(SERIES);
    new SeriesList('section.series-pending', false);
    new SeriesList('section.series-watched', true);
}
