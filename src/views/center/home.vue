<template>
    <div :style="{ background: '#fff', padding: '24px', minHeight: '780px' }">
        <a-carousel autoplay>
            <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
                <a-icon type="left-circle" style="font-size:40px" />
            </div>
            <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
                <a-icon type="right-circle" style="font-size:40px" />
            </div>
            <div
                style="background-image:url(/center/static/images/graduate.png);height:260px;margin-top:3px;background-position: center; background-repeat: no-repeat; background-size:100% 100%;"
            ></div>
            <div
                style="background-image:url(/center/static/images/first_rate.jpg);height:260px;margin-top:3px;background-position: center; background-repeat: no-repeat; background-size:100% 100%;"
            ></div>
        </a-carousel>
        <div class="index_news_wrap">
            <div class="w1200">
                <div class="clear"></div>
                <div class="index_news_main">
                    <div class="fl">
                        <div class="tit">视频简介</div>
                        <div class="news_focus_wrap">
                            <div class="news_focus_list">
                                <video width="100%" height="330px" autoplay controls="controls">
                                    <source src="/center/static/videos/home.mov" type="video/mp4" />
                                </video>
                            </div>
                            <div class="news_focus_dot">
                                <ul></ul>
                            </div>
                            <div class="news_focus_cut">
                                <span class="prev">&lt;</span>
                                <span class="next">&gt;</span>
                            </div>
                        </div>
                    </div>
                    <div class="fr">
                        <div class="tit">中心动态</div>
                        <div class="index_news_con">
                            <ul class="tit">
                                <li id="ph11" class="active">
                                    <a href="javascrip:void(0);" @click="changeMenuItem(centerTrends, centerNews)">中心资讯</a>
                                </li>
                            </ul>
                            <div class="list">
                                <div id="con_ph1_1" style="display: block;">
                                    <ul>
                                        <li v-for="item in centerNewDocuments" :key="item.id">
                                            <a href="javascrip:void(0);" @click="changeShowDocument(centerTrends, centerNews, item)">{{ item.title }}</a>
                                            <span>{{ formateData(item.issue_data) }}</span>
                                        </li>
                                    </ul>
                                    <div class="more">
                                        <a href="javascrip:void(0);" @click="changeMenuItem(centerTrends, allNews)" style="color:black">更多&gt;&gt;</a>
                                    </div>
                                </div>
                                <div id="con_ph1_2" style="display: none;">
                                    <ul>
                                        <li>
                                            <a href="http://cyweb.xmzgzn.cn/cysyjx/?p=138" target="_blank">2018年省级虚拟仿真实验教学中心申报说明</a>
                                            <span>2018-06-01</span>
                                        </li>
                                    </ul>
                                    <div class="more">
                                        <a href="javascrip:void(0);" @click="changeMenuItem(centerTrends, centerNews)">更多&gt;&gt;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="index_sys_wrap" style="margin-top: 30px;">
            <div class="w1200">
                <div class="index_tit">
                    <p>TEACHING PLATFORM</p>
                    <h2>虚拟仿真实验教学平台</h2>
                </div>
                <div class="clear"></div>
                <div class="index_sys_con">
                    <div class="swiper-container swiper-container-horizontal">
                        <div class="swiper-wrapper" style="transition-duration: 0ms;">
                            <a-row type="flex" justify="space-around" align="middle">
                                <a-col :span="4">
                                    <a href="https://ide.mindplus.top/" target="_blank">
                                        <div class="imgbg">
                                            <img src="../../assets/MicroControl.jpg" />
                                        </div>
                                        <div class="exam-title"><div class="exam-title-content">微控制器编程平台</div></div>
                                        <!-- <p class="exam-title">微控制器编程平台</p> -->
                                    </a>
                                </a-col>
                                <a-col :span="4">
                                    <a href="http://subway.shangyunsoft.com/web/exam/user/login" target="_blank">
                                        <div class="imgbg">
                                            <img :width="'190px;'" :height="'300px;'" src="../../assets/subway.png" />
                                        </div>
                                        <div class="exam-title"><div class="exam-title-content">地铁屏蔽门自动控制虚拟仿真实验</div></div>
                                        <!-- <p class="exam-title">地铁屏蔽门自动控制虚拟仿真实验</p> -->
                                    </a>
                                </a-col>
                                <a-col :span="4">
                                    <a href="http://119.3.252.129:8081/VREducation/" target="_blank">
                                        <div class="imgbg">
                                            <img src="../../assets/DynamicGrab.png" />
                                        </div>
                                        <div class="exam-title"><div class="exam-title-content">基于机器视觉的工业机器人动态抓取虚拟仿真实验</div></div>
                                        <!-- <p class="exam-title">基于机器视觉的工业机器人动态抓取虚拟仿真实验</p> -->
                                    </a>
                                </a-col>
                                <a-col :span="4">
                                    <a href="http://119.3.252.129:8081/uva/" target="_blank">
                                        <div class="imgbg">
                                            <img src="../../assets/control.jpg" />
                                        </div>
                                        <div class="exam-title"><div class="exam-title-content">基于图形化编程的无人机PID控制虚拟仿真实验</div></div>
                                        <!-- <p class="exam-title">基于图形化编程的无人机PID控制虚拟仿真实验</p> -->
                                    </a>
                                </a-col>
                                <a-col :span="4">
                                    <a @click="changeMenuItem(resourcePlatform, teachingResources)" target="_blank">
                                        <div class="imgbg">
                                            <img src="../../assets/more.png" />
                                        </div>
                                        <div class="exam-title"><div class="exam-title-content">更多教学资源</div></div>
                                    </a>
                                </a-col>
                            </a-row>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="index_about_wrap" style="margin-top: 15px;">
            <div class="w1200">
                <div class="index_tit">
                    <p>INTRODUCTION</p>
                    <h2>中心概况</h2>
                </div>
                <div class="clear"></div>
                <div class="index_about_main">
                    <div class="fl">
                        <img style="height: 450px;width: 90%;" src="../../assets/qq.jpg" />
                    </div>
                    <div class="fr">
                        <div class="con">
                            <div class="txt">
                                <em>
                                    CHENGYI
                                    <br />UNIVERSITY COLLEGE
                                </em>
                                <span>检测与自动控制虚拟仿真实验教学中心</span>
                            </div>
                            <div class="des">
                                <p>
                                    依托学院两大省级实验示范中心——电子信息实验教学示范中心（2013）和机电创新设计实验教学示范中心（2016），集美大学诚毅学院成立检测与自动控制虚拟仿真实验教学中心（以下简称中心）。通过电子信息和智能制造两大专业群建设，结合福建省本科高校教育教学改革研究项目、福建省服务产业特色专业、福建省专业综合改革试点项目、高等学校创新创业教育改革项目、福建省大学生校外实践教育基地建设项目、省级教育教学改革项目，学院共投入400多万元，用于检测与自动控制相关技术领域的实验室建设，主要用于科研和教学实验条件的改善。
                                </p>
                                <p>
                                    中心坚持“育人为本、科学规划、突出特色、共建共享、持续发展”的指导思想，以全面提高学生创新精神和实践能力为宗旨，以共享优质实验教学资源为核心，以建设信息化实验教学资源为重点，强化教学科研的有机互动，整合全校涉检测和自动控制相关专业的优质虚拟仿真实验教学资源，积极利用企业的开发和支持服务能力，构建的一个特色鲜明的虚拟仿真实验教学平台。秉持
                                    “四融合、四促进”：“理论教学与实验教学相融合，促进课程体系改革；实践教学与科学研究相融合，促进实验平台建设；教学实验与学科竞赛相融合，促进创新精神培养；校内实验与企业工程实践相融合，促进实践能力提升”的实验教学理念，形成了模块化教学与多学科融合的实验教学体系。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="index_about_txt" style="margin-top: 60px;">
                    <div class="con">
                        <div class="item item01">
                            <a target="_blank" @click="changeMenuItem(teachersTroop, teamMember)">
                                <div class="img"></div>
                                <div class="desc">团队成员</div>
                            </a>
                        </div>
                        <div class="item item02">
                            <a target="_blank" @click="changeMenuItem(achievements, scientificResearchAchievements)">
                                <div class="img"></div>
                                <div class="desc">科研立项</div>
                            </a>
                        </div>
                        <div class="item item03">
                            <a @click="changeMenuItem(achievements, teachingAchievements)" target="_blank">
                                <div class="img"></div>
                                <div class="desc">教学成果</div>
                            </a>
                        </div>
                        <div class="item item04">
                            <a @click="changeMenuItem(resourcePlatform, experimentPlatform)" target="_blank">
                                <div class="img"></div>
                                <div class="desc">实验平台</div>
                            </a>
                        </div>
                        <div class="item item05">
                            <a @click="changeMenuItem(generalProfile, schoolProfile)" target="_blank">
                                <div class="img"></div>
                                <div class="desc">联系我们</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="links_btn">
                    <a @click="changeMenuItem(generalProfile, centerProfile)" target="_blank">更多详细</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import './index.scss';
import request from '@/miscs/request';
// import VueVideoPlayer from 'vue-video-player';

export default {
    name: 'CenterHome',
    components: {},
    data() {
        return {
            menuUrl: '/online/cgform/api/getTreeData/497b842359a248bcbc310c2c1a131c74',
            documentUrl: '/online/cgform/api/getData/c4adcebf77be4cd5995b626a395c7a99',
            // 中心动态
            centerTrends: {},
            // 中心资讯
            centerNews: {},
            // 通知公告
            allNews: {},
            // 师资队伍
            teachersTroop: {},
            // 团队成员
            teamMember: {},
            // 中心成果
            achievements: {},
            // 科研立项
            scientificResearchAchievements: {},
            // 学生获奖
            teachingAchievements: {},
            // 资源平台
            resourcePlatform: {},
            // 实验平台
            experimentPlatform: {},
            // 中心概况
            generalProfile: {},
            // 学校简介
            schoolProfile: {},
            // 中心简介
            centerProfile: {},
            // 教学资源
            teachingResources: {},
            centerNewDocuments: [],
            playerOptions: {
                muted: true,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [
                    {
                        type: 'video/mp4',
                        src: '../../assets/home.mov'
                    }
                ],
                poster: ''
            }
        };
    },
    computed: {
        watchMenus() {
            return this.$store.state.menus;
        }
    },
    mounted() {
        this._getMenus();
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
        _initial(menus) {
            if (menus.length > 0) {
                menus.forEach(menu => {
                    switch (menu.id) {
                        // 中心动态
                        case '1286503467271069697': {
                            this.centerTrends = menu;
                            if (typeof menu.children !== 'undefined') {
                                menu.children.forEach(menuItem => {
                                    if (menuItem.id == '1286512271249383425') {
                                        // 中心资讯
                                        this.centerNews = menuItem;
                                        this._getCenterNews();
                                    }
                                    if (menuItem.id == '1286512377172336642') {
                                        // 全部新闻
                                        this.allNews = menuItem;
                                    }
                                });
                            }
                            break;
                        }
                        // 师资队伍
                        case '1286503969203429377': {
                            this.teachersTroop = menu;
                            if (typeof menu.children != 'undefined') {
                                menu.children.forEach(menuItem => {
                                    if (menuItem.id === '1286512837056798721') {
                                        // 团队成员
                                        this.teamMember = menuItem;
                                    }
                                });
                            }
                            break;
                        }
                        // 中心成果
                        case '1286504324716830722': {
                            this.achievements = menu;
                            if (typeof menu.children != 'undefined') {
                                menu.children.forEach(menuItem => {
                                    if (menuItem.id === '1286513981803995138') {
                                        // 科研立项
                                        this.scientificResearchAchievements = menuItem;
                                    }
                                    if (menuItem.id === '1286513611203682306') {
                                        // 教学成果
                                        this.teachingAchievements = menuItem;
                                    }
                                });
                            }
                            break;
                        }
                        // 资源平台
                        case '1286509129950568450': {
                            this.resourcePlatform = menu;
                            if (typeof menu.children != 'undefined') {
                                menu.children.forEach(menuItem => {
                                    if (menuItem.id === '1286515041834639361') {
                                        // 实验平台
                                        this.experimentPlatform = menuItem;
                                    } else if (menuItem.id === '1286515215474630657') {
                                        this.teachingResources = menuItem;
                                    }
                                });
                            }
                            break;
                        }
                        // 中心概况
                        case '1286503158691930113': {
                            this.generalProfile = menu;
                            if (typeof menu.children != 'undefined') {
                                menu.children.forEach(menuItem => {
                                    if (menuItem.id === '1286510022389407746') {
                                        // 学校简介
                                        this.schoolProfile = menuItem;
                                    }
                                    if (menuItem.id === '1286511041148100609') {
                                        // 中心简介
                                        this.centerProfile = menuItem;
                                    }
                                });
                            }
                            break;
                        }
                        default:
                            break;
                    }
                });
            }
        },
        _getMenus() {
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
                                }
                            })
                            .catch(() => {
                                menu.children = [];
                            });
                    }
                });
            }
        },
        // 获取中心资讯
        _getCenterNews() {
            request({
                url: this.documentUrl,
                method: 'get',
                params: {
                    _t: new Date().getTime(),
                    column: 'sort_no',
                    order: 'asc',
                    pageNo: 1,
                    pageSize: 20,
                    superQueryMatchType: 'and'
                }
            })
                .then(resData => {
                    if (typeof resData.result.records !== 'undefined' && resData.result.records.length > 0) {
                        this.centerNewDocuments = resData.result.records;
                    } else {
                        this.centerNewDocuments = [];
                    }
                })
                .catch(() => {
                    this.centerNewDocuments = [];
                });
        },
        changeMenuItem(menu, menuItem) {
            this.$router.push({ path: `/center/${menuItem.name}`, query: { menu: menu, menuItem: menuItem } });
        },
        changeShowDocument(menu, menuItem, showDocument) {
            let pathName = showDocument.title.substr(0, 5);
            this.$router.push({ path: `/center/${pathName}`, query: { menu: menu, menuItem: menuItem, showDocument: showDocument } });
        },
        formateData(time) {
            return typeof time !== 'undefined' && time != null ? time.substr(0, 10) : '';
        }
    }
};
</script>
