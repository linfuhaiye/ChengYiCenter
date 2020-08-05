import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'root',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    let query = to.query;
    if (localStorage.getItem(to.path) != null) {
        query = JSON.parse(localStorage.getItem(to.path));
    } else {
        localStorage.setItem(to.path, JSON.stringify(to.query));
    }
    router.app.$options.store.commit('initialShowDocument');
    router.app.$options.store.commit('changeShowDocument', query);
    next();
});

export default router;
