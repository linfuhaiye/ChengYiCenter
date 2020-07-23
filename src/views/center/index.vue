<template>
    <div>
        <div class="ny_banner_wrap ny_banner_bg01" style="margin-top: 3px;">
            <div class="w1200">
                <p class="tit">{{ menu.name }}</p>
                <div class="clear"></div>
                <div class="crumb" style="color:white">
                    <div itemscope="" itemtype="http://schema.org/WebPage" id="crumbs" style="    margin-top: -25px;">
                        您当前位置：
                        <span class="current">{{ menu.name }}</span>
                        » <span class="current">{{ menuItem.name }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!--内页主体 start-->
        <div class="ny_main_wrap">
            <div class="w1200">
                <div class="ny_con">
                    <div class="fl" style="max-height: 200px;">
                        <div class="nav_tit" style="text-align: left">{{ menu.name }}</div>
                        <div class="clear"></div>
                        <ul v-if="typeof menu.children != 'undefined' && menu.children.length > 0" style="list-style: none;margin-left: -40px;">
                            <li
                                v-for="item in menu.children"
                                :key="item.id"
                                :class="item.id === menuItem.id ? 'current-menu-item' : ''"
                                @click="changeMenuItem(menu, item)"
                            >
                                <a>{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="fr">
                        <div class="nav_tit">{{ menuItem.name }}</div>
                        <div class="clear"></div>
                        <div v-if="menuItem.has_child === 0" class="ny_wrap" v-html="menuItem.content"></div>
                        <div v-else class="ny_wrap">
                            <div v-if="typeof selectItem !== 'undefined' && selectItem != null">
                                <div v-html="selectItem.content"></div>
                            </div>
                            <div
                                v-else-if="
                                    typeof menuItem.children !== 'undefined' &&
                                        typeof menuItem.children[0].icon !== 'undefined' &&
                                        menuItem.children[0].icon != null
                                "
                            >
                                <div class="news_list" v-for="item in menuItem.children" :key="item.id">
                                    <dl>
                                        <a href="javascrip:void(0);" @click="selectMenuItem(item)">
                                            <dt><img :src="item.icon" /></dt>
                                            <dd>
                                                <h3>{{ item.name }}</h3>
                                                <p v-html="item.content"></p>
                                                <span>{{ formateTime(item.release_date) }}</span>
                                                <p class="more">了解详细</p>
                                            </dd>
                                        </a>
                                    </dl>
                                </div>
                            </div>
                            <div v-else>
                                <div class="about_detail" v-for="item in filterNoIconMenus" :key="item.id">
                                    <a
                                        href="javascrip:void(0);"
                                        style="display:inline-block; width:80%; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;"
                                        @click="selectMenuItem(item)"
                                    >
                                        {{ item.name }}
                                    </a>
                                    <span style="display:inline-block; overflow:hidden; margin-left: 20px;">
                                        {{ formateTime(item.release_date) }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import './index.scss';
import request from '@/miscs/request';

export default {
    name: 'CenterIndex',
    data() {
        return {
            menu: {},
            menuItem: {},
            url: '/online/cgform/api/getData/49472539ad944785bf5aafa488e59966',
            selectItem: null
        };
    },
    computed: {
        filterHasIconMenus: function() {
            if (typeof this.menuItem.children === 'undefined') {
                return [];
            } else {
                return this.menuItem.children.filter(function(menu) {
                    return typeof menu.icon !== 'undefined' && typeof menu.icon == 'object' && menu.icon != null;
                });
            }
        },
        filterNoIconMenus: function() {
            if (typeof this.menuItem.children === 'undefined') {
                return [];
            } else {
                return this.menuItem.children.filter(function(item) {
                    return typeof item.icon == 'undefined' || (typeof item.icon == 'object' && item.icon == null);
                });
            }
        },
        watchMenu() {
            return this.$store.state.menu;
        },
        watchMenuItem() {
            return this.$store.state.menuItem;
        }
    },
    created() {
        // this.getData();
    },
    mounted() {
        this.initial();
    },
    watch: {
        watchMenu(newVal) {
            this.menu = newVal;
        },
        watchMenuItem(newVal) {
            this.menuItem = newVal;
            if (this.menuItem.has_child === 1) {
                this.getItemChildren();
            }
        }
    },
    methods: {
        initial() {
            this.menu = this.$store.state.menu;
            this.menuItem = this.$store.state.menuItem;
            if (this.menuItem.has_child === 1) {
                this.getItemChildren();
            }
        },
        changeMenu(menu) {
            this.selectItem = null;
            this.$store.commit('changeMenu', { menu: menu });
        },
        changeMenuItem(menu, menuItem) {
            this.selectItem = null;
            this.$store.commit('changeMenuItem', { menu: menu, menuItem: menuItem });
        },
        selectMenuItem(menuItem) {
            this.selectItem = menuItem;
        },
        getItemChildren() {
            request({
                url: this.url,
                method: 'get',
                params: {
                    _t: new Date().getTime(),
                    parent_id: this.menuItem.id,
                    column: 'createTime',
                    order: 'esc',
                    pageNo: 1,
                    pageSize: 20,
                    superQueryMatchType: 'and'
                }
            })
                .then(resData => {
                    if (typeof resData.result.records != 'undefined' && resData.result.records.length > 0) {
                        let newMenuItem = {};
                        if (this.menuItem.id === resData.result.records[0].parent_id) {
                            newMenuItem = {
                                children: resData.result.records,
                                ...this.menuItem
                            };
                        }
                        this.menuItem = newMenuItem;
                        console.log(this.menuItem);
                    }
                })
                .catch(() => {});
        },
        formateTime(time) {
            return time.substr(0, 10);
        }
    }
};
</script>
