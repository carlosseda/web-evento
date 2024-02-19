class Logo extends HTMLElement {
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
          .logo svg{
            fill: hsl(295 55% 65%);
            height: 3rem;
            width: 3rem;
          }

          @media (min-width: 601px) {
            .logo svg{
              height: 5rem;
              width: 5rem;
            }
          }

          @media (min-width: 601px) and (orientation: landscape) {
            .logo svg{
              height: 2.5rem;
              width: 2.5rem;
            }
          }

          @media (min-width: 1025px) and (max-width: 1920px) {
            .logo svg{
              height: 5rem;
              width: 5rem;
            }
          }

          @media (min-width: 1921px) {

          }
        </style>
        <div class="logo">
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H11V3M13,3V11H21V5C21,3.89 20.11,3 19,3M13,13V21H19C20.11,21 21,20.11 21,19V13" />
            </svg>
          </a>
        </div>
      `
  }
}

customElements.define('logo-component', Logo)
