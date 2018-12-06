require('./main.scss');
// import App from './App.vue'
import Vue from 'vue';
import App from './components/app.vue';
import BaseInputText from './components/BaseInputText.vue';
import TodoList from './components/TodoList.vue';
import TodoListItem from './components/TodoListItem.vue';


Vue.config.productionTip = false

let app = new Vue({
    el: '#app',
    // template: '<App/>',
    components: {
        'app':App
    },
});


