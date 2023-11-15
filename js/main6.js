// our JS code:
document.getElementById("year").innerText = new Date().getFullYear();

const app = Vue.createApp({
    data() {
        return {
            // 1. adding the text
            product: 'CASIO PXS7000 Stage Piano',
            description: 'comes with different options and colors',

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
            Updating each object by adding an image path
            */
            options: [
                /*
                For the part of "Class & Style Binding"
                I changed the color values from text to hex values
                */
                {
                    id: 1010, color: '#000', image: "./img/casio-b.avif"
                },
                {
                    id: 1020, color: '#fff', image: "./img/casio-w.avif"
                },
                {
                    id: 1030, color: '#e6b800', image: "./img/casio-y.avif"
                }
            ],

            // adding cart option for number of items:
            cart: 0,

            /*
            Instead of adding a list of CSS properties as inline styles!
            we can create an object the lives within our data() { } 
            attache all the needed styles to this object:
            */
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
    } // end methods
});