class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
      }
    connectedCallback() {
      this.render();
    }
   
    render() {
        this.shadowDOM.innerHTML= `
        <style>
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
            :host {
            display: block;
            padding: 1px;
            width: 100%;
            background-color: rgb(210 105 30);
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        h1 {
            padding: 16px;
          }
      </style>
        <h1>GoFood</h1> `;
    }
  }
   
  customElements.define('app-bar', AppBar);