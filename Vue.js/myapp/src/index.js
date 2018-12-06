require('./main.scss');
// import App from './App.vue'
import Vue from 'vue';
import ImagePlaceholder from './components/ImagePlaceholder.vue';
import ImageButton from './components/ImageButton.vue';
import App from './components/app.vue';

let app = new Vue({
    el: '#app',
    components: {
        'app':App
    },
    data: {
        // text: 'Hello from Vue',
        // image: '../dist/img/4.jpg'       
    },
    // template: '<div class="center">{{ text }}</div>',
    // template: '<div class="button"></div>',
});


