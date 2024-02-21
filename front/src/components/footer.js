class Footer extends HTMLElement {
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
      </style>
      <footer>
        <slot></slot>
      </footer>
    `
  }
}

customElements.define('footer-component', Footer)
