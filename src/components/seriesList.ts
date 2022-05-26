/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import { Component } from './component.js';
import { Serie } from './serie.js';
import { seriesList } from '../models/data.js';

export class SeriesList extends Component implements iComponent {
    series: Array<any>;
    watched: boolean;
    list: Array<any>;
    // unviuewed: Array<any>;

    constructor(selector: string, watched: boolean) {
        super();
        this.series = seriesList;
        this.watched = watched;
        this.list = [];
        this.template = this.createTemplate();
        this.render(selector);
    }

    createTemplate() {
        let html: string = '';
        // eslint-disable-next-line no-extra-boolean-cast
        if(!!this.watched){
            this.list = this.series.filter((item) => item.watched === true);
            console.log(this.list);
            html = `
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have 4 series pending to watch</p>
                <!--<p class="info">Congrats! You've watched all your series</p>-->
                <ul class="series-list">
            `;
        } else if(!this.watched){
            this.list = this.series.filter((item) => item.watched === false);
            console.log(this.list);
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
                <input type="radio" id="age1" name="age" value="30">
                <i class="icon--score fas fa-star" title="1/5"></i>
              </li>
              <li class="score__star">
                <i class="icon--score fas fa-star" title="2/5"></i>
              </li>
              <li class="score__star">
                <i class="icon--score fas fa-star" title="3/5"></i>
              </li>
              <li class="score__star">
                <i class="icon--score fas fa-star" title="4/5"></i>
              </li>
              <li class="score__star">
                <i class="icon--score fas fa-star" title="5/5"></i>
              </li>
            </ul>
            <i class="fas fa-times-circle icon--delete"></i>
          </li>`
        });


        return html;
    }
}
