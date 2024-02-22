class Cart extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.uuid = null
    this.fingerprint = null
  }

  async connectedCallback () {
    // if (!document.setFingerprint) {
    //   document.addEventListener('setFingerprint', this.handleSetFingerprint.bind(this))
    //   document.setFingerprint = true
    // }

    // if (!document.addToCart) {
    //   document.addEventListener('addToCart', this.handleAddToCart.bind(this))
    //   document.addToCart = true
    // }

    // if (!localStorage.getItem('cartUuid')) {
    //   const json = {
    //     fingerprint: this.fingerprint
    //   }

    //   const response = {
    //     uuid: '051e7702-1366-4fe9-8661-fac78acf3480'
    //   }

    //   this.uuid = response.uuid
    //   localStorage.setItem('cartUuid', this.uuid)
    // } else {
    //   this.uuid = localStorage.getItem('cartUuid')
    // }

    this.loadData().then(() => this.render())
  }

  async handleSetFingerprint (event) {
    this.fingerprint = event.detail.fingerprint
    this.loadData().then(() => this.render())
  }

  async handleAddToCart (event) {
    this.shadow.querySelector('.overlay').classList.toggle('active')
    this.shadow.querySelector('.cart').classList.toggle('active')
    document.body.classList.toggle('block-scroll')
    this.shadow.querySelector('.waiting').classList.add('active')

    const json = {
      productId: event.detail.productId,
      cartUuid: JSON.parse(localStorage.getItem('cartUuid'))
    }

    setTimeout(() => {
      const response = {
        id: 7,
        productId: 1,
        path: '/juegos/call-of-duty',
        title: 'Producto 7',
        price: 100,
        priceBeforeDiscount: 120,
        image: {
          url: 'https://picsum.photos/50/50',
          alt: 'Producto 1'
        }
      }

      if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]))
      }

      const cart = JSON.parse(localStorage.getItem('cart'))
      cart.push(response.productId)
      localStorage.setItem('cart', JSON.stringify(cart))

      this.products.push(response)
      this.shadow.querySelector('.waiting').classList.remove('active')
      this.render('active')
    }, 1000)
  }

  async loadData () {
    this.products = [
      {
        id: 1,
        path: '/juegos/call-of-duty',
        title: 'Taller de marionetas',
        image: {
          url: 'https://picsum.photos/50/50',
          alt: 'Producto 1'
        }
      },
      {
        id: 2,
        path: '/juegos/call-of-duty',
        title: 'Taller de pintura para niños',
        image: {
          url: 'https://picsum.photos/50/50',
          alt: 'Producto 2'
        }
      },
      {
        id: 3,
        path: '/juegos/call-of-duty',
        title: 'Charla sobre la importancia de la lectura en la infancia',
        image: {
          url: 'https://picsum.photos/50/50',
          alt: 'Producto 3'
        }
      },
      {
        id: 1,
        path: '/juegos/call-of-duty',
        title: 'Taller de marionetas',
        image: {
          url: 'https://picsum.photos/50/50',
          alt: 'Producto 1'
        }
      },
      {
        id: 2,
        path: '/juegos/call-of-duty',
        title: 'Taller de pintura para niños',
        image: {
          url: 'https://picsum.photos/50/50',
          alt: 'Producto 2'
        }
      },
      {
        id: 3,
        path: '/juegos/call-of-duty',
        title: 'Charla sobre la importancia de la lectura en la infancia',
        image: {
          url: 'https://picsum.photos/50/50',
          alt: 'Producto 3'
        }
      }
    ]
  }

  render (open = null) {
    this.shadow.innerHTML =
    /* html */`
    <style>
      :host{
        justify-self: flex-end;
      }

      .cart-button{
        background: transparent;
        border: none;
        cursor: pointer;
      }

      .cart-button svg{
        fill: hsl(0, 0%, 100%);
        height: 2rem;
        width: 2rem;
      }

      .cart-button.active svg{
        fill: hsl(146deg 50% 45%);
      }

      .overlay{
        background-color: rgba(0, 0, 0, 0.4);
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        visibility: hidden;
        z-index: -1;
      }

      .overlay.active{
        visibility: visible;
        z-index: 1000;
      }

      .cart{
        background-color: hsl(0, 0%, 100%);
        min-height: 100vh;
        max-height: 100vh;
        opacity: 0;
        position: fixed;
        right: -400px;
        transition: right 0.2s ease-in-out, opacity 0.2s ease-in-out;
        top: 0;
        width: 400px;
        z-index: 1001;
      }

      .cart.active{
        right: 0;
        opacity: 1;
      }

      .cart-header{
        background-color: hsl(236 55% 25%);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem ;
      }

      .cart-header-title{
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

      .cart-header-title h4{
        color: hsl(0, 0%, 100%);
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
      }

      .cart-header-subtitle p{
        color: hsl(0, 0%, 100%);
        font-family: 'Poppins', sans-serif;
        font-size: 0.8rem;
        margin: 0;
      }

      .close-button{
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
      }

      .close-button svg{
        height: 1.5rem;
        width: 1.5rem;
      }

      .close-button svg path{
        fill: hsl(0, 0%, 100%);
      }

      .cart-no-products{
        display: none;
      }

      .cart-no-products.active{
        display: block;
      }

      .cart-no-products p{
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        font-weight: 700;
        margin: 0;
        text-align: center;
      }

      .cart-products{
        display: flex;
        flex-direction: column;
        min-height: 45vh;
        max-height: 45vh;
        scrollbar-gutter: stable;
        overscroll-behavior-y: contain;
        overflow-y: auto;
        padding: 1rem 0.5rem;
      }

      .cart-products::-webkit-scrollbar{
        width: 0.7rem; 
      }

      .cart-products::-webkit-scrollbar-thumb{
        background-color: hsl(272 40% 35%);
      }

      .cart-products-info {
        background-color: hsl(0, 0%, 100%);
        margin-bottom: 1rem;
      }

      .cart-products-info p{
        font-family: 'Poppins', sans-serif;
        font-size: 0.9rem;
        margin: 0;
      }

      .cart-product{
        align-items: self-start;
        border-bottom: 1px solid hsl(0 1.5% 80%);
        display: grid;
        grid-template-columns: 1fr 10fr 1fr;
        gap: 1rem;
        opacity: 1;
        padding: 1rem 0;
        transition: opacity 0.2s ease-in-out;
      }

      .cart-product.removing{
        opacity: 0;
      }

      .cart-product:last-child{
        border-bottom: none;
      }

      .cart-product .product-info{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .cart-product-image{
        border-radius: 0.5rem;
        height: 50px;
        overflow: hidden;
        width: 50px;
      }

      .cart-product-image img{
        object-fit: cover;
        width: 100%;
      }

      .cart-product a{
        color: hsl(0, 0%, 0%);
        text-decoration: none;
      }

      .cart-product a:hover{
        color: hsl(314 88% 55%)
      }

      .cart-product h5{
        font-family: 'Poppins', sans-serif;
        margin: 0;
      }

      .cart-product span{
        font-family: sans-serif;
        font-size: 0.8rem;
        margin: 0;
        margin-right: 0.5rem;
      }

      .cart-product .remove-button{
        background: transparent;
        border: none;
        cursor: pointer;
        margin-left: auto;
        padding: 0;
        width: max-content;
      }

      .remove-button svg{
        fill: hsl(0, 0%, 0%);
        height: 1rem;
        width: 1rem;
      }

      .cart-footer{
        border-top: 1px dotted hsl(0 1.5% 80%);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        visibility: hidden;
      }

      .cart-footer.active{
        visibility: visible;
      }

      .cart-form form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .form-element{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .form-element-label label{
        font-family: 'Poppins', sans-serif;
        font-size: 0.8rem;
        font-weight: 600;
      }

      .form-element-input input{
        border: 1px solid hsl(0, 0%, 80%);
        border-radius: 0.5rem;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-size: 0.8rem;
        padding: 0.5rem;
        width: 100%;
      }

      .form-element-input label{
        display: flex;
        font-family: 'Poppins', sans-serif;
        font-size: 0.8rem;
        gap: 1rem;
      }

      input[type="checkbox"]{
        width: 1rem;
      }

      .checkout-button{
        background-color: hsl(204, 59%, 51%);
        border: none;
        border-radius: 0.5rem;
        color: hsl(0, 0%, 100%);
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
      }

      .checkout-button:hover {
        filter: brightness(1.2);
      }

      .waiting{
        align-items: center;
        background-color: hsl(0, 0%, 100%, 0.5);
        bottom: 0;
        display: flex;
        justify-content: center;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: opacity 0.2s ease-in-out;
        visibility: hidden;
        z-index: -1;
      }

      .waiting.active{
        opacity: 1;
        visibility: visible;
        z-index: 1001;
      }

      .loading-outer {
        align-items: center;
        animation: rotate-outer 1.5s linear infinite forwards;
        border: 5px solid hsl(284deg 100% 50%);
        border-left-color: transparent;
        border-right-color: transparent;
        border-radius: 50%;
        display: flex;
        height: 70px;
        justify-content: center;
        position: relative;
        width: 70px;
      }

      .loading-outer .loading-inner {
        animation: rotate-inner 1.5s linear infinite forwards;
        border: 5px solid hsl(284deg 100% 50%);
        border-top-color: transparent;
        border-bottom-color: transparent;
        border-radius: inherit;
        height: 0px;
        position: absolute;
        width: 40px;
      }

      @keyframes rotate-outer {
        50%{
          transform: rotate(200deg);
        }
      }

      @keyframes rotate-inner {
        50%{
          transform: rotate(-400deg);
        }
      }
    </style>

    <div class="cart-container">
      <button class="cart-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-clock</title><path d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" /></svg>
      </button>

      <div class="overlay ${open}">
      </div>

      <div class="cart ${open}">
        <div class="cart-header">
          <div class="cart-header-title">
            <h4>Tu horario para el evento</h4>
            <button class="close-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
            </button>
          </div>
          <div class="cart-header-subtitle">
            <p>Dinos cuantas personas quieres apuntar a cada activdad</p>
          </div>
        </div>
        <div class="cart-products"></div>
        <div class="cart-no-products  ${this.products.length === 0 ? 'active' : ''}">
          <p>Aun no te has apuntado a ninguna actividad</p>
        </div>
        <div class="cart-footer ${this.products.length > 0 ? 'active' : ''}">
          <div class="cart-form">
            <form>
              <div class="form-element">
                <div class="form-element-label">
                  <label for="name">Nombre</label>
                </div>
                <div class="form-element-input">
                  <input type="text" id="name" name="name" required>
                </div>
              </div>
              <div class="form-element">
                <div class="form-element-label">
                  <label for="name">Apellidos</label>
                </div>
                <div class="form-element-input">
                  <input type="text" id="name" name="surname" required>
                </div>
              </div>
              <div class="form-element">
                <div class="form-element-label">
                  <label for="email">Email</label>
                </div>
                <div class="form-element-input">
                  <input type="email" id="email" name="email" required>
                </div>
              </div>
              <div class="form-element">
                <div class="form-element-input">
                  <label> 
                    <input type="checkbox" name="newsletter" required>
                    Quiero recibir información sobre futuros eventos
                  </label>
                </div>
              </div>
            </form>
          </div>
          <button class="checkout-button">
            Reserva tu plaza
          </button>
        </div>
        <div class="waiting">
          <div class="loading-outer">
            <div class="loading-inner"></div>
          </div>
        </div>
      </div>
    </div>
    `

    if (this.products.length > 0) {
      this.shadow.querySelector('.cart-button').classList.add('active')
    }

    this.products.forEach(product => {
      const productElement = document.createElement('div')
      productElement.classList.add('cart-product')

      const productImageContainer = document.createElement('div')
      productImageContainer.classList.add('cart-product-image')

      const productImage = document.createElement('img')
      productImage.setAttribute('src', product.image.url)
      productImage.setAttribute('alt', product.image.alt)
      productImageContainer.appendChild(productImage)

      const productInfo = document.createElement('div')
      productInfo.classList.add('product-info')

      const productLink = document.createElement('a')
      productLink.setAttribute('href', product.path)
      productLink.target = '_blank'

      const productTitle = document.createElement('h5')
      productTitle.textContent = product.title
      productLink.appendChild(productTitle)

      const productPlusMinusButton = document.createElement('plus-minus-button-component')
      productPlusMinusButton.setAttribute('product', product.id)

      const productButton = document.createElement('button')
      productButton.classList.add('remove-button')
      productButton.dataset.id = product.id
      productButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>'

      productElement.appendChild(productImageContainer)
      productInfo.appendChild(productLink)
      productInfo.appendChild(productPlusMinusButton)
      productElement.appendChild(productInfo)
      productElement.appendChild(productButton)

      this.shadow.querySelector('.cart-products').appendChild(productElement)
    })

    this.shadow.querySelector('.cart-container').addEventListener('click', event => {
      if (event.target.closest('.cart-button') || event.target.closest('.close-button') || event.target.closest('.overlay')) {
        this.shadow.querySelector('.overlay').classList.toggle('active')
        this.shadow.querySelector('.cart').classList.toggle('active')
        document.body.classList.toggle('block-scroll')
      }

      if (event.target.closest('.remove-button')) {
        const id = parseInt(event.target.closest('.remove-button').dataset.id)
        this.shadow.querySelector('.waiting').classList.add('active')

        setTimeout(() => {
          this.products = this.products.filter(product => product.id !== id)
          this.shadow.querySelector('.waiting').classList.remove('active')
          this.render('active')
        }, 1000)
      }

      if (event.target.closest('.checkout-button')) {
        this.shadow.querySelector('.overlay').classList.toggle('active')
        this.shadow.querySelector('.cart').classList.toggle('active')

        document.dispatchEvent(new CustomEvent('openCheckout', {
          detail: {
            products: this.products
          }
        }))
      }
    })
  }
}

customElements.define('cart-component', Cart)
