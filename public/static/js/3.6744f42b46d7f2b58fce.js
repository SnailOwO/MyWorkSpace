webpackJsonp([3],{Pt1D:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{}},created:function(){},mounted:function(){this.createTotal(),this.lastLogin()},methods:{createTotal:function(){var t=document.getElementById("total-login");this.$echarts.init(t).setOption({title:{text:"今年用户登录一览",left:"40%",bottom:3},color:"#2a323d",xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]})},lastLogin:function(){var t=document.getElementById("last-login");this.$echarts.init(t).setOption({title:{text:"今年用户登录一览",left:"40%",bottom:3},color:"#2a323d",xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]})}}},a=function(){var t=this.$createElement,e=this._self._c||t;return e("Content",[e("div",{attrs:{id:"total-login"}}),this._v(" "),e("div",{attrs:{id:"last-login"}})])};a._withStripped=!0;var o={render:a,staticRenderFns:[]},r=o;var s=n("VU/8")(i,r,!1,null,null,null);s.options.__file="src\\components\\index\\index.vue";e.default=s.exports}});
//# sourceMappingURL=3.6744f42b46d7f2b58fce.js.map