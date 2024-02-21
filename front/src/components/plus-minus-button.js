class PlusMinusButton extends HTMLElement {
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
        .plus-minus-button * { 
          box-sizing: border-box; 
        }

        button {
          border: none;
          border-radius: 0.5rem;
          color: hsl(0, 0%, 100%);
          cursor: pointer;
          height: 2.2rem;
          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
          padding: 0;
          width: 2.2rem;
        }

        .plus-minus-button {
          border-radius: 0.5rem;
          display: flex;
        }

        .minus{
          background-color: hsl(9deg 100% 65%);
        }

        .plus{
          background-color: hsl(146deg 50% 45%);
        }

        input{          
          border: none;
          font-family: 'Poppins', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          text-align: center;
          width: 2rem;
        }

        input:focus {
          outline: none;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        svg {
          fill: hsl(0, 0%, 50%);
          height: 2rem;
          width: 2rem;
        }
      </style>

      <div class="plus-minus-button">
        <button class="minus">-</button>
        <input type="number" value="1">
        <button class="plus">+</button>
      </div>
    `

    this.shadow.querySelector('.plus-minus-button').addEventListener('click', event => {
      const input = this.shadow.querySelector('input')
      let value = parseInt(input.value)

      if (event.target.classList.contains('minus') && value > 1) {
        input.value = --value
      } else if (event.target.classList.contains('plus')) {
        input.value = ++value
      }
    })
  }
}

customElements.define('plus-minus-button-component', PlusMinusButton)
