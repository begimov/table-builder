/**
 * Bundle of AWES table-builder
 * Generated: 2019-01-24
 * Version: 0.1.1
 */

!function(){"use strict";var t={state:{},mutations:{setData:(t,{param:e,data:a})=>{Vue.set(t,e,a)}}};var e={name:"table-builder",props:{data:{type:[Object,Array],default:function(){return[]}},storeData:{type:String,require:!0},rowUrl:{type:String,default:null}},computed:{table(){return this.reset(),this.$tableBuilder.state[this.storeData]}},created(){this.$tableBuilder.commit("setData",{param:this.storeData,data:this.data})},data:()=>({ColumnParam:"name",HelperComponent:"tb-column",MobileHelperComponent:"tb-mobile",activeItem:null}),methods:{setActiveItem(t,e){e?this.activeItem=t:this.reset()},reset(){this.activeItem=null}},render(t){if(!this.table.length)return this.$slots.empty?t("div",{attrs:{class:"tf-centerblock"}},[t("div",{attrs:{class:"tf-centerblock__cell"}},[t("div",{attrs:{class:"tf-infoblock tf-infoblock_center tf-infoblock_smart"}},this.$slots.empty)])]):t("div","");if(this.$scopedSlots.default)return t("div",this.table.map(e=>t("div",this.$scopedSlots.default(e))));const e=this.$slots.default.filter(t=>t.componentOptions&&t.componentOptions.tag===this.HelperComponent).map(t=>Object.assign({},t.componentOptions.propsData,{scopedSlots:t.data.scopedSlots&&t.data.scopedSlots.default?t.data.scopedSlots.default:null}));let a=void 0;return this.$slots.default.some(t=>!(!t.componentOptions||t.componentOptions.tag!==this.MobileHelperComponent)&&(a=t,!0)),t("div",{attrs:{class:"int-table"}},[t("table",{attrs:{class:"int-table__table"}},[t("thead",[t("tr",[e.map(e=>t("th",{class:[e.className]},(t=>t.charAt(0).toUpperCase()+t.slice(1))(e[this.ColumnParam]))),t("th")])]),t("tbody",this.table.map((s,i)=>{return[t("tb-row",{props:{tableOptions:e,data:s,index:i,active:this.activeItem===i,url:this.rowUrl},on:{setActive:this.setActiveItem}}),t("tb-mobile",{props:{mobileOptions:a,countRows:e.length}})]}))])])}};function a(t,e,a,s,i,o,r,n,l,c){"function"==typeof r&&(l=n,n=r,r=!1);const u="function"==typeof a?a.options:a;let p;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),s&&(u._scopeId=s),o?(p=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=p):e&&(p=r?function(){e.call(this,c(this.$root.$options.shadowRoot))}:function(t){e.call(this,n(t))}),p)if(u.functional){const t=u.render;u.render=function(e,a){return p.call(a),t(e,a)}}else{const t=u.beforeCreate;u.beforeCreate=t?[].concat(t,p):[p]}return a}const s=e;e.__file="table-builder.vue";var i=a({},void 0,s,void 0,void 0,void 0,void 0,void 0),o={name:"tb-row",props:{data:{type:Object,require:!0},tableOptions:{type:Array,require:!0},index:{type:Number,require:!0},active:{type:Boolean,default:!1},url:{type:String,default:null}},data:()=>({ColumnParam:"name"}),methods:{getCell(t,e){return e.scopedSlots?e.scopedSlots(t):this.data[e[this.ColumnParam]]},setActive(t){t.preventDefault(),t.stopPropagation(),this.$emit("setActive",this.index,!this.active)},goTo(t){let e=t.target.classList.contains("int-table__show");this.url&&!e&&(window.location.href=this.url+"/"+this.data.id)}},render(t){return t("tr",{class:{active:this.active,"int-table__block":!0},on:{click:this.goTo}},[this.tableOptions.map(e=>t("td",{class:[e.className]},this.getCell(this.data,e))),t("td",{on:{click:this.setActive},attrs:{class:"int-table__controll-tab int-table__controll-tab_big"}},[t("a",{attrs:{class:"int-table__show",href:""}},[t("i",{attrs:{class:"icon icon-box-down"}})])])])}};const r=o;o.__file="tb-row.vue";var n=a({},void 0,r,void 0,void 0,void 0,void 0,void 0),l={name:"tb-column",props:["name","className"]};const c=l;l.__file="tb-column.vue";var u=a({},void 0,c,void 0,void 0,void 0,void 0,void 0),p={name:"tb-mobile",props:{mobileOptions:{type:Object,require:!0},data:{type:Object,require:!0},countRows:{type:Number,default:1}},render(t){return t("tr",{attrs:{class:"int-table__hidden"}},[t("td",{attrs:{colspan:this.countRows+1}},this.mobileOptions.data.scopedSlots.default(this.data))])}};const d=p;p.__file="tb-mobile.vue";var m=a({},void 0,d,void 0,void 0,void 0,void 0,void 0),h={name:"paginate-builder",props:{data:{type:[Object,Array,Boolean],default:!1},url:{type:String,require:!0},storeData:{type:String,require:!0}},data:()=>({serverData:{}}),created(){!1===this.data?this.updateData():this.serverData=this.data},computed:{meta:function(){let t=_.get(this.serverData,"meta.pagination");return void 0===t?null:{current_page:t.current_page,from:t.from,last_page:t.last_page,per_page:t.per_page,to:t.to,total:t.total}},paginate:function(){if(!this.meta)return null;if(this.meta.last_page<2)return!1;if(this.meta.last_page<=7)return Array(this.meta.last_page).fill().map((t,e)=>e+1);let t=[1],e=this.meta.current_page-2,a=this.meta.current_page+2;e<=1?(e=2,a=6):a>=this.meta.last_page&&(a=this.meta.last_page-1,e=this.meta.last_page-6+1);for(let s=e;s<=a;s++)s!==e&&s!==a||2===s||s===this.meta.last_page-1?t.push(s):t.push(!1);return t.push(this.meta.last_page),t}},watch:{$route:"updateData",serverData:function(){this.$tableBuilder.commit("setData",{param:this.storeData,data:this.serverData.data})}},methods:{updateData(t,e){if(e&&_.isEqual(e.query,t.query))return;let a=this.$route.query;e&&!((t,e,a)=>_.isEqual(_.omit(t,a),_.omit(e,a)))(e.query,t.query,["page"])&&1!=a.page?this.setPage(1):this.fetchData(a)},fetchData(t){AWES.on("core:ajax",this.setLoader),AWES.ajax(t,this.url,"get").then(t=>{this.serverData=t.data}).catch(t=>{console.log(t)}).finally(()=>{AWES.off("core:ajax",this.setLoader)})},setLoader(t){this.$tableBuilder.commit("setData",{param:this.storeData+"_state",data:t.detail})},update(){this.updateData()},setPage(t){t>0&&t<=this.meta.last_page&&this.$router.push({query:Object.assign({},this.$route.query,{page:t.toString()})})}},beforeCreate(){this._routerRoot=this,this._router=AWES._vueRouter,this._router.init(this),Vue.util.defineReactive(this,"_route",this._router.history.current)}};const v=h;h.__file="paginate-builder.vue";var f=a({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return null!==t.meta?a("div",{staticClass:"pager"},[a("span",{staticClass:"pager__caption"},[t._v("Record "+t._s(t.meta.from)+"-"+t._s(t.meta.to)+" of "+t._s(t.meta.total))]),t._v(" "),t.paginate?a("div",{staticClass:"pager__middle"},[a("div",{staticClass:"pager__links"},[a("a",{staticClass:"pager__arr-left",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.setPage(t.meta.current_page-1)}}},[a("i",{staticClass:"icon icon-arrow-left"})]),t._v(" "),a("div",{staticClass:"pager__links-wrap"},t._l(t.paginate,function(e){return a("span",[e?a("a",{staticClass:"pager__link",class:{pager__link_active:e===t.meta.current_page},attrs:{href:""},on:{click:function(a){a.preventDefault(),t.setPage(e)}}},[t._v(t._s(e))]):a("span",{staticClass:"pager__spacer"},[t._v("...")])])}),0),t._v(" "),a("a",{staticClass:"pager__arr-right",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.setPage(t.meta.current_page+1)}}},[a("i",{staticClass:"icon icon-arrow-right"})])])]):t._e(),t._v(" "),a("div",{staticClass:"pager__shows"},[a("context-menu",{attrs:{top:""}},[a("template",{slot:"toggler"},[a("span",{staticClass:"pager__shows-link"},[t._v(t._s(t.meta.per_page))])]),t._v(" "),a("cm-query",{attrs:{param:{limit:""}}},[t._v("10")]),t._v(" "),a("cm-query",{attrs:{param:{limit:50}}},[t._v("50")]),t._v(" "),a("cm-query",{attrs:{param:{limit:100}}},[t._v("100")])],2)],1)]):t._e()},staticRenderFns:[]},void 0,v,void 0,!1,void 0,void 0,void 0);var g={installed:!1,install:function(t){this.installed||(this.installed=!0,t.component("table-builder",i),t.component("tb-row",n),t.component("tb-column",u),t.component("tb-mobile",m),t.component("paginate-builder",f))}};const b={modules:{vue:{src:"https://unpkg.com/vue@2.5.21/dist/vue.js",cb(){Vue.use(g)}},"vue-router":{src:"https://unpkg.com/vue-router@3.0.2/dist/vue-router.min.js",deps:["vue"],cb(){AWES._vueRouter=AWES._vueRouter||new VueRouter({mode:"history"})}},lodash:{src:"https://unpkg.com/lodash@4.17.11/lodash.min.js",deps:["vue"],cb(){Vue.prototype.$get=_.get}},vuex:{src:"https://unpkg.com/vuex@2.5.0/dist/vuex.min.js",deps:["vue"],cb(){Vue.prototype.$tableBuilder=new Vuex.Store(t)}},"awes-context-menu":{src:"https://storage.awes.io/680a7d07f89b94e7fc83be657a2daa27/awes-io/context-menu/v0.x.x/js/main.js"}},install(){}};window&&"AWES"in window?AWES.use(b):(window.__awes_plugins_stack__=window.__awes_plugins_stack__||[],window.__awes_plugins_stack__.push(b))}();
