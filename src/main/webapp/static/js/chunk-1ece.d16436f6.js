(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1ece"],{"+ZgO":function(e,t,a){},"//Ae":function(e,t,a){"use strict";a.r(t);var s=a("9LST"),n={name:"achievement-summary-statistics",components:{filtrateHandleView:a("gXW+").a},data:function(){return{loading:!1,tableHeight:document.documentElement.clientHeight-220,list:[],data:{back_zong:0,count_zong:0,money_zong:0,w_back_zong:0},fieldList:[{field:"type",name:"日期"},{field:"contractNum",name:"签约合同数（个）"},{field:"contractMoney",name:"签约合同金额（元）"},{field:"receivablesMoney",name:"回款金额（元）"}]}},computed:{},mounted:function(){var e=this;window.onresize=function(){e.tableHeight=document.documentElement.clientHeight-220}},methods:{getDataList:function(e){var t=this;this.loading=!0,Object(s.b)(e).then(function(e){var a=e.data;t.data={back_zong:a.receivablesMoney,count_zong:a.contractNum,money_zong:a.contractMoney,w_back_zong:a.unreceivedMoney},t.list=a.list||[],t.loading=!1}).catch(function(){t.loading=!1})}}},l=(a("kuRS"),a("ZrdR")),o=Object(l.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main-container"},[a("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{moduleType:"contract"},on:{load:function(t){e.loading=!0},change:e.getDataList}}),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content-title"},[e._v("签约合同数："+e._s(e.data.count_zong)+"个；签约合同金额："+e._s(e.data.money_zong)+"元；回款金额："+e._s(e.data.back_zong)+"元；未收款金额："+e._s(e.data.w_back_zong)+"元")]),e._v(" "),a("div",{staticClass:"table-content"},[a("el-table",{attrs:{data:e.list,height:e.tableHeight,stripe:"",border:"","highlight-current-row":""}},e._l(e.fieldList,function(e,t){return a("el-table-column",{key:t,attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",prop:e.field,label:e.name}})}))],1)])],1)},[],!1,null,"6d456462",null);o.options.__file="AchievementSummaryStatistics.vue";t.default=o.exports},"9LST":function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return l});var s=a("t3Un");function n(e){return"count"===e.type?Object(s.a)({url:"biEmployee/contractNumStats",method:"post",data:e}):"money"===e.type?Object(s.a)({url:"biEmployee/contractMoneyStats",method:"post",data:e}):"back"===e.type?Object(s.a)({url:"biEmployee/receivablesMoneyStats",method:"post",data:e}):void 0}function l(e){return Object(s.a)({url:"biEmployee/totalContract",method:"post",data:e})}},SW5X:function(e,t,a){"use strict";var s=a("eQh7");a.n(s).a},eQh7:function(e,t,a){},"gXW+":function(e,t,a){"use strict";var s=a("KTTK"),n=a("UcQx"),l=a("conU"),o=a("uKQN"),i=a("a/LZ"),u=a.n(i),c={name:"filtrate-handle-view",components:{timeTypeSelect:o.a},watch:{},data:function(){return{pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},yearValue:"",timeTypeValue:{},structuresProps:{children:"children",label:"label",value:"id"},deptList:[],structuresSelectValue:"",userOptions:[],userSelectValue:"",businessOptions:[],businessStatusValue:"",productValue:[],productOptions:[],customValue:""}},props:{moduleType:{required:!0,type:String},showYearSelect:{default:!1,type:Boolean},showBusinessSelect:{default:!1,type:Boolean},showUserSelect:{default:!0,type:Boolean},showCustomSelect:{default:!1,type:Boolean},customDefault:"",customOptions:{default:function(){return[]},type:Array},showProductSelect:{default:!1,type:Boolean}},mounted:function(){var e=this;this.showCustomSelect&&(this.customValue=this.customDefault),this.showYearSelect&&(this.yearValue=u()(new Date).year().toString()),this.$emit("load"),this.getDeptList(function(){e.showBusinessSelect?e.getBusinessStatusList(function(){e.postFiltrateValue()}):e.postFiltrateValue()}),this.showProductSelect&&this.getProductCategoryIndex()},methods:{customSelectChange:function(){this.$emit("typeChange",this.customValue)},timeTypeChange:function(e){this.timeTypeValue=e},getDeptList:function(e){var t=this;Object(s.b)({m:"bi",c:this.moduleType,a:"read"}).then(function(a){t.deptList=a.data,a.data.length>0?(t.structuresSelectValue=a.data[0].id,t.showUserSelect&&t.getUserList()):t.structuresSelectValue="",e(!0)}).catch(function(){t.$emit("error")})},structuresValueChange:function(e){this.showUserSelect&&(this.userSelectValue="",this.userOptions=[],this.getUserList())},getUserList:function(){var e=this,t={};t.deptId=this.structuresSelectValue,Object(s.i)(t).then(function(t){e.userOptions=t.data}).catch(function(){e.$emit("error")})},getBusinessStatusList:function(e){var t=this;Object(n.o)().then(function(a){t.businessOptions=a.data,a.data.length>0&&(t.businessStatusValue=a.data[0].typeId),e(!0)}).catch(function(){t.$emit("error")})},getProductCategoryIndex:function(){var e=this;Object(l.t)({type:"tree"}).then(function(t){e.productOptions=t.data}).catch(function(){})},postFiltrateValue:function(){var e={deptId:this.structuresSelectValue};this.showUserSelect&&(e.userId=this.userSelectValue),this.showBusinessSelect&&(e.typeId=this.businessStatusValue),this.showProductSelect&&(e.categoryId=this.productValue.length>0?this.productValue[this.productValue.length-1]:""),this.showYearSelect?e.year=this.yearValue:"custom"==this.timeTypeValue.type?(e.startTime=this.timeTypeValue.startTime,e.endTime=this.timeTypeValue.endTime):e.type=this.timeTypeValue.value,this.$emit("change",e)}},beforeDestroy:function(){}},r=(a("vWHP"),a("ZrdR")),d=Object(r.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"filtrate-content"},[e.showYearSelect?e._e():a("time-type-select",{on:{change:e.timeTypeChange}}),e._v(" "),e.showYearSelect?a("el-date-picker",{attrs:{type:"year",clearable:!1,"value-format":"yyyy","picker-options":e.pickerOptions,placeholder:"选择年"},model:{value:e.yearValue,callback:function(t){e.yearValue=t},expression:"yearValue"}}):e._e(),e._v(" "),a("el-select",{attrs:{placeholder:"选择部门"},on:{change:e.structuresValueChange},model:{value:e.structuresSelectValue,callback:function(t){e.structuresSelectValue=t},expression:"structuresSelectValue"}},e._l(e.deptList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),e.showUserSelect?a("el-select",{attrs:{clearable:!0,placeholder:"选择员工"},model:{value:e.userSelectValue,callback:function(t){e.userSelectValue=t},expression:"userSelectValue"}},e._l(e.userOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.realname,value:e.id}})})):e._e(),e._v(" "),e.showBusinessSelect?a("el-select",{attrs:{placeholder:"商机组"},model:{value:e.businessStatusValue,callback:function(t){e.businessStatusValue=t},expression:"businessStatusValue"}},e._l(e.businessOptions,function(e){return a("el-option",{key:e.typeId,attrs:{label:e.name,value:e.typeId}})})):e._e(),e._v(" "),e.showProductSelect?a("el-cascader",{staticStyle:{width:"100%"},attrs:{options:e.productOptions,"change-on-select":"","show-all-levels":!1,props:{children:"children",label:"label",value:"categoryId"}},model:{value:e.productValue,callback:function(t){e.productValue=t},expression:"productValue"}}):e._e(),e._v(" "),e.showCustomSelect?a("el-select",{attrs:{placeholder:"图标类型"},on:{change:e.customSelectChange},model:{value:e.customValue,callback:function(t){e.customValue=t},expression:"customValue"}},e._l(e.customOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})):e._e(),e._v(" "),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.postFiltrateValue()}}},[e._v("搜索")]),e._v(" "),e._t("default")],2)},[],!1,null,"794af64e",null);d.options.__file="filtrateHandleView.vue";t.a=d.exports},hSF5:function(e,t,a){},kuRS:function(e,t,a){"use strict";var s=a("hSF5");a.n(s).a},uKQN:function(e,t,a){"use strict";var s={name:"time-type-select",computed:{iconClass:function(){return this.showTypePopover?"arrow-up":"arrow-down"},typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:"",typeOptions:[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}},props:{defaultType:Object},mounted:function(){this.defaultType?this.selectType=this.defaultType:this.$emit("change",{type:"default",value:this.selectType.value})},methods:{typeSelectClick:function(e){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=e,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:this.startTime,endTime:this.endTime}))}}},n=(a("SW5X"),a("ZrdR")),l=Object(n.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-popover",{attrs:{placement:"bottom",width:"200","popper-class":"no-padding-popover",trigger:"click"},model:{value:e.showTypePopover,callback:function(t){e.showTypePopover=t},expression:"showTypePopover"}},[a("div",{staticClass:"type-popper"},[a("div",{staticClass:"type-content"},[e._l(e.typeOptions,function(t,s){return a("div",{key:s,staticClass:"type-content-item",class:{selected:e.selectType.value==t.value&&!e.showCustomContent},on:{click:function(a){e.typeSelectClick(t)}}},[a("div",{staticClass:"mark"}),e._v(e._s(t.label)+"\n      ")])}),e._v(" "),a("div",{staticClass:"type-content-item",class:{selected:e.showCustomContent},on:{click:function(t){e.showCustomContent=!0}}},[a("div",{staticClass:"mark"}),e._v("自定义\n      ")])],2),e._v(" "),e.showCustomContent?a("div",{staticClass:"type-content-custom"},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}),e._v(" "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}),e._v(" "),a("el-button",{on:{click:e.customSureClick}},[e._v("确定")])],1):e._e()]),e._v(" "),a("el-input",{staticClass:"type-select",attrs:{slot:"reference",placeholder:"请选择选择",readonly:!0},slot:"reference",model:{value:e.typeShowValue,callback:function(t){e.typeShowValue=t},expression:"typeShowValue"}},[a("i",{class:["el-input__icon","el-icon-"+e.iconClass],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"8d513086",null);l.options.__file="index.vue";t.a=l.exports},vWHP:function(e,t,a){"use strict";var s=a("+ZgO");a.n(s).a}}]);