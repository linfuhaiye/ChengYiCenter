<template>
    <a-row type="flex" justify="center" align="middle" class="page">
        <div class="whole">
            <a-layout class="layout">
                <a-layout-header
                    :style="{
                        position: 'fixed',
                        zIndex: 99,
                        width: '100%',
                        lineHeight: '35px',
                        height: '190px',
                        minWidth: '1380px',
                        backgroundColor: 'white'
                    }"
                >
                    <Header />
                </a-layout-header>
                <a-layout-content align="middle" :style="{ padding: '0 50px', marginTop: '210px' }">
                    <div
                        v-if="this.$store.state.menu == null || this.$store.state.menu.code === 'HOME'"
                    >
                        <center-home></center-home>
                    </div>
                    <div v-else>
                        <center-index></center-index>
                    </div>
                </a-layout-content>
                <a-layout-footer :style="{ textAlign: 'center' }">
                    <Footer />
                </a-layout-footer>
            </a-layout>
        </div>
    </a-row>
</template>

<style scoped>
body {
    min-width: 1500px;
    min-height: 850px;
}
#components-layout-demo-basic {
    text-align: center;
    height: 100%;
}
#components-layout-demo-basic > .ant-layout {
    margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
    margin: 0;
}

#components-layout-demo-basic .ant-layout-header {
    background: #f4f4f4;
    color: #999;
    height: 35.99px;
    border-bottom: 1px dashed #c9c9c9;
    padding: 0px;
}
#components-layout-demo-basic .ant-layout-sider {
    background: #292929;
    color: #fff;
}
.ant-layout-header {
    padding: 0px;
}
.ant-layout-footer {
    padding: 0px 120px;
    color: #929292;
    font-size: 14px;
    background: url('/center/static/images/foot-1.jpg') no-repeat center top;
}
#components-layout-demo-basic .ant-layout-content {
    color: rgb(0, 0, 0);
    min-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
    margin-bottom: 48px;
}
.ant-menu-horizontal {
    line-height: 48px;
    white-space: nowrap;
    border: 0;
    border-bottom: 1px solid #e8e8e8;
    -webkit-box-shadow: none;
    box-shadow: none;
}
.ant-menu-horizontal > .ant-menu-item-selected {
    color: #645f5f;
    border-bottom: 2px solid #0c0c0c;
}
.ant-menu-horizontal > .ant-menu-item:hover {
    color: #000000;
}
.page {
    height: 100%;
    background: #ffffff;
}

.whole {
    height: 100%;
    width: 100%;
    min-width: 1380px;
}

.layout {
    height: 100%;
}
.webtop {
    height: 35px;
    line-height: 35px;
    background: #f4f4f4;
    color: #999;
    border-bottom: 1px dashed #c9c9c9;
}
.webtop a {
    padding-left: 7px;
    margin-right: 7px;
    color: #666;
}
/* .webtop a:hover{ text-decoration: underline; } */
.webtop i {
    width: 50px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
}
.webtop .email i {
    background-position: 0px 0px;
}
.webtop .school_link i {
    background-position: 0px -20px;
}
.logo {
    margin: 20px 0px;
    width: 100%;
    margin: 20px auto;
    text-align: left;
    padding: 0px 20px;
}
.logo img {
    display: inline-block;
    width: 453px;
}
.logo span {
    font-size: 30px;
    color: #d0021b;
    line-height: 81px;
    padding-left: 20px;
}

.nav_wrap {
    width: 100%;
    height: 50px;
    background: #b54436;
    margin: 0px auto;
}
.nav li {
    width: 10%;
    float: left;
    position: relative;
    z-index: 99;
}
.nav li > a {
    display: block;
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    line-height: 50px;
}
.nav li .subnav {
    position: absolute;
    top: 100%;
    left: 0;
    width: 130px;
    padding: 4px 16px 10px;
    background-color: #f2f2f2;
    display: none;
    border-bottom: 3px solid #b54436;
    z-index: 99;
}
.nav li.course_nav .subnav {
    width: 220px;
}
.nav li.course_nav .subnav a {
    width: 220px;
}
.nav li .subnav-box {
    height: 45px;
    position: relative;
}
.nav li .subnav-box a {
    display: block;
    padding: 10px 0;
    line-height: 24px;
    border-bottom: 1px solid #ccc;
    color: #333 !important;
    background: none !important;
}
.nav li .subnav-box a:hover {
    color: #b54436 !important;
}
.nav li.last {
    margin-right: 0;
}
.nav li.last .subnav {
    right: 0;
    left: auto;
}
.nav li:hover .subnav {
    display: block;
    min-width: 100%;
}
.nav li:hover a,
.nav li.current a {
    color: #fff;
    background: #8e0212;
}

.ny_banner_wrap {
    width: 100%;
    height: 230px;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
}
.ny_banner_wrap p.tit {
    width: 100%;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    padding-top: 50px;
    line-height: 65px;
    color: #fff;
}
.ny_banner_wrap p.crumb {
    text-align: center;
    color: #fff;
}

.ny_banner_bg01 {
    background: url(../assets/index_about_txt_img.png) no-repeat center;
}
</style>

<script>
import Header from './header';
import Footer from './footer';
import centerHome from './center/home';
import centerIndex from './center/index';

export default {
    name: 'Home',
    components: { Header, Footer, centerHome, centerIndex }
};
</script>
