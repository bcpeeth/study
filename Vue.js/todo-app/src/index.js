require('./main.scss');
import Vue from 'vue';

let app = new Vue({
    el: '#app',
    data: {
        text: 'Hello from Vue'
    },
    template: '<div class="center">{{ text }}</div>'
});
