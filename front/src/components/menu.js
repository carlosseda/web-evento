class Menu extends HTMLElement {
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
          color: red;
        }
      </style>

      <h2>Menu</h2>
    `
  }
}

customElements.define('menu-component', Menu)
