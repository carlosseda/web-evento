class Main extends HTMLElement {
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
          .row{
            display: grid;
            gap: 2rem;
            grid-template-columns: repeat(${this.columns}, 1fr);
          }
        </style>
        <main>
          <slot></slot>
        </main>
      `
  }
}

customElements.define('main-component', Main)
