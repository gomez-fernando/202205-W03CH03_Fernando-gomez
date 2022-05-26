

import { SeriesList } from "../components/seriesList.js";



export function index() {
    
    new SeriesList('section.series-pending', false);
    new SeriesList('section.series-watched', true);
}
