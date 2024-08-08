// our JS code:
document.getElementById("year").innerText = new Date().getFullYear();

const app = Vue.createApp({
    data() {
        return {
            // 1. adding the text
            product: 'CASIO PXS7000 Stage Piano',
            description: 'comes with different options and colors',

            // for this file index6, adding a new data property: brand
            brand: "Casio Music",

            // 2. adding the image for v-bind
            image: 'img/casio-b.avif',
            url: 'https://music.casio.com/intl/electronic-musical-instruments/privia/',

            // 3. adding boolean property for if condition: modify true/false for testing
            inStock: true,
            // adding more logical condition: put 12, 7, and 0 for testing
            inventory: 12,
            onSale: true,

            // 4. adding a list:
            categories: ['DESIGN', 'SOUND & PLAYABILITY', 'EXPERIENCE', 'LINEUP'],

            /*
            Updating each object by adding a quantity,
            so each individual item (based on its color) can have different quantity
            > Black Color: #000 => 10 items available
            > White Color: #fff => 10 items available
            > Yellow Color => 0 item(s) available (Out of the stock)
            */
            options: [
                {
                    id: 1010, color: '#000', image: "./img/casio-b.avif", quantity: 10
                },
                {
                    id: 1020, color: '#fff', image: "./img/casio-w.avif", quantity: 6
                },
                {
                    id: 1030, color: '#e6b800', image: "./img/casio-y.avif", quantity: 0
                }
            ],

            // adding cart option for number of items:
            cart: 0,

            styles: {
                color: 'darkgreen',
                backgroundColor: 'lightyellow',
                fontStyle: 'italic'
            }
        }
    }, // end data()
    methods: {
        addToCart() {
            // referring to THIS cart within our data:
            this.cart++
        },
        updateImage(styleImage) {
            this.image = styleImage;
        },
        // Task: Add a button for decrement the cart (a method for this option):
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        }
    }, // end methods

    // Adding the "computed" property for "computed properties":
    computed: {
        // Creating a computed property called "title":
        title() {
            // Computing the value of brand + space + product
            return this.brand + ' ' + this.product
        }
    }
}); // end Vue app