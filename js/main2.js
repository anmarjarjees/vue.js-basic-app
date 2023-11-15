// our JS code:
document.getElementById("year").innerText = new Date().getFullYear();

const app = Vue.createApp({    
    data () {
        return {
            // 1. adding the text
            product: 'CASIO PXS7000 Stage Piano',
            description: 'comes with different options and colors',
            
            // 2. adding the image for v-bind
            image: 'img/casio-b.avif',
            // Task: Add url for an anchor tag with v-bind
            url:'https://music.casio.com/intl/electronic-musical-instruments/privia/',
        }
    }
});