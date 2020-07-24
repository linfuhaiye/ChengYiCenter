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
                style="background-image:url(./static/images/Internet+.jpg);height:260px;margin-top:3px;background-position: center; background-repeat: no-repeat; background-size:100% 100%;"
            ></div>
            <div
                style="background-image:url(./static/images/first_rate.jpg);height:260px;margin-top:3px;background-position: center; background-repeat: no-repeat; background-size:100% 100%;"
            ></div>
        </a-carousel>
        <div class="index_news_wrap">
            <div class="w1200">
                <div class="tit">中心动态</div>
                <div class="clear"></div>
                <div class="index_news_main">
                    <div class="fl">
                        <div class="news_focus_wrap">
                            <div class="news_focus_list">
                                <ul>
                                    <li>
                                        <a href="javascrip:void(0);" target="_blank">
                                            <img
                                                src="../../assets/96a3b91.jpg"
                                                alt="我院参加2020年福建省高校学生返校复学实验室安全工作经验交流网络视频会议"
                                            />
                                            <h2>我院参加2020年福建省高校学生返校复学实验室安全工作经验交流网络视频会议</h2>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="http://cyweb.xmzgzn.cn/cysyjx/?p=210"
                                            target="_blank"
                                        >
                                            <img
                                                src="../../assets/96a3b45.jpg"
                                                alt="我院参加2020年福建省本科高校虚拟仿真实验教学项目建设与申报培训网络视频会议"
                                            />
                                            <h2>我院参加2020年福建省本科高校虚拟仿真实验教学项目建设与申报培训网络视频会议</h2>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="http://cyweb.xmzgzn.cn/cysyjx/?p=207"
                                            target="_blank"
                                        >
                                            <img
                                                src="../../assets/96a3b90.jpg"
                                                alt="诚毅学子在全国供应链大赛喜获佳绩"
                                            />
                                            <h2>诚毅学子在全国供应链大赛喜获佳绩</h2>
                                        </a>
                                    </li>
                                </ul>
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
                        <div class="index_news_con">
                            <ul class="tit">
                                <li
                                    id="ph11"
                                    onmouseover="setTab(&#39;ph1&#39;,1,2)"
                                    class="active"
                                >
                                    <a
                                        href="javascrip:void(0);"
                                        @click="changeMenuItem(centerTrends, centerNews)"
                                    >中心资讯</a>
                                </li>
                                <li id="ph12" onmouseover="setTab(&#39;ph1&#39;,2,2)" class>
                                    <a
                                        href="javascrip:void(0);"
                                        @click="changeMenuItem(centerTrends, centerNotice)"
                                    >通知公告</a>
                                </li>
                            </ul>
                            <div class="list">
                                <div id="con_ph1_1" style="display: block;">
                                    <ul>
                                        <li>
                                            <a
                                                href="http://cyweb.xmzgzn.cn/cysyjx/?p=215"
                                                target="_blank"
                                            >我院参加2020年福建省高校学生返校复学实验室安全工作经验交流网络视频会议</a>
                                            <span>2020-05-22</span>
                                        </li>
                                        <li>
                                            <a
                                                href="http://cyweb.xmzgzn.cn/cysyjx/?p=210"
                                                target="_blank"
                                            >我院参加2020年福建省本科高校虚拟仿真实验教学项目建设与申报培训网络视频会议</a>
                                            <span>2020-05-19</span>
                                        </li>
                                        <li>
                                            <a
                                                href="http://cyweb.xmzgzn.cn/cysyjx/?p=207"
                                                target="_blank"
                                            >诚毅学子在全国供应链大赛喜获佳绩</a>
                                            <span>2020-04-30</span>
                                        </li>
                                        <li>
                                            <a
                                                href="http://cyweb.xmzgzn.cn/cysyjx/?p=203"
                                                target="_blank"
                                            >供应链管理专业通过教育部审批</a>
                                            <span>2020-03-18</span>
                                        </li>
                                        <li>
                                            <a
                                                href="http://cyweb.xmzgzn.cn/cysyjx/?p=158"
                                                target="_blank"
                                            >诚毅学子在第五届全国大学生物流仿真设计大赛福建赛区喜获佳绩</a>
                                            <span>2019-11-18</span>
                                        </li>
                                        <li>
                                            <a
                                                href="http://cyweb.xmzgzn.cn/cysyjx/?p=156"
                                                target="_blank"
                                            >商船系召开船舶交通虚拟仿真实验教学中心建设研讨会</a>
                                            <span>2019-09-18</span>
                                        </li>
                                        <li>
                                            <a
                                                href="http://cyweb.xmzgzn.cn/cysyjx/?p=153"
                                                target="_blank"
                                            >诚毅学子获全国大学生智慧供应链创新创业挑战赛三等奖</a>
                                            <span>2019-06-04</span>
                                        </li>
                                    </ul>
                                    <div class="more">
                                        <a
                                            href="javascrip:void(0);"
                                            @click="changeMenuItem(centerTrends, centerNews)"
                                            style="color:black"
                                        >更多&gt;&gt;</a>
                                    </div>
                                </div>
                                <div id="con_ph1_2" style="display: none;">
                                    <ul>
                                        <li>
                                            <a
                                                href="http://cyweb.xmzgzn.cn/cysyjx/?p=138"
                                                target="_blank"
                                            >2018年省级虚拟仿真实验教学中心申报说明</a>
                                            <span>2018-06-01</span>
                                        </li>
                                    </ul>
                                    <div class="more">
                                        <a
                                            href="javascrip:void(0);"
                                            @click="changeMenuItem(centerTrends, centerNews)"
                                        >更多&gt;&gt;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="index_about_wrap">
            <div class="w1200">
                <div class="index_tit">
                    <p>INTRODUCTION</p>
                    <h2>中心概况</h2>
                </div>
                <div class="clear"></div>
                <div class="index_about_main">
                    <div class="fl">
                        <img src="../../assets/qq.jpg" />
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
                                <p>集美大学诚毅学院创办初始，航海技术专业就作为学院的一个特色专业开始招生。为满足航海类专业课程实践教学的需要，学院于2005年9月筹建船舶操纵模拟器实验室，2007年7月建成投入使用。</p>
                                <p>
                                    船舶操纵模拟器是大型的、综合性的训练设备。实验室配备有国内第一套360°视景航海模拟器，由挪威KONGSBERG MARTIME
                                    AS公司生产，系统的硬件和软件按挪威船级社(DNV)有关航海模拟器的A级标准进行配置，其性能满足国际海事组织(IMO)和中华人民共和国海事局(CHINA
                                    MSA)对航海模拟器的要求。实验室建筑面积921平方米，总资产1000多万元......
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="index_about_txt" style>
                    <div class="con">
                        <div class="item item01">
                            <a
                                target="_blank"
                                @click="changeMenuItem(teachersTroop, centerDirector)"
                            >
                                <div class="img"></div>
                                <div class="desc">中心主任</div>
                            </a>
                        </div>
                        <div class="item item02">
                            <a
                                target="_blank"
                                @click="changeMenuItem(achievements, scientificResearchAchievements)"
                            >
                                <div class="img"></div>
                                <div class="desc">科研成果</div>
                            </a>
                        </div>
                        <div class="item item03">
                            <a @click="changeMenuItem(achievements, studentAward)" target="_blank">
                                <div class="img"></div>
                                <div class="desc">学生获奖</div>
                            </a>
                        </div>
                        <div class="item item04">
                            <a
                                @click="changeMenuItem(equipmentAndEnvironment, laboratoryEnvironment)"
                                target="_blank"
                            >
                                <div class="img"></div>
                                <div class="desc">实验室环境</div>
                            </a>
                        </div>
                        <div class="item item05">
                            <a @click="changeMenuItem(generalProfile, contactUs)" target="_blank">
                                <div class="img"></div>
                                <div class="desc">联系我们</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="links_btn">
                    <a @click="changeMenuItem(generalProfile, profile)" target="_blank">更多详细</a>
                </div>
            </div>
        </div>
        <div class="index_sys_wrap">
            <div class="w1200">
                <div class="index_tit">
                    <p>TEACHING PLATFORM</p>
                    <h2>虚拟仿真实验教学平台</h2>
                </div>
                <div class="clear"></div>
                <div class="index_sys_con">
                    <div class="swiper-container swiper-container-horizontal">
                        <div
                            class="swiper-wrapper"
                            style="transition-duration: 0ms; background-color: rosybrown;"
                        >
                            <a-row type="flex" justify="space-around" align="middle">
                                <a-col :span="4">
                                    <a href="http://baidu.com" target="_blank">
                                        <div class="imgbg">
                                            <img src="../../assets/MicroControl.png" />
                                        </div>
                                        <p
                                            style="font-size: 16px;color: white;width: 191px;background-color: cornflowerblue;margin: auto;"
                                        >微控制器编程平台</p>
                                    </a>
                                </a-col>
                                <a-col :span="4">
                                    <a href="http://baidu.com" target="_blank">
                                        <div class="imgbg">
                                            <img src="../../assets/Programming .jpg" />
                                        </div>
                                        <p
                                            style="font-size: 16px;color: white;width: 191px;background-color: cornflowerblue;margin: auto;"
                                        >机器人编程平台</p>
                                    </a>
                                </a-col>
                                <a-col :span="4">
                                    <a href="http://baidu.com" target="_blank">
                                        <div class="imgbg">
                                            <img src="../../assets/DynamicGrab.jpg" />
                                        </div>
                                        <p
                                            style="font-size: 16px;color: white;width: 191px;background-color: cornflowerblue;margin: auto;"
                                        >动态抓取实验</p>
                                    </a>
                                </a-col>
                                <a-col :span="4">
                                    <a href="http://baidu.com" target="_blank">
                                        <div class="imgbg">
                                            <img src="../../assets/control.jpg" />
                                        </div>
                                        <p
                                            style="font-size: 16px;color: white;width: 191px;background-color: cornflowerblue;margin: auto;"
                                        >PID控制实验</p>
                                    </a>
                                </a-col>
                                <a-col :span="4">
                                    <a href="http://baidu.com" target="_blank">
                                        <div class="imgbg">
                                            <img src="../../assets/other.jpg" />
                                        </div>
                                        <p
                                            style="font-size: 16px;color: white;width: 191px;background-color: cornflowerblue;margin: auto;"
                                        >其他教学资源</p>
                                    </a>
                                </a-col>
                            </a-row>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <!-- <div class="index_scene_wrap">
      <div class="w1200">
        <div class="index_tit">
          <p>SCENES</p>
          <h2>虚拟仿真场景</h2>
        </div>
        <div class="clear"></div>
        <div class="index_scene_list">
          <ul>
            <li>
              <a
                href="http://cyweb.xmzgzn.cn/cysyjx/?custom_list_scene=cangchuxun"
                target="_blank"
              >
                <p><img src="../../assets/96a3b95.jpg" /></p>
                <p class="tit">仓储虚拟仿真场景</p>
              </a>
            </li>
            <li>
              <a
                href="http://cyweb.xmzgzn.cn/cysyjx/?custom_list_scene=wuliucangc"
                target="_blank"
              >
                <p><img src="../../assets/96a3b41.jpg" /></p>
                <p class="tit">物流仓储仿真场景</p>
              </a>
            </li>
            <li>
              <a
                href="http://cyweb.xmzgzn.cn/cysyjx/?custom_list_scene=xingtaixue"
                target="_blank"
              >
                <p><img src="../../assets/96a3b54.jpg" /></p>
                <p class="tit">形态学场景</p>
              </a>
            </li>
            <li>
              <a
                href="http://cyweb.xmzgzn.cn/cysyjx/?custom_list_scene=jinengxue"
                target="_blank"
              >
                <p><img src="../../assets/96a3b71.jpg" /></p>
                <p class="tit">机能学场景</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
        <div class="links_btn">
          <a
            href="http://cyweb.xmzgzn.cn/cysyjx/?post_type=custom_list_scene"
            target="_blank"
            >更多场景</a
          >
        </div>
      </div>
        </div>-->
    </div>
</template>

<script>
import './index.scss';
import request from '@/miscs/request';

export default {
    name: 'CenterHome',
    data() {
        return {
            url: '/online/cgform/api/getData/49472539ad944785bf5aafa488e59966',
            // 中心动态
            centerTrends: {},
            // 中心资讯
            centerNews: {},
            // 通知公告
            centerNotice: {},
            // 师资队伍
            teachersTroop: {},
            // 中心主任
            centerDirector: {},
            // 中心成果
            achievements: {},
            // 科研成果
            scientificResearchAchievements: {},
            // 学生获奖
            studentAward: {},
            // 设备与环境
            equipmentAndEnvironment: {},
            // 实验室环境
            laboratoryEnvironment: {},
            // 中心概况
            generalProfile: {},
            // 联系我们
            contactUs: {},
            // 概况
            profile: {}
        };
    },
    computed: {
        watchMenus() {
            return this.$store.state.menus;
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
        _initial(menus) {
            if (menus.length > 0) {
                menus.forEach(menu => {
                    switch (menu.id) {
                        // 中心动态
                        case '4028bb817305cdab01730d65318d0027': {
                            this.centerTrends = menu;
                            if (typeof menu.children != 'undefined') {
                                console.log('======', menu);
                                menu.children.forEach(menuItem => {
                                    if (menuItem.id == '4028bb817305cdab01730d6d84190032') {
                                        // 中心资讯
                                        this.centerNews = menuItem;
                                    }
                                    if (menuItem.id == '4028bb817305cdab01730d6e20da0033') {
                                        // 通知公告
                                        this.centerNotice = menuItem;
                                    }
                                });
                                console.log(this.centerNews, '***', this.centerNotice);
                            }
                            break;
                        }
                        // 师资队伍
                        case '4028bb817305cdab01730d65adc40028': {
                            this.teachersTroop = menu;
                            if (typeof menu.children != 'undefined') {
                                menu.children.forEach(menuItem => {
                                    if (menuItem.id === '4028bb817305cdab01730d6fc7270034') {
                                        // 中心主任
                                        this.centerDirector = menuItem;
                                    }
                                });
                            }
                            break;
                        }
                        // 中心成果
                        case '4028bb817305cdab01730d67932c002b': {
                            this.achievements = menu;
                            if (typeof menu.children != 'undefined') {
                                menu.children.forEach(menuItem => {
                                    if (menuItem.id === '4028bb817305cdab01730e7a49bd0042') {
                                        // 科研成果
                                        this.scientificResearchAchievements = menuItem;
                                    }
                                    if (menuItem.id === '4028bb817305cdab01730e7aa3ef0043') {
                                        // 学生获奖
                                        this.studentAward = menuItem;
                                    }
                                });
                            }
                            break;
                        }
                        // 设备与环境
                        case '4028bb817305cdab01730d68940e002d': {
                            this.equipmentAndEnvironment = menu;
                            if (typeof menu.children != 'undefined') {
                                menu.children.forEach(menuItem => {
                                    if (menuItem.id === '4028bb817305cdab01730e7eefc00047') {
                                        // 实验室环境
                                        this.laboratoryEnvironment = menuItem;
                                    }
                                });
                            }
                            break;
                        }
                        // 中心概况
                        case '4028bb817305cdab01730d6487670026': {
                            this.generalProfile = menu;
                            if (typeof menu.children != 'undefined') {
                                menu.children.forEach(menuItem => {
                                    if (menuItem.id === '4028bb817305cdab01730d6c9dab0031') {
                                        // 联系我们
                                        this.contactUs = menuItem;
                                    }
                                    if (menuItem.id === '4028bb817305cdab01730d6ad7af002f') {
                                        // 概况
                                        this.profile = menuItem;
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
                            }
                        })
                        .catch(() => {
                            menu.children = [];
                        });
                });
            }
        },
        // 获取中心动态
        _getCenterTrends() {
            request({
                url: this.url,
                method: 'get',
                params: {
                    _t: new Date().getTime(),
                    parent_id: '4028bb817305cdab01730d65318d0027',
                    column: 'createTime',
                    order: 'desc',
                    pageNo: 1,
                    pageSize: 20,
                    superQueryMatchType: 'and'
                }
            })
                .then(resData => {
                    console.log('_getCenterTrends:', resData);
                })
                .catch(() => {});
        },
        // 获取中心资讯
        _getCenterNews() {
            request({
                url: this.url,
                method: 'get',
                params: {
                    _t: new Date().getTime(),
                    parent_id: '4028bb817305cdab01730d6d84190032',
                    column: 'createTime',
                    order: 'desc',
                    pageNo: 1,
                    pageSize: 20,
                    superQueryMatchType: 'and'
                }
            })
                .then(resData => {
                    console.log('_getCenterNews:', resData);
                })
                .catch(() => {});
        },
        // 获取中心主任
        _getCenterDirector() {
            request({
                url: this.url + '/4028bb817305cdab01730d6fc7270034',
                method: 'get',
                params: {
                    _t: new Date().getTime()
                }
            })
                .then(resData => {
                    console.log('_getCenterDirector:', resData);
                })
                .catch(() => {});
        },
        // 获取科研成果
        _getScientificResearchAchievements() {
            request({
                url: this.url + '/4028bb817305cdab01730e7a49bd0042',
                method: 'get',
                params: {
                    _t: new Date().getTime()
                }
            })
                .then(resData => {
                    console.log('_getScientificResearchAchievements:', resData);
                })
                .catch(() => {});
        },
        // 获取学生获奖
        _getStudentAwards() {
            request({
                url: this.url + '/4028bb817305cdab01730e7aa3ef0043',
                method: 'get',
                params: {
                    _t: new Date().getTime()
                }
            })
                .then(resData => {
                    console.log('_getStudentAwards:', resData);
                })
                .catch(() => {});
        },
        // 获取中心资讯
        _getLaboratoryEnvironment() {
            request({
                url: this.url + '/4028bb817305cdab01730e7eefc00047',
                method: 'get',
                params: {
                    _t: new Date().getTime()
                }
            })
                .then(resData => {
                    console.log('_getLaboratoryEnvironment:', resData);
                })
                .catch(() => {});
        },
        // 获取联系我们
        _getContactUs() {
            request({
                url: this.url + '/4028bb817305cdab01730d6c9dab0031',
                method: 'get',
                params: {
                    _t: new Date().getTime()
                }
            })
                .then(resData => {
                    console.log('_getContactUs:', resData);
                })
                .catch(() => {});
        },
        // 获取概况
        _getGeneralSituation() {
            request({
                url: this.url + '/4028bb817305cdab01730d6ad7af002f',
                method: 'get',
                params: {
                    _t: new Date().getTime()
                }
            })
                .then(resData => {
                    console.log('_getGeneralSituation:', resData);
                })
                .catch(() => {});
        },
        changeMenu(menu) {
            this.$store.commit('changeMenu', { menu: menu });
        },
        changeMenuItem(menu, menuItem) {
            this.$store.commit('changeMenuItem', { menu: menu, menuItem: menuItem });
        }
    }
};
</script>
