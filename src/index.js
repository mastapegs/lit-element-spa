import { html, render } from 'lit-html'
import './custom-app'

render(html`
  <style>
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background: black;
    }
  </style>
  <custom-app></custom-app>
`, document.body)