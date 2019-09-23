(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-219d"],{"34dg":function(e,t,a){"use strict";a.r(t);var i=a("JM6l"),n=a.n(i),l=a("KTTK"),s=a("B2Fc"),r=a("a/LZ"),c=a.n(r),o={name:"task-complete-statistics",components:{},data:function(){return{pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},loading:!1,dateSelect:"",typeSelect:1,structuresProps:{children:"children",label:"label",value:"id"},deptList:[],structuresSelectValue:"",userOptions:[],userSelectValue:"",list:[],fieldList:[{field:"month",name:"时间"},{field:"receivables",name:"合同金额(元)"},{field:"achievement",name:"目标(元)"},{field:"rate",name:"完成率(%)"}],axisChart:null,axisOption:null}},computed:{},mounted:function(){this.dateSelect=c()(new Date).year().toString(),this.getDeptList(),this.initAxis()},methods:{getDeptList:function(){var e=this;this.loading=!0,Object(l.b)().then(function(t){e.deptList=t.data,e.loading=!1,t.data.length>0&&(e.structuresSelectValue=t.data[0].id,e.getUserList(),e.getAhievementDatalist())}).catch(function(){e.loading=!1})},structuresValueChange:function(e){this.userSelectValue="",this.userOptions=[],this.getUserList()},getUserList:function(){var e=this,t={pageType:0};t.deptId=this.structuresSelectValue,Object(l.j)(t).then(function(t){e.userOptions=t.data}).catch(function(){})},getAhievementDatalist:function(){var e=this;this.loading=!0,Object(s.a)({year:this.dateSelect,type:this.typeSelect,deptId:this.structuresSelectValue,userId:this.userSelectValue}).then(function(t){for(var a=[],i=[],n=[],l=0;l<12;l++){var s=t.data[l];a.push(s.receivables),i.push(s.achievement),n.push(s.rate),e.list.push(s)}e.axisOption.series[0].data=a,e.axisOption.series[1].data=i,e.axisOption.series[2].data=n,e.axisChart.setOption(e.axisOption,!0),e.loading=!1}).catch(function(){e.loading=!1})},handleClick:function(e){"search"===e&&(this.refreshTableHeadAndChartInfo(),this.getAhievementDatalist())},refreshTableHeadAndChartInfo:function(){this.fieldList[1].name=1==this.typeSelect?"合同金额(元)":"回款金额(元)",this.axisOption.legend.data[0]=1==this.typeSelect?"合同金额":"回款金额",this.axisOption.series[0].name=1==this.typeSelect?"合同金额":"回款金额"},initAxis:function(){var e=n.a.init(document.getElementById("axismain")),t={color:["#6ca2ff","#6ac9d7","#ff7474"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["合同金额","目标","完成率"],bottom:"0px",itemWidth:14},grid:{top:"5px",left:"20px",right:"20px",bottom:"40px",containLabel:!0,borderColor:"#fff"},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}}],yAxis:[{type:"value",name:"合同金额",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD",formatter:"{value} 元"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}},{type:"value",name:"完成率",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},position:"right",axisLabel:{color:"#BDBDBD",formatter:"{value} %"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}}],series:[{name:"合同金额",type:"bar",yAxisIndex:0,barWidth:15,data:[]},{name:"目标",type:"bar",yAxisIndex:0,barWidth:15,data:[]},{name:"完成率",type:"line",yAxisIndex:1,data:[]}]};e.setOption(t,!0),this.axisOption=t,this.axisChart=e}}},u=(a("65LE"),a("ZrdR")),d=Object(u.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main-container"},[a("div",{staticClass:"handle-bar"},[a("el-date-picker",{attrs:{type:"year",clearable:!1,"value-format":"yyyy","picker-options":e.pickerOptions,placeholder:"选择年"},model:{value:e.dateSelect,callback:function(t){e.dateSelect=t},expression:"dateSelect"}}),e._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.typeSelect,callback:function(t){e.typeSelect=t},expression:"typeSelect"}},e._l([{label:"合同金额",value:1},{label:"回款金额",value:2}],function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-select",{attrs:{placeholder:"选择部门"},on:{change:e.structuresValueChange},model:{value:e.structuresSelectValue,callback:function(t){e.structuresSelectValue=t},expression:"structuresSelectValue"}},e._l(e.deptList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("el-select",{attrs:{clearable:!0,placeholder:"选择员工"},model:{value:e.userSelectValue,callback:function(t){e.userSelectValue=t},expression:"userSelectValue"}},e._l(e.userOptions,function(e){return a("el-option",{key:e.userId,attrs:{label:e.realname,value:e.userId}})})),e._v(" "),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.handleClick("search")}}},[e._v("搜索")])],1),e._v(" "),a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("div",{staticClass:"table-content"},[a("el-table",{attrs:{data:e.list,stripe:"",border:"",height:"400","highlight-current-row":""}},e._l(e.fieldList,function(e,t){return a("el-table-column",{key:t,attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",prop:e.field,label:e.name}})}))],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"axis-content"},[t("div",{attrs:{id:"axismain"}})])}],!1,null,"21ef78ea",null);d.options.__file="TaskCompleteStatistics.vue";t.default=d.exports},"65LE":function(e,t,a){"use strict";var i=a("eAqg");a.n(i).a},B2Fc:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"c",function(){return l}),a.d(t,"b",function(){return s});var i=a("t3Un");function n(e){return Object(i.a)({url:"bi/taskCompleteStatistics",method:"post",data:e})}function l(e){return Object(i.a)({url:"bi/productStatistics",method:"post",data:e})}function s(e){return Object(i.a)({url:"biFunnel/sellFunnel",method:"post",data:e})}},eAqg:function(e,t,a){}}]);