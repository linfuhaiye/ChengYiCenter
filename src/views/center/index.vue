<template>
    <div>
        <div class="ny_banner_wrap ny_banner_bg01" style="margin-top: 3px;">
            <div class="w1200">
                <p class="tit">{{ menu.name }}</p>
                <div class="clear"></div>
                <div class="crumb" style="color:white">
                    <div itemscope itemtype="http://schema.org/WebPage" id="crumbs" style="margin-top: -25px;">
                        您当前位置：
                        <span class="current">{{ menu.name }}</span>
                        »
                        <span class="current">{{ menuItem.name }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!--内页主体 start-->
        <div class="ny_main_wrap">
            <div class="w1200">
                <div class="ny_con">
                    <!-- 左侧列表 -->
                    <div class="fl" style="max-height: 20%;">
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
                    <!-- 右侧内容 -->
                    <div class="fr">
                        <div class="nav_tit">{{ menuItem.name }}</div>
                        <div class="clear"></div>
                        <div v-if="documents.length <= 1" v-html="showDocument.content" class="ny_wrap"></div>
                        <div v-else class="ny_wrap">
                            <div>
                                <div class="news_list" v-for="item in filterHasIconDocuments" :key="item.id">
                                    <dl>
                                        <a href="javascrip:void(0);" @click="selectMenuItem(item)">
                                            <dt>
                                                <img :src="getBaseUrl() + '/' + item.icon" />
                                            </dt>
                                            <dd>
                                                <h3>{{ item.title }}</h3>
                                                <p v-html="item.resume"></p>
                                                <span>{{ formateTime(item.issue_data) }}</span>
                                                <p class="more">了解详细</p>
                                            </dd>
                                        </a>
                                    </dl>
                                </div>
                                <div class="about_detail" v-for="item in filterNoIconDocuments" :key="item.id">
                                    <a
                                        href="javascrip:void(0);"
                                        style="display:inline-block; width:80%; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;"
                                        @click="selectMenuItem(item)"
                                        >{{ item.title }}</a
                                    >
                                    <span style="display:inline-block; overflow:hidden; margin-left: 20px;">{{ formateTime(item.issue_data) }}</span>
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
            url: '/online/cgform/api/getData/4ea31cc0eaf942ab951de0e7eb4646a3',
            baseUrl: '/online/cgform/api/getData/',
            documents: [],
            showDocument: this.$store.state.showDocument ? this.$store.state.showDocument : { content: '没有内容' }
        };
    },
    computed: {
        filterHasIconDocuments: function() {
            if (typeof this.documents === 'undefined' || this.documents.length === 0) {
                return [];
            } else {
                return this.documents.filter(function(item) {
                    return typeof item.icon == 'string' && item.icon !== '';
                });
            }
        },
        filterNoIconDocuments: function() {
            let newDocuments = JSON.parse(JSON.stringify(this.documents));
            if (typeof newDocuments === 'undefined' || newDocuments.length === 0) {
                return [];
            } else {
                return newDocuments.filter(function(item) {
                    return typeof item.icon == 'undefined' || (typeof item.icon == 'object' && item.icon == null) || item.icon == '';
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
    mounted() {
        this.initial();
    },
    watch: {
        watchMenu(newVal) {
            this.menu = newVal;
        },
        watchMenuItem(newVal) {
            this.menuItem = newVal;
            this.getItemChildren(newVal);
        }
    },
    methods: {
        getBaseUrl() {
            return window._CONFIG['staticDomainURL'];
        },
        initial() {
            this.menu = this.$store.state.menu;
            this.menuItem = this.$store.state.menuItem;
            if (typeof this.$store.state.showDocument !== 'undefined' && typeof this.$store.state.showDocument.id !== 'undefined') {
                this.documents = [this.$store.state.showDocument];
                this.showDocument = this.$store.state.showDocument;
            } else {
                this.getItemChildren(this.$store.state.menuItem);
            }
        },
        changeMenu(menu) {
            this.$store.commit('changeMenu', { menu: menu });
            this.$store.commit('initialShowDocument');
        },
        changeMenuItem(menu, menuItem) {
            if (this.menuItem == menuItem && typeof this.showDocument.id !== 'undefined') {
                this.getItemChildren(menuItem);
            }
            this.$router.push({ path: `/center/${menuItem.name}`, query: { menu: menu, menuItem: menuItem } });
            // this.$store.commit('changeMenuItem', { menu: menu, menuItem: menuItem });
            // this.$store.commit('initialShowDocument');
        },
        selectMenuItem(menuItem) {
            this.documents = [menuItem];
            this.showDocument = menuItem;
        },
        getItemChildren(menuItem) {
            request({
                url: this.baseUrl + menuItem.child_table_id,
                method: 'get',
                params: {
                    _t: new Date().getTime(),
                    parent_menu: this.menuItem.id,
                    column: 'issue_data',
                    order: 'desc',
                    pageNo: 1,
                    pageSize: 20,
                    superQueryMatchType: 'and'
                }
            })
                .then(resData => {
                    if (typeof resData.result.records != 'undefined' && resData.result.records.length > 0) {
                        if (resData.result.records.length === 1) {
                            this.showDocument = resData.result.records[0];
                        } else {
                            this.showDocument = {
                                content: '没有内容'
                            };
                        }

                        this.documents = resData.result.records;
                    } else {
                        this.showDocument = {
                            content: '没有内容'
                        };
                        this.documents = [];
                    }
                })
                .catch(() => {
                    this.showDocument = {
                        content: '没有内容'
                    };
                    this.documents = [];
                });
        },
        formateTime(time) {
            return typeof time !== 'undefined' && time != null ? time.substr(0, 10) : '';
        }
    }
};
</script>
