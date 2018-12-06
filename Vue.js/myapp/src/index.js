require('./main.scss');
// import App from './App.vue'
import Vue from 'vue';
// import ImagePlaceholder from './components/ImagePlaceholder';
// import ImageChangeButton from './components/ImageChangeButton';

let app = new Vue({
    el: '#app',
    data: {
        text: 'Hello from Vue'
    },
    template: '<div class="center">{{ text }}</div>',
    
});


