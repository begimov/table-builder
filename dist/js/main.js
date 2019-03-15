/**
 * Bundle of AWES table-builder
 * Generated: 2019-03-15 20:29:02
 * Version: 1.0.13
 */

!function(){"use strict";var t={state:{},mutations:{setData:(t,{param:e,data:a})=>{Vue.set(t,e,a)}}};var e={scrollTo:"body",scrollDuration:200,mediaQueries:{mobile:"(max-width: 600px)",tablet:"(min-width: 601px) and (max-width: 900px)",desktop:"(min-width: 901px)"}},a={name:"table-builder",mixins:[{props:{mediaQueries:{type:Object,default(){return this._config.mediaQueries}}},data:()=>({matchedMedia:[]}),methods:{_getMediaName(t){return Object.keys(this.mediaQueries).find(e=>this.mediaQueries[e]===t)},_checkMediaMatch(t){return t.split(",").some(t=>this.matchedMedia.includes(t.trim()))},onMatchMedia(t){let e=this._getMediaName(t.media),a=this.matchedMedia.indexOf(e);t.matches&&!~a&&this.matchedMedia.push(e),!t.matches&&~a&&this.matchedMedia.splice(a,1)}},beforeCreate(){this._config=Object.assign(e,_.pick(AWES._config.tableBuilder,Object.keys(e)))},beforeMount(){this._mq={};for(let t in this.mediaQueries)try{this._mq[t]=window.matchMedia(this.mediaQueries[t]),this._mq[t].matches&&this.matchedMedia.push(t),this._mq[t].addListener(this.onMatchMedia)}catch(t){console.log("Table builder: ",t)}},beforeDestroy(){if(this._mq)for(let t in this._mq)this._mq[t].removeListener(this.onMatchMedia)}}],props:{storeData:{type:String,required:!0},default:[Array,Object],rowUrl:String},data:()=>({activeItem:null}),computed:{tableData(){let t=AWES._store.state[this.storeData];return!(!t||!t.length)&&t},isLoading(){return AWES._store.state[this.storeData+"_loading"]},columns(){return this.$slots.default&&this.$slots.default.filter(t=>t.componentOptions&&"tb-column"===t.componentOptions.tag)},hasColumns(){return this.columns&&!!this.columns.length},tableOptions(){return this.columns&&this.columns.map(t=>Object.assign({},t.componentOptions.propsData,{className:t.data.staticClass,scopedSlots:t.data.scopedSlots&&t.data.scopedSlots.default?t.data.scopedSlots.default:null}))},shownOptions(){return this.tableOptions&&this.tableOptions.filter(t=>{if(!t.media||t.media&&this._checkMediaMatch(t.media))return!0})},hiddenOptions(){return this.tableOptions&&this.tableOptions.filter(t=>{if(t.media&&!this._checkMediaMatch(t.media))return!0}).map(t=>t.name)},hiddenColumnData(){return!!(this.hiddenOptions&&this.hiddenOptions.length&&this.tableData)&&this.tableData.map(t=>{let e={};return Object.keys(t).filter(t=>this.hiddenOptions.includes(t)).forEach(a=>{e[a]=t[a]}),e})},columnNames(){return this.shownOptions.map(t=>(t=>t.charAt(0).toUpperCase()+t.slice(1))(void 0!==t.label?t.label:t.name))}},watch:{hiddenColumnData(t){!1===t&&(this.activeItem=null)}},methods:{setActiveItem(t,e){this.activeItem=e?t:null}},beforeCreate(){let t=this.$options.propsData.default;if(!t)return;let e=Array.isArray(t)?t.slice():[Object.assign({},this.$options.propsData.default)];AWES._store.commit("setData",{param:this.$options.propsData.storeData,data:e})}};function s(t,e,a,s,i,r,o,n,l,d){"function"==typeof o&&(l=n,n=o,o=!1);const c="function"==typeof a?a.options:a;let u;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),s&&(c._scopeId=s),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):e&&(u=o?function(){e.call(this,d(this.$root.$options.shadowRoot))}:function(t){e.call(this,n(t))}),u)if(c.functional){const t=c.render;c.render=function(e,a){return u.call(a),t(e,a)}}else{const t=c.beforeCreate;c.beforeCreate=t?[].concat(t,u):[u]}return a}const i=a;a.__file="table-builder.vue";var r=s({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"int-table",class:{"is-loading":t.isLoading,"is-empty":!t.tableData&&!t.isLoading}},[t._t("header"),t._v(" "),t.tableData||t.isLoading?t._e():a("div",{staticClass:"int-table__no-data"},[t._t("empty",[t._v("\n            "+t._s(t.$lang.TABLE_NO_DATA)+"\n        ")])],2),t._v(" "),t.isLoading?a("div",{staticClass:"int-table__loader"},[t._t("loader",[t._v("\n            "+t._s(t.$lang.TABLE_LOADING)+"\n        ")])],2):t._e(),t._v(" "),t.tableData&&!t.hasColumns?a("div",{staticClass:"int-table__list"},t._l(t.tableData,function(e,s){return a("div",{key:s,staticClass:"int-table__list-row"},[t._t("list",["object"==typeof e?t._l(e,function(e,s){return a("div",{key:s,staticClass:"int-table__list-cell"},[a("span",{staticClass:"int-table__list-name"},[t._v(t._s(s)+" : ")]),t._v(" "),a("span",{staticClass:"int-table__list-value"},[t._v(t._s(e))])])}):[t._v("\n                    "+t._s(e)+"\n                ")]],{tableData:t.tableData,data:e,index:s})],2)}),0):t._e(),t._v(" "),t.tableData&&t.hasColumns?a("table",{staticClass:"int-table__table"},[a("thead",[a("tr",t._l(t.columnNames,function(e,s){return a("th",{key:s},[t._v(t._s(e))])}),0)]),t._v(" "),a("tbody",[t._l(t.tableData,function(e,s){return[a("tb-row",{key:s+"-row",attrs:{tableOptions:t.shownOptions,data:e,index:s,active:t.activeItem===s,url:t.rowUrl,matchedMedia:t.matchedMedia,showToggler:!!t.hiddenColumnData},on:{setActive:t.setActiveItem}}),t._v(" "),t.hiddenColumnData?a("tr",{directives:[{name:"show",rawName:"v-show",value:t.activeItem===s,expression:"activeItem === i"}],key:s+"-hidden-row",staticClass:"int-table__hidden"},[a("td",{attrs:{colspan:t.shownOptions.length+1}},[t._t("hidden",[a("ul",t._l(t.hiddenColumnData[s],function(e,s){return a("li",{key:s+"-hidden"},[t._v("\n                                    "+t._s(e)+"\n                                ")])}),0)],{rowData:e,data:t.hiddenColumnData[s],matchedMedia:t.matchedMedia,index:s})],2)]):t._e()]})],2)]):t._e(),t._v(" "),t._t("footer")],2)},staticRenderFns:[]},void 0,i,void 0,!1,void 0,void 0,void 0),o={name:"tb-row",props:{data:{type:Object,required:!0},tableOptions:{type:Array,required:!0},index:{type:Number,required:!0},active:{type:Boolean,default:!1},url:String,matchedMedia:Array,showToggler:{type:Boolean,default:!1}},computed:{urlFormatted(){let t=this.url,e=t.match(/(?!{)([\w.\[\]]+)(?=})/g);return e&&e.length&&e.forEach(e=>{t=t.replace("{"+e+"}",this.data[e]||"")}),t.replace(/([^:]\/)\/+/g,"$1")}},methods:{getCell(t,e){return e.scopedSlots?e.scopedSlots({data:t,index:this.index,active:this.active,matchedMedia:this.matchedMedia}):this.data[e.name]},setActive(t){t.preventDefault(),t.stopPropagation(),this.$emit("setActive",this.index,!this.active)},goTo(){this.url&&(window.location.href=this.urlFormatted)}},render(t){return t("tr",{class:{active:this.active,"int-table__block":!0,"is-link":this.url},on:{click:this.goTo}},[this.tableOptions.map(e=>t("td",{class:[e.className]},this.getCell(this.data,e))),this.showToggler?t("td",{on:{click:this.setActive},attrs:{class:"int-table__control-tab"}},[t("a",{attrs:{class:"int-table__show",href:""}},[t("i",{attrs:{class:"icon icon-box-down"}})])]):null])}};const n=o;o.__file="tb-row.vue";var l=s({},void 0,n,void 0,void 0,void 0,void 0,void 0),d={name:"tb-column",props:{name:String,label:String,media:String}};const c=d;d.__file="tb-column.vue";var u=s({},void 0,c,void 0,void 0,void 0,void 0,void 0),h={name:"paginate-builder",props:{default:{type:[Object,Array,Boolean],default:!1},url:{type:String,required:!0},storeData:{type:String,required:!0},scrollTo:{type:[String,Boolean],default(){return this._config.scrollTo}}},data:()=>({serverData:{}}),computed:{meta(){return!!this.serverData&&this.serverData.meta},hasData(){let t=this.serverData;return t&&t.data&&t.data.length},isLoading(){return AWES._store.state[this.storeData+"_loading"]},paginate:function(){if(!this.meta)return null;if(this.meta.last_page<2)return!1;if(this.meta.last_page<=7)return Array(this.meta.last_page).fill().map((t,e)=>e+1);let t=[1],e=this.meta.current_page-2,a=this.meta.current_page+2;e<=1?(e=2,a=6):a>=this.meta.last_page&&(a=this.meta.last_page-1,e=this.meta.last_page-6+1);for(let s=e;s<=a;s++)s!==e&&s!==a||2===s||s===this.meta.last_page-1?t.push(s):t.push(!1);return t.push(this.meta.last_page),t},scrollElement(){return this.scrollTo&&this._isMounted&&document.querySelector(this.scrollTo)}},watch:{$route:"updateData",serverData:function(){AWES._store.commit("setData",{param:this.storeData,data:this.serverData.data})}},methods:{updateData(t,e){if(e&&_.isEqual(e.query,t.query))return;let a=this.$route.query;e&&!((t,e,a)=>_.isEqual(_.omit(t,a),_.omit(e,a)))(e.query,t.query,["page"])&&1!=a.page?this.setPage(1):this.fetchData(a)},fetchData(t){AWES.on("core:ajax",this.setLoader),AWES.ajax(t,this.url,"get").then(t=>{this.serverData=t.data,this.scrollElement&&this.$SmoothScroll(this.scrollElement,this._config.scrollDuration)}).catch(t=>{console.log(t)}).finally(()=>{AWES.off("core:ajax",this.setLoader)})},setLoader(t){AWES._store.commit("setData",{param:this.storeData+"_loading",data:t.detail})},update(){this.updateData()},setPage(t){t>0&&t<=this.meta.last_page&&this.$router.push({query:Object.assign({},this.$route.query,{page:t.toString()})})}},beforeCreate(){this._routerRoot=this,this._router=AWES._vueRouter,this._router.init(this),Vue.util.defineReactive(this,"_route",this._router.history.current),this._config=Object.assign(e,_.pick(AWES._config.tableBuilder,Object.keys(e)))},created(){!1===this.default?this.updateData():this.serverData=this.default}};const p=h;h.__file="paginate-builder.vue";var m=s({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.meta&&t.hasData?a("div",{staticClass:"pager",class:{"is-loading":t.isLoading}},[a("span",{staticClass:"pager__caption"},[t._v("Record "+t._s(t.meta.from)+"-"+t._s(t.meta.to)+" of "+t._s(t.meta.total))]),t._v(" "),t.paginate?a("div",{staticClass:"pager__middle"},[a("div",{staticClass:"pager__links"},[a("a",{staticClass:"pager__arr-left",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.setPage(t.meta.current_page-1)}}},[a("i",{staticClass:"icon icon-arrow-left"})]),t._v(" "),a("div",{staticClass:"pager__links-wrap"},t._l(t.paginate,function(e,s){return a("span",{key:s},[e?a("a",{staticClass:"pager__link",class:{pager__link_active:e===t.meta.current_page},attrs:{href:""},on:{click:function(a){a.preventDefault(),t.setPage(e)}}},[t._v(t._s(e))]):a("span",{staticClass:"pager__spacer"},[t._v("...")])])}),0),t._v(" "),a("a",{staticClass:"pager__arr-right",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.setPage(t.meta.current_page+1)}}},[a("i",{staticClass:"icon icon-arrow-right"})])])]):t._e(),t._v(" "),a("div",{staticClass:"pager__shows"},[a("context-menu",{attrs:{top:""}},[a("template",{slot:"toggler"},[a("span",{staticClass:"pager__shows-link"},[t._v(t._s(t.meta.per_page))])]),t._v(" "),a("cm-query",{attrs:{param:{limit:""}}},[t._v("10")]),t._v(" "),a("cm-query",{attrs:{param:{limit:50}}},[t._v("50")]),t._v(" "),a("cm-query",{attrs:{param:{limit:100}}},[t._v("100")])],2)],1)]):t._e()},staticRenderFns:[]},void 0,p,void 0,!1,void 0,void 0,void 0);var v={installed:!1,install:function(t){this.installed||(this.installed=!0,t.component("table-builder",r),t.component("tb-row",l),t.component("tb-column",u),t.component("paginate-builder",m))}},g={TABLE_NO_DATA:"No data, check the connection quality",TABLE_LOADING:"Loading..."};const f={modules:{vue:{src:"https://unpkg.com/vue@2.5.21/dist/vue.js",cb(){Vue.use(v)}},"vue-router":{src:"https://unpkg.com/vue-router@3.0.2/dist/vue-router.min.js",deps:["vue"],cb(){AWES._vueRouter=AWES._vueRouter||new VueRouter({mode:"history"})}},"vue-smoothscroll":{src:"https://unpkg.com/vue-smoothscroll@0.2.0/dist/vue-smoothscroll.js",deps:["vue"],cb(){Vue.use(VueSmoothScroll)}},lodash:{src:"https://unpkg.com/lodash@4.17.11/lodash.min.js",deps:["vue"],cb(){Vue.prototype.$get=_.get}},vuex:{src:"https://unpkg.com/vuex@2.5.0/dist/vuex.min.js",deps:["vue"],cb(){AWES._store=AWES._store||new Vuex.Store(t)}},"awes-context-menu":{src:"https://storage.awes.io/680a7d07f89b94e7fc83be657a2daa27/awes-io/context-menu/v0.x.x/js/main.js"}},install(){AWES.lang=g}};window&&"AWES"in window?AWES.use(f):(window.__awes_plugins_stack__=window.__awes_plugins_stack__||[],window.__awes_plugins_stack__.push(f))}();
