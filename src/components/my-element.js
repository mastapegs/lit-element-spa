import { html, LitElement } from 'lit-element'

class MyElement extends LitElement {
  render() {
    return html`
      <h1>Hello from LitElement</h1>
    `
  }
}

customElements.define('my-element', MyElement)