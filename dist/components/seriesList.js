import { Component } from './component.js';
import { StoreClass } from '../services/store.class.js';
export class SeriesList extends Component {
    selector;
    series;
    watched;
    list;
    constructor(selector, watched) {
        super();
        this.selector = selector;
        this.series = new StoreClass().getSeries();
        this.watched = watched;
        this.list = [];
        this.scoreStar();
        this.updateComponent();
    }
    createTemplate() {
        let html = '';
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!this.watched) {
            this.list = this.series.filter((item) => item.watched === true);
            html = `
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have 4 series pending to watch</p>
                <!--<p class="info">Congrats! You've watched all your series</p>-->
                <ul class="series-list">
            `;
        }
        else if (!this.watched) {
            this.list = this.series.filter((item) => item.watched === false);
            html = `
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have watched 4 series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">
            `;
        }
        this.list.forEach(element => {
            html += `<li class="serie">
            <img
              class="serie__poster"
              src="${element.poster}"
              alt="The Sopranos poster"
            />
            <h4 class="serie__title">${element.name}</h4>
            <p class="serie__info">${element.creator} (${element.year})</p>
            <ul class="score">
              <li class="score__star">
                <i data-name="${element.name}" data-star="1" data-name="" class="icon--score ${element.score > 0 ? 'fas' : 'far'} fa-star" title="1/5"></i>
              </li>
              <li class="score__star">
                <i data-name="${element.name}" data-star="2" class="icon--score ${element.score > 1 ? 'fas' : 'far'} fa-star" title="2/5"></i>
              </li>
              <li class="score__star">
                <i data-name="${element.name}" data-star="3" class="icon--score ${element.score > 2 ? 'fas' : 'far'} fa-star" title="3/5"></i>
              </li>
              <li class="score__star">
                <i data-name="${element.name}" data-star="4" class="icon--score ${element.score > 3 ? 'fas' : 'far'} fa-star" title="4/5"></i>
              </li>
              <li class="score__star">
                <i data-name="${element.name}" data-star="5" class="icon--score ${element.score > 4 ? 'fas' : 'far'} fa-star" title="5/5"></i>
              </li>
            </ul>
            <i data-name="${element.name}" class="fas fa-times-circle icon--delete"></i>
          </li>`;
        });
        return html;
    }
    scoreStar() {
        document
            .querySelectorAll('.score__star i')
            .forEach((item) => {
            item.addEventListener('click', this.handlerButton.bind(this));
        });
    }
    handlerButton(ev) {
        const starTitle = ev.target.dataset.star;
        const starName = ev.target.dataset.name;
        const item = this.series.find(element => element.name === starName);
        if (item !== undefined && starTitle !== undefined) {
            item.score = parseInt(starTitle, 10);
            item.watched = true;
            new StoreClass().setSeries(this.series);
            new SeriesList('section.series-pending', false);
            new SeriesList('section.series-watched', true);
        }
    }
    manageComponent() {
        document
            .querySelectorAll('.icon--delete')
            .forEach((item) => item.addEventListener('click', this.deleteSerie.bind(this)));
    }
    deleteSerie(ev) {
        const circleName = ev.target.dataset.name;
        if (this.series.find(element => element.name === circleName) !== null) {
            const series2 = this.series.filter(serie => serie.name !== circleName);
            this.series = series2;
            new StoreClass().setSeries(this.series);
            new SeriesList('section.series-pending', false);
            new SeriesList('section.series-watched', true);
        }
    }
    updateComponent() {
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();
    }
}
