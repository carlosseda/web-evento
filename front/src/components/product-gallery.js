class ProductGallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.products = []
  }

  async connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
    /* html */`
    <style>
      .gray {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .tomato {
        background-color: Tomato;
      }
      .orange {
        background-color: Orange;
      }
      .dodgerBlue {
        background-color: DodgerBlue;
      }
      .mediumSeaGreen {
        background-color: MediumSeaGreen;
      }
      .gray {
        background-color: gray;
      }
      .slateBlue {
        background-color: SlateBlue;
      }
      .violet {
        background-color: Violet;
      }

      .product-gallery {
        display: grid;
        min-height: 100vh;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 200px;
        grid-auto-flow: row dense;
        grid-gap: 10px;
        padding: 10px;
        background-color: #ddd;
        box-sizing: border-box;
      }

      .product {
        border-radius: 5px;
        padding: 15px;
        font-size: 28px;
        font-weight: 600;
        color: white;
      }

      .product.frame-1x1 {
        grid-column: span 1;
        grid-row: span 1;
      }

      .product.frame-2x2 {
        grid-column: span 2;
        grid-row: span 2;
      }

      .product.frame-1x2 {
        grid-column: span 1;
        grid-row: span 2;
      }

      .product.frame-2x1 {
        grid-column: span 2;
        grid-row: span 1;
      }

      
    </style>

    <section class="product-gallery">
      <div class="product frame-1x1 tomato">
        <div class="product-details">
          <h3>Product 1</h3>
          <p>Product description</p>
        </div>
      </div>
      <div class="product frame-2x2 slateBlue">2</div>
      <div class="product frame-1x2 orange">3</div>
      <div class="product frame-1x1 gray">4</div>
      <div class="product frame-2x1 dodgerBlue">5</div>
      <div class="product frame-2x1 gray">6</div>
      <div class="product frame-3x1 mediumSeaGreen">7</div>
      <div class="product frame-1x1 gray">8</div>
      <div class="product frame-2x2 slateBlue">9</div>
      <div class="product frame-1x1 gray">10</div>
      <div class="product frame-1x1 violet">11</div>
      <div class="product frame-1x1 gray">12</div>
      <div class="product frame-2x1 tomato">13</div>
      <div class="product frame-1x1 gray">14</div>
    </section>
    `
  }
}

customElements.define('product-gallery-component', ProductGallery)
