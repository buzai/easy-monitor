webpackJsonp([0],{478:function(t,e,r){r(502);var s=r(169)(r(491),r(515),"data-v-998d870c",null);s.options.__file="/Users/huangyijun/git/easy-monitor/reconstruction/tmp_vue_client/src/views/profiler.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] profiler.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},479:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){e.default={data:function(){return{config:t}},props:["list","needHome"],computed:{navigationList:function(){return Array.isArray(this.list)||(this.list=[]),this.list.map(function(t){return{navi:t.navi,href:"#"+t.href}})}}}}.call(e,r(34))},480:function(t,e){},481:function(t,e,r){r(480);var s=r(169)(r(479),r(482),"data-v-3bb034f7",null);s.options.__file="/Users/huangyijun/git/easy-monitor/reconstruction/tmp_vue_client/src/views/common/navigation.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] navigation.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},482:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navigation-bar"},[t.needHome?r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{staticStyle:{"text-align":"left"},attrs:{span:"24"}},[r("router-link",{attrs:{to:t.config.default.vueRouter.index}},[r("p",[t._v("· Home")])])],1)],1):t._e(),t._v(" "),t._l(t.navigationList,function(e){return r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{staticStyle:{"text-align":"left"},attrs:{span:"24"}},[r("a",{attrs:{href:e.href}},[r("p",[t._v("· "+t._s(e.navi))])])])],1)})],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},483:function(t,e,r){r(497),r(493);var s=r(169)(r(486),r(510),"data-v-2c130f69",null);s.options.__file="/Users/huangyijun/git/easy-monitor/reconstruction/tmp_vue_client/src/views/common/loading.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] loading.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},484:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{default_style:"width:600px;height:400px;"}},mounted:function(){this.renderCharts()},props:["self_style","data","message"],methods:{renderCharts:function(){this.$_js.echart3.methods.renderCharts.call(this)}},computed:{chartOption:function(){return this.$_js.echart3.computed.chartOption.call(this)}},watch:{data:function(){this.renderCharts()}}}},486:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{defaultLoadingMsg:"Loading..."}},props:["loadingMsg","error"]}},487:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(41),n=(r.n(s),r(170)),o=r.n(n),i=r(483),a=r.n(i);e.default={data:function(){return{singleProfiler:null,error:null,checkStatTimer:null,axiosDone:{profilerDetail:!1},axiosSended:!1,columns_long:[{title:"函数名称",key:"functionName",align:"center"},{title:"执行时长",key:"execTime",align:"center"},{title:"占据调用者百分比",key:"execPercentage",align:"center"},{title:"系统路径",key:"filePath",align:"center",render:this.render}],columns_top:[{title:"函数名称",key:"functionName",align:"center"},{title:"执行时长",key:"execTime",align:"center"},{title:"占据调用者百分比",key:"execPercentage",align:"center"},{title:"系统路径",key:"filePath",align:"center",render:this.render}],columns_bail:[{title:"函数名称",key:"functionName",align:"center"},{title:"逆优化原因",key:"bailoutReason",align:"center"},{title:"系统路径",key:"filePath",align:"center",render:this.render}]}},created:function(){var t=o.a.merge({},this.rawParams,{pid:this.pid});this.startProfiling(t,"cpu.vue"),this.checkStat(t)},beforeDestroy:function(){this.checkStatTimer&&clearInterval(this.checkStatTimer)},props:["pid","rawParams","startProfiling"],components:{loadingSpin:a.a},methods:{checkStat:function(t){this.$_js.cpu.methods.checkStat.call(this,t)},formatTime:function(t){return this.$_js.cpu.methods.formatTime.call(this,t)},render:function(t,e,r){return this.$_js.cpu.methods.render.apply(this,[t,e,r])}},computed:{listInfo:function(){return this.$_js.cpu.computed.listInfo.call(this)},server_error:function(){return this.$_js.cpu.computed.server_error.call(this)},data_long:function(){return this.$_js.cpu.computed.data_long.call(this)},data_top:function(){return this.$_js.cpu.computed.data_top.call(this)},data_bail:function(){return this.$_js.cpu.computed.data_bail.call(this)},singleProfilerData:function(){return this.$_js.cpu.computed.singleProfilerData.call(this)}}}},488:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{myChart:null,default_style:"width:1000px;height:600px;"}},mounted:function(){this.renderForcegraph()},props:["forceGraph","self_style","heapMap","formatSize"],methods:{renderForcegraph:function(){this.$_js.force.methods.renderForcegraph.call(this)},openOrFold:function(t){this.$_js.force.methods.openOrFold.call(this)}},computed:{forceGraphOption:function(){return this.$_js.force.computed.forceGraphOption.call(this)}},watch:{forceGraph:function(){this.renderForcegraph()}}}},489:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(41),n=(r.n(s),r(170)),o=r.n(n),i=r(507),a=r.n(i),l=r(483),c=r.n(l),u=r(504),d=r.n(u);e.default={data:function(){return{constructor:!1,type:!1,force:!1,modal_node_id:null,singleProfiler:null,error:null,checkStatTimer:null,axiosDone:{profilerDetail:!1},axiosSended:!1,node_id:"",process_status:1,circle_color:{healthy:"#5cb85c",warning:"#ff9900",leaking:"#ff3300"},columns_constructor:[{title:"构造器",key:"constructor",align:"center"},{title:"类型",key:"type",align:"center"},{title:"距离根节点",key:"distance",align:"center"},{title:"对象数量",key:"object_count",align:"center",sortable:!0},{title:"浅引用大小",key:"shallow_size",align:"center",sortable:!0,sortMethod:this.sortBySize},{title:"保留引用大小",key:"retained_size",align:"center",sortable:!0,sortMethod:this.sortBySize}]}},created:function(){var t=o.a.merge({},this.rawParams,{pid:this.pid});this.startProfiling(t,"mem.vue"),this.checkStat(t)},beforeDestroy:function(t){this.checkStatTimer&&clearInterval(this.checkStatTimer)},props:["pid","rawParams","startProfiling"],components:{force:a.a,echart3:d.a,loadingSpin:c.a},methods:{formatPercentage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return this.$_js.mem.methods.formatPercentage.call(this,t,e)},formatSize:function(t){return this.$_js.mem.methods.formatSize.call(this,t)},sortBySize:function(t,e,r){return this.$_js.mem.methods.sortBySize.apply(this,[t,e,r])},checkStat:function(t){this.$_js.mem.methods.checkStat.call(this,t)},typeHandle:function(){this.$_js.mem.methods.typeHandle.call(this)},constructorHandle:function(){this.$_js.mem.methods.constructorHandle.call(this)},selectHandle:function(t){this.$_js.mem.methods.selectHandle.call(this,t)},leakHandle:function(t){this.$_js.mem.methods.leakHandle.call(this,t)}},computed:{singleProfilerData:function(){return this.$_js.mem.computed.singleProfilerData.call(this)},listInfo:function(){return this.$_js.mem.computed.listInfo.call(this)},server_error:function(){return this.$_js.mem.computed.server_error.call(this)},statistics:function(){return this.$_js.mem.computed.statistics.call(this)},leakPoint:function(){return this.$_js.mem.computed.leakPoint.call(this)},idList:function(){return this.$_js.mem.computed.idList.call(this)},dataConstructor:function(){return this.$_js.mem.computed.dataConstructor.call(this)},echart3Message:function(){return this.$_js.mem.computed.echart3Message.call(this)},forceGraphLeakPoint:function(){return this.$_js.mem.computed.forceGraphLeakPoint.call(this)}}}},491:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(506),n=r.n(s),o=r(508),i=r.n(o),a=r(481),l=r.n(a);e.default={data:function(){return{params:{},cpuProfiling:!1,memProfiling:!1}},created:function(){var t=this.$route.query;this.params=t,this.cpuProfiling=Boolean("cpu"===t.opt),this.memProfiling=Boolean("mem"===t.opt),Array.isArray(t.pidList)||(t.pidList=[t.pidList]),this.startProfiling(t,"profiler.vue")},components:{cpuModule:n.a,memModule:i.a,navigation:l.a},methods:{startProfiling:function(t,e){this.$_js.profiler.methods.startProfiling.call(this,t,e)}},computed:{processName:function(){return this.$_js.profiler.computed.processName.call(this)},pidList:function(){return this.$_js.profiler.computed.pidList.call(this)},profilerComputed:function(){return this.$_js.profiler.computed.profilerComputed.call(this)}}}},492:function(t,e){},493:function(t,e){},494:function(t,e){},495:function(t,e){},497:function(t,e){},499:function(t,e){},500:function(t,e){},501:function(t,e){},502:function(t,e){},504:function(t,e,r){r(500);var s=r(169)(r(484),r(513),"data-v-6014c3e7",null);s.options.__file="/Users/huangyijun/git/easy-monitor/reconstruction/tmp_vue_client/src/views/common/echart3.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] echart3.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},506:function(t,e,r){r(501),r(495);var s=r(169)(r(487),r(514),"data-v-60264ba5",null);s.options.__file="/Users/huangyijun/git/easy-monitor/reconstruction/tmp_vue_client/src/views/common/profiler/cpu.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] cpu.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},507:function(t,e,r){r(492);var s=r(169)(r(488),r(509),null,null);s.options.__file="/Users/huangyijun/git/easy-monitor/reconstruction/tmp_vue_client/src/views/common/profiler/force.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] force.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},508:function(t,e,r){r(499),r(494);var s=r(169)(r(489),r(512),"data-v-5dee9152",null);s.options.__file="/Users/huangyijun/git/easy-monitor/reconstruction/tmp_vue_client/src/views/common/profiler/mem.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] mem.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},509:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index"},[r("div",{ref:"force",style:t.self_style||t.default_style}),t._v(" "),r("div",{ref:"detail"})])},staticRenderFns:[]},t.exports.render._withStripped=!0},510:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spin-col"},[t.error?t._e():r("Spin",{attrs:{fix:""}},[r("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),t._v(" "),r("div",[r("p",[t._v(t._s(t.loadingMsg||t.defaultLoadingMsg))])])],1),t._v(" "),t.error?r("Alert",{attrs:{type:"error","show-icon":""}},[t._v("\n        服务器内部错误\n        "),r("span",{slot:"desc"},[t._v("\n            详情: "+t._s(t.error)+"\n        ")])]):t._e()],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},512:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{staticStyle:{"text-align":"center"},attrs:{span:"16",id:t.listInfo.process.href}},[r("h2",[t._v("PID-"+t._s(t.pid))])]),t._v(" "),r("br"),t._v(" "),r("Col",{attrs:{span:"16"}},[r("Card",[t.server_error||!t.listInfo.done?r("loading-spin",{attrs:{loadingMsg:t.listInfo.loadingMsg,error:t.server_error}}):t._e(),t._v(" "),!t.server_error&&t.listInfo.done?r("div",{staticStyle:{"text-align":"center"}},[r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"12"}},[r("header",{staticClass:"header"},[r("span",[t._v("Retained Size 最大的节点占比")])])])],1),t._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"22"}},[r("i-circle",{attrs:{size:160,"trail-width":3,"stroke-width":4,percent:t.singleProfilerData.maxRetainedInfo.percentage,"stroke-color":t.singleProfilerData.maxRetainedInfo.color}},[r("div",{staticClass:"i-circle-custom"},[r("p",[t._v(t._s(t.singleProfilerData.maxRetainedInfo.string))]),t._v(" "),r("span",[r("p",[t._v("状态:"),r("a",{style:{color:t.singleProfilerData.maxRetainedInfo.color}},[t._v(" "+t._s(t.singleProfilerData.maxRetainedInfo.status)+"  ")])])])])])],1)],1),t._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"12"}},[r("header",{staticClass:"header"},[r("span",[t._v("疑似内存泄漏点分析")])])])],1),t._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[1===this.process_status?r("Col",{attrs:{span:"8"}},[r("p",[r("Alert",{staticClass:"remove-alert-border",attrs:{type:"success"}},[t._v("\n                                    暂无泄漏风险\n                                ")])],1)]):t._e(),t._v(" "),1!==this.process_status?r("Col",{attrs:{span:"8"}},t._l(t.leakPoint,function(e){return r("div",[r("Button",{staticClass:"reset-button",staticStyle:{height:"28px"},attrs:{type:"text",long:"",size:"small"},on:{click:function(r){t.leakHandle(e.name)}}},[r("Alert",{staticClass:"reset-alert",attrs:{type:e.type}},[r("p",[r("Icon",{attrs:{type:"speedometer"}}),t._v("  "+t._s(e.name))],1)])],1),t._v(" "),r("br"),r("br")],1)})):t._e()],1),t._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"12"}},[r("header",{staticClass:"header"},[r("span",[t._v("V8 引擎堆内分配内存细节")])])])],1),t._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"22"}},[r("p",{staticStyle:{"font-size":"1.0em"}},[t._v("\n                                当前进程堆内分配总内存大小为: "),r("a",{staticStyle:{color:"#3399ff"}},[t._v(t._s(t.statistics.totalString))]),t._v(", \n                                更多内存细节参见以下条目:\n                            ")])])],1),t._v(" "),r("br"),t._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"22"}},[r("p",{staticStyle:{"font-size":"1.0em"}},[t._v("\n                                点击\n                                "),r("Button",{staticStyle:{background:"#ebf5ff"},attrs:{type:"text",size:"small"},on:{click:t.typeHandle}},[r("p",{staticStyle:{"font-size":"1.0em"}},[t._v("Type")])]),t._v(" "),r("Button",{staticStyle:{background:"#ebf5ff"},attrs:{type:"text",size:"small"},on:{click:t.constructorHandle}},[r("p",{staticStyle:{"font-size":"1.0em"}},[t._v("Constructor")])]),t._v("\n                                获取按照节点 [ 类型 / 构造器 ] 分类的详情\n                            ")],1)])],1),t._v(" "),r("br"),t._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"12"}},[r("header",{staticClass:"header"},[r("span",[t._v("搜索任意节点")])])])],1),t._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"8"}},[r("Select",{staticClass:"ivu-select-input-my-style-mem",attrs:{placeholder:"请输入需要搜索的节点 ID",filterable:""},on:{"on-change":t.selectHandle},model:{value:t.node_id,callback:function(e){t.node_id=e},expression:"node_id"}},t._l(t.idList,function(e){return r("Option",{key:e,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)],1)],1):t._e()],1),t._v(" "),r("Modal",{attrs:{title:"构造器分类详情",width:"950"},model:{value:t.constructor,callback:function(e){t.constructor=e},expression:"constructor"}},[r("Table",{attrs:{border:"",columns:t.columns_constructor,data:t.dataConstructor}})],1),t._v(" "),r("Modal",{attrs:{title:"类型概览"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[r("echart3",{attrs:{data:t.statistics,message:t.echart3Message}})],1),t._v(" "),r("Modal",{attrs:{title:"[ "+t.modal_node_id+" ] 引力图",width:"1000"},model:{value:t.force,callback:function(e){t.force=e},expression:"force"}},[r("force",{attrs:{forceGraph:t.forceGraphLeakPoint,heapMap:t.singleProfilerData.heapUsed,formatSize:t.formatSize}})],1)],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},513:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"statistics",staticClass:"index",style:t.self_style||t.default_style})},staticRenderFns:[]},t.exports.render._withStripped=!0},514:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{staticStyle:{"text-align":"center"},attrs:{span:"16",id:t.listInfo.process.href}},[r("h2",[t._v("PID-"+t._s(t.pid))])]),t._v(" "),r("br"),t._v(" "),r("Col",{attrs:{span:"16"}},[r("Card",[t.server_error||!t.listInfo.done?r("loading-spin",{attrs:{loadingMsg:t.listInfo.loadingMsg,error:t.server_error}}):t._e(),t._v(" "),!t.server_error&&t.listInfo.done?r("div",{staticStyle:{"text-align":"center"}},[r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"12"}},[r("header",{staticClass:"header"},[r("span",[t._v("执行大于 "+t._s(t.listInfo.long.timeout)+"ms 的函数")])])])],1),t._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"22"}},[r("Table",{attrs:{border:"",columns:t.columns_long,data:t.data_long}})],1)],1),t._v(" "),r("br"),t._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"12"}},[r("header",{staticClass:"header"},[r("span",[t._v("耗费最久的 "+t._s(t.listInfo.top.number)+" 个函数")])])])],1),t._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"22"}},[r("Table",{attrs:{border:"",columns:t.columns_top,data:t.data_top}})],1)],1),t._v(" "),r("br"),t._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"12"}},[r("header",{staticClass:"header"},[r("span",[t._v("引擎逆优化最频繁的 "+t._s(t.listInfo.bail.number)+" 个函数")])])])],1),t._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"22"}},[r("Table",{attrs:{border:"",columns:t.columns_bail,data:t.data_bail}})],1)],1),t._v(" "),r("br")],1):t._e()],1)],1)],1),t._v(" "),r("br")],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},515:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index"},[r("Row",[r("Col",{staticStyle:{height:"20px"}})],1),t._v(" "),r("br"),t._v(" "),r("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[r("Col",{staticStyle:{"text-align":"center"},attrs:{span:"16"}},[r("h1",[t._v(t._s(t.processName))])]),t._v(" "),r("br")],1),t._v(" "),r("br"),t._v(" "),t.cpuProfiling?r("div",t._l(t.pidList,function(e,s){return r("cpu-module",{attrs:{pid:e,rawParams:t.params,startProfiling:t.startProfiling}})})):t._e(),t._v(" "),t.memProfiling?r("div",t._l(t.pidList,function(e,s){return r("mem-module",{attrs:{pid:e,rawParams:t.params,startProfiling:t.startProfiling}})})):t._e(),t._v(" "),r("navigation",{attrs:{list:t.profilerComputed,needHome:"true"}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});