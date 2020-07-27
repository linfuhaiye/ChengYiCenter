<template>
    <div class="footer_wrap">
        <div class="w1200">
            <!-- 上半部分 -->
            <div style="margin-top:18px;">
                <a-row>
                    <!-- 才当 -->
                    <a-col :span="10">
                        <a-col :span="10">
                            <div v-for="(menu) in filterMenus1" :key="menu.id"  @click="changeMenu(menu)" style="cursor: pointer; color: white;">
                                {{menu.name}}
                            </div>
                        </a-col>
                        <a-col :span="5">
                            <div v-for="(menu) in filterMenus2" :key="menu.id" @click="changeMenu(menu)" style="cursor: pointer; color: white;">
                                {{menu.name}}
                            </div>
                        </a-col>
                    </a-col>
                    <!-- 图标 -->
                    <a-col :span="8">
                        <div class="footer_logo">
                            <a href="javascript:void(0);"><img src="../../assets/footer_logo.png"/></a>
                        </div>
                    </a-col>
                </a-row>
            </div>
            <div class="clear"></div>
            <!-- 下半部分 -->
            <div style="margin-bottom:18px; color:white;">
                <a-row justify="center">
                    <a-col offset="6" span="7">联系地址：厦门市集美区集美大道199号</a-col>
                    <a-col span="6">联系电话：0592-6183811</a-col>
                </a-row>
                <a-row justify="center">
                    <a-col>Copyright © 2018-2020 集美大学诚毅学院-检测与自动控制虚拟仿真实验教学中心 版权所有</a-col>
                </a-row>
            </div>
        </div>
    </div>
</template>

<script>
import './index.scss';
export default {
    name: 'footer',
    data() {
        return {
            menus: this.$store.state.menus
        }
    },
    computed: {
        watchMenus() {
            return this.$store.state.menus;
        },
        filterMenus1() {
            return this.menus.filter((item, index) => {
                return index<4;
            })
        },
        filterMenus2() {
            return this.menus.filter((item, index) => {
                return index>3;
            })
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
            this.menus = newVal
        },
        changeMenu(menu) {
            if (typeof menu.jump_link !== 'undefined' && menu.jump_link !== null) {
                window.open(menu.jump_link,"_blank")
            } else {
                this.$store.commit('changeMenu', { menu: menu });
                this.$store.commit('initialShowDocument');
            }
        },
    }
};
</script>

<style></style>
