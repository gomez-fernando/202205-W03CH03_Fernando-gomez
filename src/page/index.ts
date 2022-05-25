// import { Header } from '../components/header.js';
// import { HeaderMainSection } from '../components/headerMainSection.js';

import { SeriesList } from "../components/seriesList.js";


export function index() {
    new SeriesList('.series-list');
    // new HeaderMainSection('div.container > section.series');
}
