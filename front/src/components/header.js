class Header extends HTMLElement {
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
        header{
          align-items: center;
          background-color: hsla(0, 0%, 20%, 0.5);
          box-sizing: border-box;
          display: flex;
          height: 10vh;
          max-height: 10vh;
          justify-content: space-between;
          padding: 0 2rem;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 5000;
        }
      </style>
      <header>
        <slot></slot>
      </header>
    `
  }
}

customElements.define('header-component', Header)
