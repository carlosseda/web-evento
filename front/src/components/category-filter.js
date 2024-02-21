class CategoryFilter extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    await this.render()
  }

  render () {
    this.shadow.innerHTML =
    /* html */`
    <style>
      .categories{
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(3, minmax(0, 200px));
        justify-content: center;
        margin: 2rem 0;
      }

     .category {
        align-items: center;
        background-color: hsl(204, 59%, 51%);
        border-radius: 1rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        padding: 1rem 1rem;
      }

      .category h3 {
        color: hsl(0, 0%, 100%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0;
        text-align: center;
        text-transform: capitalize;
      }

      @media (hover: hover) {
        .category:hover{
          background-color: hsl(204, 59%, 61%);
        }
      }

    </style>

    <section class="categories">
      <div class="category">
        <h3>Familias</h3>
      </div>
      <div class="category">
        <h3>Adultos</h3>
      </div>
      <div class="category">
        <h3>Niños</h3>
      </div>
    </section>
    `
  }
}

customElements.define('category-filter-component', CategoryFilter)
