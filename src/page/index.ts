// import { Header } from '../components/header.js';
// import { HeaderMainSection } from '../components/headerMainSection.js';

import { SeriesList } from "../components/seriesList.js";


export function index() {
    new SeriesList('section.series-pending', false);
    new SeriesList('section.series-watched', true);
    // new HeaderMainSection('div.container > section.series');
}
