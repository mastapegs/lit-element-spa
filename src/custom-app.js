import { html, css, LitElement } from 'lit-element'

class CustomApp extends LitElement {

  static get styles() {
    return css`
      .container {
        color: white;
        width: 80%;
        margin: 40px auto;
        padding: 10px;
        background: hsla(0, 0%, 40%, 1);
        border-radius: 20px;
        box-shadow: 0px 0px 10px 10px hsla(0, 0%, 40%, 1);
        font: 16px/1.5 Arial, Helvetica, sans-serif;
      }
    `
  }

  static get properties() {
    return {
      numbers: { type: Array }
    }
  }

  constructor() {
    super()
    this.numbers = [1, 2, 3]
  }

  _addNumber(event) {
    if (this.numbers.length !== 0) this.numbers = [...this.numbers, this.numbers[this.numbers.length - 1] + 1]
    else this.numbers = [1]
  }

  _removeNumber(event) {
    if (this.numbers.length) {
      this.numbers = this.numbers.slice(0, this.numbers.length - 1)
    }
  }

  render() {
    return html`
      <div class="container">
        <h1>Hello from LitElement</h1>
        <p>Writing out pure html within lit-html html tag template</p>
        <button @click="${this._addNumber}">Increment List</button>
        <button @click="${this._removeNumber}">Decrement List</button>
        <h2>Creating a list with JavaScript</h2>
        <ul>
          ${this.numbers.map(number => html`<li>${number}</li>`)}
        </ul>
      </div>
    `
  }

}

customElements.define('custom-app', CustomApp)