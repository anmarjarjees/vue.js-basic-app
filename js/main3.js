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

            // 4. adding more logical condition for > or < using numbers: put 12, 7, and 0 for testing
            inventory: 12,

            // Task: adding onSale for more practicing the boolean property with conditions
            onSale: true,
        }
    }
});