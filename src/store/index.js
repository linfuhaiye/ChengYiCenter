import Vue from 'vue';
import Vuex from 'vuex';
import { getToken, removeToken } from '@/miscs/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 场景
        menus: [],

        // 菜单
        menu: {
            code: 'Home'
        },

        // 菜单项
        menuItem: {},

        // 身份信息：token
        token: getToken()
    },
    mutations: {
        /**
         * 设值菜单
         *
         * @param {*} state 状态
         * @param {*} data 数据
         */
        setMenus(state, data) {
            state.menus = data.menus;
        },

        /**
         * 改变菜单
         *
         * @param {*} state 状态
         * @param {*} data 数据
         */
        changeMenu(state, data) {
            state.menu = data.menu;
            if (typeof data.menu.children !== 'undefined' && data.menu.children.length > 0) {
                state.menuItem = data.menu.children[0];
            } else {
                state.menuItem = data.menu;
            }
        },

        /**
         * 改变菜单项
         *
         * @param {*} state 状态
         *@param {*} data 数据
         */
        changeMenuItem(state, data) {
            state.menu = data.menu;
            state.menuItem = data.menuItem;
        },

        /**
         * 设值token
         */
        setToken: (state, token) => {
            state.token = token;
        },

        /**
         * 注销
         */
        fedLogout() {
            this.commit('setToken', '');
            removeToken();
        }
    },
    actions: {},
    modules: {}
});
