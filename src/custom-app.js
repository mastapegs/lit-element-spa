import { html, LitElement } from 'lit-element'

class CustomApp extends LitElement {
  render() {
    return html`
      <h1>Hello from LitElement</h1>
      <p>Writing out pure html within lit-html html tag template</p>
      <h2>Creating a list with JavaScript</h2>
      <ul>
        ${[1, 2, 3, 4, 5].map(number => html`<li>${number}</li>`)}
      </ul>
      <h2>Creating a table with JavaScript</h2>
      <table>
        ${[1, 2, 3, 4, 5].map(number => html`<tr><td>${number}</td></tr>`)}
      </table>
    `
  }
}

customElements.define('custom-app', CustomApp)