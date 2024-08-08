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
            // more advanced: array of objects (each element is an object of 2 items)
            options: [
                {
                    id: 1010,
                    color: 'Black'
                },
                {
                    id: 1020,
                    color: 'White'
                },
                {
                    id: 1030,
                    color: 'Yellow'
                }
            ]
        }
    }
});