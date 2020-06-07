import Vue from 'vue';
import VueRouter from 'vue-router';

/**routes */
import HelloWorld from '../HelloWorld';
import Chatview from '../Chatview/Chatview';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/chats',
        name: 'Chats',
        component: Chatview
    }
];

const router = new VueRouter({
    routes,
});

export default router;