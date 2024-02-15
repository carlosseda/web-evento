class Faqs extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
    /* html */`
    <style>
      h2{
        color: blue;
      }
    </style>

    <h2>Faqs</h2>
    `
  }
}

customElements.define('faqs-component', Faqs)
