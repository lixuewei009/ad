(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71b098f7"],{"15df":function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("Tabs",{attrs:{value:"name1"}},[n("TabPane",{attrs:{label:"全部平台",name:"name1"}},[n("p",[e._v("账户余额明细")]),n("avue-crud",{attrs:{option:e.option,data:e.data},on:{"refresh-change":e.refreshChange,"row-save":e.rowSave,"row-update":e.rowUpdate,"row-del":e.rowDel}})],1),n("TabPane",{attrs:{label:"巨量广告",name:"name2"}},[n("avue-crud",{attrs:{option:e.option,data:e.data},on:{"refresh-change":e.refreshChange,"row-save":e.rowSave,"row-update":e.rowUpdate,"row-del":e.rowDel}})],1)],1)},s=[],o=(n("e9c4"),{data:function(){return{option:{excelBtn:!0,border:!0,index:!0,expandLevel:3,headerAlign:"center",align:"center",tree:!0,labelWidth:100,column:[{label:"账户信息",prop:"namecount",width:140},{label:"代理商信息",prop:"agency"},{label:"所属平台",prop:"platform"},{label:"今日实时累计消耗（元）",prop:"costtime"},{label:"账户余额（元）",children:[{label:"总余额（元）",prop:"Totalbalance"},{label:"可用总余额（元）",prop:"availablebalance"}]},{label:"非赠款余额（元）",children:[{label:"总余额（元）",prop:"Totalbalance2"},{label:"可用总余额（元）",prop:"availablebalance2"}]},{label:"赠款余额（元）",children:[{label:"总余额（元）",prop:"Totalbalance3"},{label:"可用总余额（元）",prop:"availablebalance3"}]},{label:"共享赠款余额（元）",children:[{label:"总余额（元）",prop:"Totalbalance4"},{label:"可用总余额（元）",prop:"availablebalance4"}]}]},data:[{name:"张三",age:14,address:"110000",phone1:"17547400800",phone:"17547400800",icon:"el-icon-time",test:1,sex:"男"},{name:"王五",age:10,address:"120000",test:1,sex:"女",icon:"el-icon-star-on",phone1:"17547400800",phone:"17547400800"}]}},methods:{refreshChange:function(){this.$message.success("刷新回调")},rowSave:function(e,a,n){var t=this;e.id=(new Date).getTime(),this.$message.success("模拟网络请求"),setTimeout((function(){t.$message.success("关闭按钮等待"),n()}),1e3),setTimeout((function(){t.$message.success("新增数据"+JSON.stringify(e)),a(e)}),2e3)},rowDel:function(e,a,n){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n(e),t.$message({type:"success",message:"删除成功!"})})).catch((function(){}))},rowUpdate:function(e,a,n,t){var s=this;this.$message.success("模拟网络请求"),setTimeout((function(){s.$message.success("关闭按钮等待"),t()}),1e3),setTimeout((function(){s.$message.success("编辑数据"+JSON.stringify(e)+"数据序号"+a),n(e)}),2e3)}}}),l=o,r=(n("5779"),n("2877")),c=Object(r["a"])(l,t,s,!1,null,"1ad50b5f",null);a["default"]=c.exports},5779:function(e,a,n){"use strict";n("a151")},a151:function(e,a,n){}}]);
//# sourceMappingURL=chunk-71b098f7.43c71f8a.js.map