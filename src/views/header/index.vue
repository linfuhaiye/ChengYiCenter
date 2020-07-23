<template>
    <div>
        <span style="height: 150px; margin-top: 10px;">
            <div class="logo">
                <a href="http://cyweb.xmzgzn.cn/cysyjx/index.php">
                    <img src="../../assets/logo.png" />
                </a>
                <span>检测与自动控制虚拟仿真实验教学中心</span>
            </div>
            <div>
                <div class="nav_wrap">
                    <div class="nav">
                        <ul style="list-style: none;    margin-left: -40px;">
                            <li>
                                <a href="javascript:void(0);" @click="changeMenu(filterHome[0])">首页</a>
                            </li>
                            <li v-for="menu in filterMenus" :key="menu.id">
                                <a href="javascript:void(0);" @click="changeMenu(menu)">{{ menu.name }}</a>
                                <div v-if="menu.has_child === 1 && typeof menu.children !== 'undefined' && menu.children.length > 0" class="subnav">
                                    <div v-for="menuItem in menu.children" :key="menuItem.id" class="subnav-box">
                                        <a href="javascript:void(0);" @click="changeMenuItem(menu, menuItem)">{{ menuItem.name }}</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </span>
    </div>
</template>

<script>
import './index.scss';
import request from '@/miscs/request';
import { noAuthLogin } from '@/api/login';

export default {
    name: 'HeaderIndex',
    data() {
        return {
            menus: [],
            url: '/online/cgform/api/getData/49472539ad944785bf5aafa488e59966'
        };
    },
    computed: {
        filterHome: function() {
            return this.menus.filter(function(menu) {
                return menu.code === 'Home';
            });
        },
        filterMenus: function() {
            return this.menus.filter(function(menu) {
                return menu.code !== 'Home';
            });
        }
    },
    mounted() {
        this._noAuthLogin();
    },
    methods: {
        _noAuthLogin() {
            noAuthLogin().then(() => {
                this._getData();
            });
        },
        _getData() {
            request({
                url: this.url,
                method: 'get',
                params: {
                    _t: new Date().getTime(),
                    parent_id: '4028bb817305cdab01730d627ddf0024',
                    column: 'createTime',
                    order: 'esc',
                    pageNo: 1,
                    pageSize: 10,
                    superQueryMatchType: 'and'
                }
            })
                .then(resData => {
                    if (typeof resData.result.records !== 'undefined' && resData.result.records.length > 0) {
                        this.menus = resData.result.records;
                        this._getMenuItems(this.menus);
                    } else {
                        this.menus = [];
                    }
                })
                .catch(() => {});
        },
        _getMenuItems(menus) {
            if (menus.length > 0) {
                menus.forEach(menu => {
                    request({
                        url: this.url,
                        method: 'get',
                        params: {
                            _t: new Date().getTime(),
                            parent_id: menu.id,
                            column: 'createTime',
                            order: 'esc',
                            pageNo: 1,
                            pageSize: 20,
                            superQueryMatchType: 'and'
                        }
                    })
                        .then(resData => {
                            if (typeof resData.result.records != 'undefined' && resData.result.records.length > 0) {
                                let newMenus = [];
                                this.menus.forEach(newMenu => {
                                    let addMenu = {};
                                    if (newMenu.id === resData.result.records[0].parent_id) {
                                        addMenu = {
                                            children: resData.result.records,
                                            ...newMenu
                                        };
                                        newMenus.push(addMenu);
                                    } else {
                                        newMenus.push(newMenu);
                                    }
                                });
                                this.menus = newMenus;
                                this.setMenus(newMenus);
                            }
                        })
                        .catch(() => {
                            menu.children = [];
                        });
                });
            }
        },
        changeMenu(menu) {
            this.$store.commit('changeMenu', { menu: menu });
        },
        changeMenuItem(menu, menuItem) {
            this.$store.commit('changeMenuItem', { menu: menu, menuItem: menuItem });
        },
        setMenus(menus) {
            this.$store.commit('setMenus', { menus: menus });
        }
    }
};
</script>
