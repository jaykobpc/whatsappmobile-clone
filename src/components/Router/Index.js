import Vue from 'vue';
import VueRouter from 'vue-router';

/**routes */
import HelloWorld from '../HelloWorld';
import Chatview from '../Chatview/Chatview';
import Contactview from '../Contacts/Contactview';
import Settingsview from '../Settingsview/Settings';

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
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contactview
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settingsview
    }
];

const router = new VueRouter({
    routes,
});

export default router;