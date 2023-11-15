// our JS code:
document.getElementById("year").innerText = new Date().getFullYear();

// const product = "Pianos";

// Creating a vue app: Using the template => const app = Vue.createApp({ })
/*
Passing the options object { } 
for adding optional properties:
- "data" property of "function()"

NOTE: At least we have to pass an empty object
*/
const app = Vue.createApp({
    // using data: function() {...}
    // OR the ES5
    data () {
        /*
        The function returns another object for storing the data
        */
        return {
            // 1. adding the text
            product: 'CASIO PXS7000 Stage Piano',

            // Task: Add "description" to be linked to p element
            description: 'comes with different options and colors',
        }
    }
});