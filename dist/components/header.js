import { Component } from './component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        return `
        
        `;
    }
}
