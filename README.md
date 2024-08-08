# vue.js-basic-app
Quick Vue Application for understanding the fundamentals. For more detailed information about using the Vue framework step-by-step, refer to my repo ["vue.js-intro"](https://github.com/anmarjarjees/vue.js-intro) to start learning the essentials of Vue.

# Folder Structure:
- img folder for containing the products images
- css folder for the styles
- js folder for coding our application

Importing the view inside the index.html file:
```
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

## NOTE:
To copy the CDN link, use this link ["Using Vue from CDN"](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn)

# Create Vue Application
In our main JavaScript file:
- Creating the vue app with "Vue.createApp({ })" and passing an object {}
- "app" will be the instance for our Vue application that powers everything
- Adding the "data()" option that returns data 

```
const app = Vue.createApp({

});
```
Vue is "Reactive", it has a "Reactivity System". Changing the value of any item inside data() will automatically update it in the html page. 

You can read more about ["Vue 3 Reactivity"](https://vuejs.org/guide/extras/reactivity-in-depth.html). Or check the ["Reactivity Fundamentals"](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)

# Browser Dev Tools:
In the Console window (TAB), if you type mountedApp.anyDataValue='any value', this will update the product

# Code Sequence:
- Part1: Intro - Adding contents
- Part2: V-Bind
- Part3: Conditional Rendering
- Part4: List Rendering
- Part5: Event Handling
- Part6: Class & Style Binding
- Part7: Computed Properties
#### *NOTE: More topics to be added later if needed*

# References, Resources, and Credits: 
- [My main original repo about "Vue Introduction"](https://github.com/anmarjarjees/vue.js-intro)
- [Vue Guide](https://vuejs.org/guide/introduction.html)
- [Vue Tutorial](https://vuejs.org/tutorial/#step-1)
- [Vue Quick Start](https://vuejs.org/guide/quick-start.html)
- [Getting started with Vue](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/)
- [W3Schools - Vue Tutorial](https://www.w3schools.com/vue/index.php)
- [Vue Mastery Youtube Channel](https://www.youtube.com/c/VueMastery/about)



