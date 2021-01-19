<template>
    <div class="footer_wrap">
        <!-- 上半部分 -->
        <a-row type="flex" justify="start" align="middle" style="background: url('/center/static/images/foot-1.jpg') no-repeat center top;height:171px">
            <!-- 才当 -->
            <a-col :span="9">
                <a-row type="flex" justify="center" align="middle" style="height:100%;">
                    <a-col :span="6">
                        <div v-for="menu in filterMenus1" :key="menu.id" @click="changeMenu(menu)" style="cursor: pointer; color: white;margin-top:15px">
                            {{ menu.name }}
                        </div>
                    </a-col>
                    <a-col :span="6">
                        <div v-for="menu in filterMenus2" :key="menu.id" @click="changeMenu(menu)" style="cursor: pointer; color: white;margin-top:15px">
                            {{ menu.name }}
                        </div>
                    </a-col>
                </a-row>
            </a-col>
            <!-- 图标 -->
            <a-col :span="5">
                <a-row type="flex" justify="center" align="middle" style="height:100%;">
                    <div class="footer_logo">
                        <img src="../../assets/footer_logo.png" />
                    </div>
                </a-row>
            </a-col>
        </a-row>

        <div class="clear"></div>

        <!-- 下半部分 -->
        <div style=" color:white;background-color:#570a0a;height:98px">
            <a-row justify="center" style="padding-top: 15px;font-size: 16px;">
                <a-col offset="4" span="6">联系地址：厦门市集美区集美大道199号</a-col>
                <a-col span="6">联系电话：0592-6183811</a-col>
                <a-col span="6">浏览量：{{ viewCounts }}</a-col>
            </a-row>
            <a-row justify="center" style="padding-top: 15px;font-size: 16px;">
                <a-col>Copyright © 2018-2020 集美大学诚毅学院-检测与自动控制虚拟仿真实验教学中心 版权所有</a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
import './index.scss';
export default {
    name: 'Footer',
    data() {
        return {
            menus: this.$store.state.menus,
            viewCounts: 0
        };
    },
    computed: {
        watchMenus() {
            return this.$store.state.menus;
        },
        filterMenus1() {
            return this.menus.filter((item, index) => {
                return index < 4;
            });
        },
        filterMenus2() {
            return this.menus.filter((item, index) => {
                return index > 3;
            });
        }
    },
    mounted() {
        if (this.$store.state.menus.length > 0) {
            this._initial(this.$store.state.menus);
        }
    },
    watch: {
        watchMenus(newVal) {
            this._initial(newVal);
        }
    },
    methods: {
        _initial(newVal) {
            this.menus = newVal;
            this.menus.forEach(menuItem => {
                if (menuItem.code.toLowerCase() === 'HOME'.toLowerCase()) {
                    this.viewCounts = menuItem.view_count;
                }
            });
        },
        changeMenu(menu) {
            if (typeof menu.jump_link !== 'undefined' && menu.jump_link !== null) {
                window.open(menu.jump_link, '_blank');
            } else {
                this.$store.commit('changeMenu', { menu: menu });
                this.$store.commit('initialShowDocument');
            }
        }
    }
};
</script>

<style></style>
