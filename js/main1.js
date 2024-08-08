// our JavaScript simple code:
document.getElementById("year").innerText = new Date().getFullYear();

// How to connect our product value with our HTML page?
// const product = "CASIO PXS7000 Stage Piano";
// Using Vue app:


// our Vue App code:
/* 
To use Vue, we need to create a "Vue" application
By convention we call it "app" as we created Express app.

Creating a vue app by using the following template:
> const app = Vue.createApp({ })

Notice we are passing the options object { } 
for adding optional properties:
- "data" property of "function()"

NOTE: At least we have to pass an empty object { } to start our Vue app
*/
const app = Vue.createApp({
    /* 
    Adding "data" property for the Vue App to act as a function:

    1) we can use the JS previous version syntax:
    data: function() {...}

    2) Or ES6 Shorthand Syntax as shown below:
    */
    data() {
        /*
        The function returns another object for storing the data
        */
        return {
            // 1. adding the text
            product: 'CASIO PXS7000 Stage Piano',

            // Task: Add "description" to be linked to <p> element
            description: 'comes with different options and colors',
        }
    }
});