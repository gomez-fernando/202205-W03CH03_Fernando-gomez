import { Component } from './component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        return `
        <header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
        `;
    }
}
