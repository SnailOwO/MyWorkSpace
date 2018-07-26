webpackJsonp([0],{ecz1:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={components:{funnyRain:s("fpyS").a},data:function(){return{first_index:0,isNoraml:!1,username:"",password:"",code:""}},created:function(){},mounted:function(){},methods:{login:function(){if(this.isNoraml){if(!this.code)return this.$Message.warning(this.$t("login.info.codeIsEmpty")),!1}else{if(!this.username)return this.$Message.warning(this.$t("login.info.usernameIsEmpty")),!1;if(!this.password)return this.$Message.warning(this.$t("login.info.pwdIsEmpty")),!1}}},watch:{isNoraml:function(){!1===this.isNoraml&&(this.username="",this.password="",this.code="")}}},n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"login"}},[s("ul",{staticClass:"login-header"},[s("li",[t._v(t._s(this.$t("login.page.register")))]),t._v(" "),s("li",[t._v(t._s(this.$t("login.page.getActiveCode")))])]),t._v(" "),s("div",{staticClass:"login-content"},[s("div",{staticClass:"login-carousel"},[s("Carousel",{attrs:{autoplay:"",loop:""},model:{value:t.first_index,callback:function(i){t.first_index=i},expression:"first_index"}},[s("CarouselItem",[s("div",{staticClass:"carousel-item"},[s("img",{attrs:{src:"/static/images/funny_rain/13.png"}})])]),t._v(" "),s("CarouselItem",[s("div",{staticClass:"carousel-item"},[s("img",{attrs:{src:"/static/images/funny_rain/1.png"}})])]),t._v(" "),s("CarouselItem",[s("div",{staticClass:"carousel-item"},[s("img",{attrs:{src:"/static/images/funny_rain/3.png"}})])]),t._v(" "),s("CarouselItem",[s("div",{staticClass:"carousel-item"},[s("img",{attrs:{src:"/static/images/funny_rain/6.png"}})])])],1)],1),t._v(" "),s("div",{staticClass:"switch-box"},[s("label",[t._v(t._s(this.$t("login.page.loginMethod")))]),t._v(" "),s("i-switch",{model:{value:t.isNoraml,callback:function(i){t.isNoraml=i},expression:"isNoraml"}})],1),t._v(" "),t.isNoraml?s("div",{staticClass:"code-way"},[s("div",{staticClass:"name-box"},[s("i-input",{staticClass:"login-input",attrs:{placeholder:this.$t("login.page.code")},model:{value:t.code,callback:function(i){t.code=i},expression:"code"}})],1)]):s("div",{staticClass:"login-way"},[s("div",{staticClass:"name-box"},[s("i-input",{staticClass:"login-input",attrs:{placeholder:this.$t("login.page.username")},model:{value:t.username,callback:function(i){t.username=i},expression:"username"}})],1),t._v(" "),s("div",{staticClass:"pwd-box"},[s("i-input",{staticClass:"login-input",attrs:{type:"password",placeholder:this.$t("login.page.password")},model:{value:t.password,callback:function(i){t.password=i},expression:"password"}})],1)]),t._v(" "),s("div",{staticClass:"login-btn",on:{click:t.login}},[t._v(t._s(this.$t("login.page.login")))])]),t._v(" "),s("funnyRain")],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]},o=a;var r=s("VU/8")(e,o,!1,null,null,null);r.options.__file="src\\pages\\sysSet.vue";i.default=r.exports},fpyS:function(t,i,s){"use strict";var e={data:function(){return{width:0,height:0,canvas:{},oGc:{},emojiNum:13,rainAry:[],rainNum:150,extenstion:".png",baseEmojiPath:"/static/images/funny_rain/",timeOut:"",customSpeed:{1:0,2:3,3:5,4:10}}},created:function(){},mounted:function(){this.watchWidth,this.watchHeight,this.initCanvas(),this.createRain(),this.move()},beforeDestroy:function(){clearTimeout(this.timeOut)},methods:{initCanvas:function(){this.canvas=document.getElementById("canvas"),this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this.oGc=this.canvas.getContext("2d")},initRain:function(){var t=this,i=this.random(2,5);return{init:function(s){this.r=80,this.x=t.random(0,t.width-this.r),this.y=0,this.speed=i+=t.customSpeed[t.level];var e=t.randomEmoji(1,t.emojiNum),n=t.baseEmojiPath+e+t.extenstion;this.img=new Image,this.img.src=n,s.drawImage(this.img,this.x,this.y)},draw:function(t){t.drawImage(this.img,this.x,this.y),this.update(t)},update:function(i){this.y<t.height-this.r?this.y+=this.speed:this.init(t.oGc)}}},createRain:function(){for(var t=this,i=0;i<this.rainNum;i++)this.timeOut=setTimeout(function(){var i=t.initRain();i.init(t.oGc),t.rainAry.push(i)},100*i)},move:function(){this.oGc.clearRect(0,0,this.width,this.height);for(var t=0;t<this.rainAry.length;t++)this.rainAry[t].draw(this.oGc);requestAnimationFrame(this.move)},random:function(t,i){return Math.random()*(i-t)+t},randomEmoji:function(t,i){return Math.floor(Math.random()*(i-t+1)+t)}},computed:{watchWidth:function(){return this.width=window.innerWidth},watchHeight:function(){return this.height=window.innerHeight}},props:["level"]},n=function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{width:"500",height:"500",id:"canvas"}})};n._withStripped=!0;var a={render:n,staticRenderFns:[]},o=a;var r=s("VU/8")(e,o,!1,null,null,null);r.options.__file="src\\components\\login\\funnyRain.vue";i.a=r.exports}});
//# sourceMappingURL=0.dd8f16f16b00fdf71e3c.js.map