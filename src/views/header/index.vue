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
                                <a
                                    href="javascript:void(0);"
                                    @click="changeMenu(menu)"
                                >{{ menu.name }}</a>
                                <div
                                    v-if="menu.has_child === '1' && typeof menu.children !== 'undefined' && menu.children.length > 0"
                                    class="subnav"
                                >
                                    <div
                                        v-for="menuItem in menu.children"
                                        :key="menuItem.id"
                                        class="subnav-box"
                                    >
                                        <a
                                            href="javascript:void(0);"
                                            @click="changeMenuItem(menu, menuItem)"
                                        >{{ menuItem.name }}</a>
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
            menuUrl: '/online/cgform/api/getTreeData/497b842359a248bcbc310c2c1a131c74'
        };
    },
    computed: {
        filterHome: function() {
            return this.menus.filter(function(menu) {
                return menu.code === 'HOME';
            });
        },
        filterMenus: function() {
            return this.menus.filter(function(menu) {
                return menu.code !== 'HOME';
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
                url: this.menuUrl,
                method: 'get',
                params: {
                    _t: new Date().getTime(),
                    pid: '1286502364953452545',
                    column: 'sort_no',
                    order: 'asc',
                    pageNo: 1,
                    pageSize: 20,
                    has_child: 1
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
                    if (menu.has_child === '1') {
                        request({
                            url: this.menuUrl,
                            method: 'get',
                            params: {
                                _t: new Date().getTime(),
                                pid: menu.id,
                                column: 'sort_no',
                                order: 'asc',
                                pageNo: 1,
                                pageSize: 20,
                                has_child: 1
                            }
                        })
                            .then(resData => {
                                if (typeof resData.result.records != 'undefined' && resData.result.records.length > 0) {
                                    let newMenus = [];
                                    this.menus.forEach(newMenu => {
                                        let addMenu = {};
                                        if (newMenu.id === resData.result.records[0].pid) {
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
                    }
                });
            }
        },
        changeMenu(menu) {
            if (typeof menu.jump_link !== 'undefined' && menu.jump_link !== null) {
                window.open(menu.jump_link, '_blank');
            } else {
                this.$store.commit('changeMenu', { menu: menu });
                this.$store.commit('initialShowDocument');
            }
        },
        changeMenuItem(menu, menuItem) {
            this.$store.commit('changeMenuItem', { menu: menu, menuItem: menuItem });
            this.$store.commit('initialShowDocument');
        },
        setMenus(menus) {
            this.$store.commit('setMenus', { menus: menus });
        }
    }
};
</script>
