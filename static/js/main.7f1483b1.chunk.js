(this["webpackJsonpinvest-helper5"]=this["webpackJsonpinvest-helper5"]||[]).push([[0],{15:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),s=n(7),i=n(0),o=n.n(i),c=n(8),l=n.n(c),u=(n(21),n(1)),p=n(2),d=n(4),h=n(3),m=n(5),f=(n(28),Object(m.b)((function(e){return{currentPortfolioValue:e.analytics.currentPortfolioValue}}),(function(e){return{dispatch:function(t){e(t)}}}))(function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).close=function(){e.props.dispatch({type:"ANALYTICS.TOGGLE",show:!1})},e.onChangeCurrentPortfolioValue=function(e){console.log(e.target.value)},e}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"Analytics"},o.a.createElement("button",{onClick:this.close,className:"toolbarButton",style:{float:"right",height:"25px",width:"25px"}},"X"),o.a.createElement("div",null,o.a.createElement("span",{className:"Analytics__Label"},"\u041e\u0446\u0435\u043d\u043a\u0430 \u0430\u043a\u0442\u0438\u0432\u043e\u0432:"),o.a.createElement("input",{id:"portfolioValueInput",onChange:this.onChangeCurrentPortfolioValue,type:"text",defaultValue:this.props.currentPortfolioValue})),o.a.createElement("div",null,o.a.createElement("span",{className:"Analytics__Label"},"\u0414\u043e\u0445\u043e\u0434\u043d\u043e\u0441\u0442\u044c:"),o.a.createElement("span",null,this.props.currentPortfolioValue))))}}]),n}(o.a.Component))),g=[{id:1,name:"\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0411\u0440\u043e\u043a\u0435\u0440",isActive:!0,amount:100500},{id:2,name:"\u0424\u0438\u043d\u0430\u043c",isActive:!0,amount:35e3},{id:3,name:"\u0422\u0438\u043d\u044c\u043a\u043e\u0444\u0444 \u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438",isActive:!0,amount:12e4},{id:4,name:"\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a",isActive:!0,amount:17e3},{id:5,name:"\u0412\u0422\u0411 \u041a\u0430\u043f\u0438\u0442\u0430\u043b",isActive:!0,amount:17e3},{id:6,name:"\u0411\u041a\u0421 \u0411\u0440\u043e\u043a\u0435\u0440",isActive:!1,amount:void 0},{id:7,name:"\u0418\u041a \u0424\u0440\u0438\u0434\u043e\u043c \u0424\u0438\u043d\u0430\u043d\u0441",isActive:!0,amount:17e3},{id:8,name:"Fidelity",isActive:!0,amount:17e3},{id:9,name:"Interactive brokers",isActive:!0,amount:8e5},{id:10,name:"TD Ameritrade",isActive:!1}],v=[{id:1,currencyId:1,dt:"2018-08-20T14:00:00.000Z",amount:6e4,Portfolio:g[0]},{id:2,currencyId:1,dt:"2018-08-27T14:00:00.000Z",amount:19e4,Portfolio:g[0]},{id:3,currencyId:1,dt:"2018-12-03T14:00:00.000Z",amount:5e4,Portfolio:g[0]},{id:4,currencyId:1,dt:"2018-12-10T14:00:00.000Z",amount:5e4,Portfolio:g[0]}];function b(e,t){for(var n=0;n<e.length;n++)if(e[n].id===t)return n;return-1}function O(e,t){var n=b(e,t);e.splice(n,1)}function E(e){for(var t=0,n=0;n<e.length;n++)parseInt(e[n].id)>t&&(t=e[n].id);return t+1}function w(e,t,n){var a=e.length,r=(t+1)*n;r>a&&(r=a);for(var s=[],i=t*n;i<r;i++)s.push(e[i]);return s}function y(e,t){var n=function(e,t,n){return"float"===n.type?function(e,t,n,a){var r=isFinite(parseFloat(e[n]))?parseFloat(e[n]):0,s=isFinite(parseFloat(t[n]))?parseFloat(t[n]):0;return r>s?a?1:-1:r<s?a?-1:1:0}(e,t,n.field,n.ascOrder):"default"===n.type?function(e,t,n,a){return e[n]>t[n]?a?1:-1:e[n]<t[n]?a?-1:1:0}(e,t,n.field,n.ascOrder):void 0};return e.sort((function(e,a){for(var r,s=0;s<t.length;s++){r=t[s];var i=n(e,a,r);if(0!==i)return i}return 0}))}function I(e){if(!isFinite(e))return"";var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),t[1]=t[1]?t[1].substring(0,2):"00",t.join(".")}function k(e){return C.apply(this,arguments)}function C(){return(C=Object(s.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP: "+n.status),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}g[0].Transfers=v;var T="\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0411\u0414, \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435";function j(e,t){e({type:"TOGGLE_THROBBER",showThrobber:t})}var x={portfolios:{backUrl:"/getportfolios",testItems:g,actionType:"SWITCH.PORTFOLIOS"},transfers:{backUrl:"/transfers.getall",testItems:v,actionType:"SWITCH.TRANSFERS"}};function S(e,t){return A.apply(this,arguments)}function A(){return(A=Object(s.a)(r.a.mark((function e(t,n){var a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(n,!0),a=x[t],e.next=4,k(a.backUrl);case 4:(s=e.sent)||(console.warn(T),s=a.testItems),console.log(s),n({type:a.actionType,items:s}),j(n,!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=Object(m.b)((function(e){return{currentSection:e.currentSection}}),null)(function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).testDataWarnText="\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0411\u0414, \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",e.switchToTransfers=function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:S("transfers",e.props.dispatch);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.switchToPortfolios=function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:S("portfolios",e.props.dispatch);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"MainMenu"},o.a.createElement("span",{onClick:this.switchToTransfers,className:"transfers"===this.props.currentSection?"MainMenu__Item MainMenu__Item-active":"MainMenu__Item"},"\u0417\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f"),o.a.createElement("span",{onClick:this.switchToPortfolios,className:"portfolios"===this.props.currentSection?"MainMenu__Item MainMenu__Item-active":"MainMenu__Item"},"\u041f\u043e\u0440\u0442\u0444\u0435\u043b\u0438"))}}]),n}(o.a.Component)),P=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).deleteSelectedItems=function(t){e.props.dispatch({type:"DELETE_SELECTED_ITEMS"})},e.showItemBlock=function(t){e.props.dispatch({type:"TOGGLE_ITEM_BLOCK",showAddEditBlock:!0})},e.showDisplaySettings=function(t){e.props.dispatch({type:"DISPLAYSETTINGS.TOGGLE",showDisplaySettings:!0})},e.showTransfersAnalytics=function(t){e.props.dispatch({type:"ANALYTICS.TRANSFERS",showDisplaySettings:!0})},e}return Object(p.a)(n,[{key:"render",value:function(){var e=[];return e.push(o.a.createElement("button",{key:"btnDel",onClick:this.deleteSelectedItems,className:"toolbarButton"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),e.push(o.a.createElement("button",{key:"btnAdd",onClick:this.showItemBlock,className:"toolbarButton"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),e.push(o.a.createElement("button",{key:"btnSettings",onClick:this.showDisplaySettings,className:"toolbarButton"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430")),"transfers"===this.props.currentSection&&e.push(o.a.createElement("button",{key:"transfers_Analytics",onClick:this.showTransfersAnalytics,className:"toolbarButton"},"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430")),o.a.createElement("div",{className:"ToolbarTop"},e)}}]),n}(o.a.Component),B=Object(m.b)((function(e){return{currentSection:e.currentSection}}),null)(P),N=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onChangeCheckBox=function(){e.props.dispatch({type:"TOGGLE_SELECT_ROW",item:e.props.item})},e.rowClick=function(t){"rowCheck"!==t.target.name&&(t.shiftKey?e.props.dispatch({type:"SHIFT_CLICK",rowId:e.props.item.id}):e.props.dispatch({type:"TOGGLE_ROW_TOOLBAR",rowId:e.props.item.id}))},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.item,t=this.props.columns.filter((function(e){return e.visible})),n=[];this.props.withCheckBoxes&&n.push(o.a.createElement("td",{key:"td_checkBox_itemId_"+e.id},o.a.createElement("input",{type:"checkbox",name:"rowCheck",onChange:this.onChangeCheckBox,checked:this.props.selected})));for(var a=0;a<t.length;a++){var r="";t[a].format?r=t[a].format(e[t[a].field]):e[t[a].field]&&(r=e[t[a].field].toString()),n.push(o.a.createElement("td",{key:"td_itemId_"+e.id+"_col_"+a,style:t[a].style},r))}return o.a.createElement("tr",{key:e.id,className:this.props.selected?"rowSel":"",onClick:this.rowClick},n)}}]),n}(o.a.Component),L=Object(m.b)((function(e){return{columns:e.columns,items:e.items,withCheckBoxes:e.settings.withCheckBoxes,shiftClickItemId:e.settings.shiftClickItemId}}))(N),G=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).delete=function(t){e.props.dispatch({type:"ITEM.DELETE",itemId:e.props.item.id})},e.edit=function(t){e.props.dispatch({type:"TOGGLE_ITEM_BLOCK",showAddEditBlock:!0,editItem:e.props.item})},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"TOGGLE_ITEM_BLOCK",showAddEditBlock:!1})}},{key:"render",value:function(){return o.a.createElement("tr",null,o.a.createElement("td",{colSpan:this.props.columns.filter((function(e){return e.visible})).length},o.a.createElement("button",{onClick:this.delete,className:"toolbarButton"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),o.a.createElement("button",{onClick:this.edit,className:"toolbarButton"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))}}]),n}(o.a.Component),R=Object(m.b)((function(e){return{columns:e.columns}}),null)(G),D=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(L,{key:e.id,item:e,selected:this.props.selected}),this.props.needShowToolbar?o.a.createElement(R,{item:e}):null)}}]),n}(o.a.Component),M=Object(m.b)(null)(D),F=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){for(var e=w(this.props.items,this.props.activePage,this.props.rowsinPage),t=[],n=0;n<e.length;n++){var a=!!~this.props.selectedItems.indexOf(e[n].id),r=this.props.toolBarRowId===e[n].id;t.push(o.a.createElement(M,{key:"scrollerRow_"+n,data:e[n],selected:a,needShowToolbar:r}))}return o.a.createElement("tbody",null,t)}}]),n}(o.a.Component),V=Object(m.b)((function(e){return{items:e.items,activePage:e.settings.activePage,rowsinPage:e.settings.rowsinPage,toolBarRowId:e.settings.toolBarRowId,selectedItems:e.selectedItems}}))(F),W=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).goToPage=function(t){e.props.dispatch({type:"GO_TO_PAGE",page:e.props.data.pageNum})},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.data;return o.a.createElement("span",{onClick:this.goToPage,className:this.props.isActive?"activePage":""},e.pageNum+1)}}]),n}(o.a.Component),H=Object(m.b)(null,null)(W),K=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("span",{className:"pagerFiller"},"...")}}]),n}(o.a.Component),U=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.rowsinPage,t=this.props.rowsCount,n=this.props.activePage,a=[],r=(t-t%e)/e;t%e>0&&(r+=1);for(var s=0;s<r;s++){var i={};i.pageNum=s;var c=o.a.createElement(H,{key:"pg"+i.pageNum,data:i,isActive:n===s});r>10?(0===s&&s<n-2&&(a.push(c),n-2!==1&&a.push(o.a.createElement(K,{key:"filler"+i.pageNum}))),s>=n-2&&s<=n+2&&a.push(c),s===r-1&&s>n+2&&(n+2!==r-2&&a.push(o.a.createElement(K,{key:"filler"+i.pageNum})),a.push(c))):a.push(c)}return o.a.createElement("div",{className:"pageBlock"},a)}}]),n}(o.a.Component),Y=Object(m.b)((function(e){return{activePage:e.settings.activePage,rowsinPage:e.settings.rowsinPage,rowsCount:e.items.length}}))(U),X=Object(m.b)((function(e){return{currentSection:e.currentSection}}),(function(e){return{toggleSortParams:function(t,n,a){e(function(e,t,n){return{type:"SORT.TOGGLE",field:e,sortType:t,ctrlPressed:n}}(t,n,a))}}}))(function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).sort=function(t){var n=e.props.type?e.props.type:"default",a=e.props.field,r=t.ctrlKey;e.props.toggleSortParams(a,n,r)},e}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("td",{className:this.props.headerClassName,style:this.props.headerStyle},o.a.createElement("span",{className:"sortHeader",onClick:this.sort},this.props.text),o.a.createElement("span",{className:this.props.sortOrderClassName}),o.a.createElement("span",{className:"sortNumber"},this.props.sortIndex))}}]),n}(o.a.Component)),Z=Object(m.b)((function(e){return{columns:e.columns,items:e.items,page:e.settings.activePage,withCheckBoxes:e.settings.withCheckBoxes,rowsinPage:e.settings.rowsinPage,selectedItems:e.selectedItems,sortParams:e.sortParams}}),(function(e){return{dispatch:function(t){e(t)}}}))(function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onChangeCheckBox=function(t){e.props.dispatch({type:"TOGGLE_ACTIVE_PAGE_ROW_SELECTION",selected:t.target.checked})},e.isAllRowsSelectedInPage=function(){for(var t=w(e.props.items,e.props.page,e.props.rowsinPage),n=!0,a=0;a<t.length;a++)-1===e.props.selectedItems.indexOf(t[a].id)&&(n=!1);return 0===t.length&&(n=!1),n},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.sortParams,t=this.props.columns.filter((function(e){return e.visible})),n=[],a=[];this.props.withCheckBoxes&&(n.push(o.a.createElement("col",{key:"col_cb",width:"50"})),a.push(o.a.createElement("td",{key:"headItem_cb"},o.a.createElement("input",{type:"checkbox",name:"rowCheck",onChange:this.onChangeCheckBox,checked:this.isAllRowsSelectedInPage()}))));for(var r=0;r<t.length;r++){var s=void 0,i=void 0;if(e.length>0)for(var c=0;c<e.length;c++)e[c].field===t[r].field&&(s=c+1,i=e[c].ascOrder?"sortArrowUp":"sortArrowDown");n.push(o.a.createElement("col",{key:"col_"+r,width:t[r].width})),a.push(o.a.createElement(X,{key:"headItem_"+r,field:t[r].field,type:t[r].type,visible:t[r].visible,headerClassName:t[r].headerClassName,headerStyle:t[r].headerStyle,text:t[r].text,sortIndex:s,sortOrderClassName:i}))}return o.a.createElement(o.a.Fragment,null,o.a.createElement("colgroup",null,n),o.a.createElement("thead",null,o.a.createElement("tr",null,a)))}}]),n}(o.a.Component)),J=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={id:e.props.editItem?e.props.editItem.id:0,name:e.props.editItem?e.props.editItem.name:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",isActive:!!e.props.editItem&&e.props.editItem.isActive},e.save=function(t){var n={};n.id=e.state.id,n.name=e.state.name,n.isActive=e.state.isActive,console.log(n),e.props.editItem?e.props.dispatch({type:"ITEM.EDIT",item:n}):(n.id=E(e.props.items),e.props.dispatch({type:"ITEM.ADD",item:n}))},e.close=function(t){e.props.dispatch({type:"TOGGLE_ITEM_BLOCK",showAddEditBlock:!1})},e.onNameChange=function(t){e.setState({name:t.target.value})},e.onStatusChange=function(t){console.log(t.target.value),e.setState({isActive:t.target.checked})},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"TOGGLE_ROW_TOOLBAR",rowId:null})}},{key:"render",value:function(){var e={};return this.props.editItem?e=this.props.editItem:(e.name="\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u04351",e.isActive=!1),o.a.createElement("div",{className:"itemBlock"},o.a.createElement("button",{onClick:this.close,className:"toolbarButton",style:{float:"right",height:"25px",width:"25px"}},"X"),o.a.createElement("div",null,o.a.createElement("span",{className:"itemBlock__label"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"),o.a.createElement("input",{id:"fio",onChange:this.onNameChange,type:"text",defaultValue:e.name})),o.a.createElement("div",null,o.a.createElement("span",{className:"itemBlock__label"},"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439"),o.a.createElement("input",{id:"status",onChange:this.onStatusChange,type:"checkbox",defaultChecked:e.isActive})),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.save,className:"toolbarButton",style:{marginTop:"25px"}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))}}]),n}(o.a.Component),$=Object(m.b)((function(e){return{items:e.items,editItem:e.settings.editItem}}))(J),q=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={columns:e.props.columns,rowsinPage:e.props.rowsinPage,withCheckBoxes:e.props.withCheckBoxes},e.save=function(t){e.props.dispatch({type:"DISPLAYSETTINGS.SAVE",columns:e.state.columns,rowsinPage:e.state.rowsinPage,withCheckBoxes:e.state.withCheckBoxes})},e.close=function(t){e.props.dispatch({type:"DISPLAYSETTINGS.TOGGLE",showDisplaySettings:!1})},e.onVisibleChange=function(t){var n=Object.assign([],e.state.columns);n[t.target.getAttribute("colnumber")].visible=t.target.checked,e.setState({columns:n})},e.onNeedCheckBoxesChange=function(t){e.setState({withCheckBoxes:t.target.checked})},e.onRowsPerPageChange=function(t){var n=parseInt(t.target.value),a=parseInt(t.target.getAttribute("max"));n>a&&(t.target.value=a),e.setState({rowsinPage:n})},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"TOGGLE_ROW_TOOLBAR",rowId:null})}},{key:"render",value:function(){for(var e=this.props.columns,t=[],n=0;n<e.length;n++)t.push(o.a.createElement("div",{key:"columnSettings_"+n},o.a.createElement("label",{htmlFor:"columnSettingsInp_"+n},e[n].text),o.a.createElement("input",{id:"columnSettingsInp_"+n,colnumber:n,field:e[n].field,onChange:this.onVisibleChange,type:"checkbox",defaultChecked:e[n].visible})));return o.a.createElement("div",{className:"itemBlock"},o.a.createElement("button",{onClick:this.close,className:"toolbarButton",style:{float:"right",height:"25px",width:"25px"}},"X"),o.a.createElement("div",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0435\u0439"),t,o.a.createElement("div",null,o.a.createElement("span",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435:"),o.a.createElement("input",{type:"number",min:1,max:100,name:"rowsPerPage",onChange:this.onRowsPerPageChange,defaultValue:this.props.rowsinPage,style:{marginLeft:"10px",width:"50px"}})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"inp_needCheckBoxes"},"\u0427\u0435\u043a\u0431\u043e\u043a\u0441\u044b"),o.a.createElement("input",{id:"inp_needCheckBoxes",type:"checkbox",onChange:this.onNeedCheckBoxesChange,defaultChecked:this.props.withCheckBoxes})),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.save,className:"toolbarButton",style:{marginTop:"25px"}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))}}]),n}(o.a.Component),z=Object(m.b)((function(e){return{columns:e.columns,rowsinPage:e.settings.rowsinPage,withCheckBoxes:e.settings.withCheckBoxes}}))(q),Q=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:"inline-block",position:"relative"}},this.props.showAddEditBlock?o.a.createElement($,null):null,this.props.showDisplaySettings?o.a.createElement(z,null):null,o.a.createElement("div",{className:"rScroller"},o.a.createElement("div",{className:"rScrollerHeader"},o.a.createElement(B,null)),o.a.createElement("table",{cellSpacing:"0"},o.a.createElement(Z,null),o.a.createElement(V,null)),o.a.createElement(Y,null)))}}]),n}(o.a.Component),ee=Object(m.b)((function(e){return{showAddEditBlock:e.settings.showAddEditBlock,showDisplaySettings:e.settings.showDisplaySettings}}),null)(Q),te=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Throbber"})}}]),n}(o.a.Component),ne=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(_,null),this.props.showThrobber?o.a.createElement(te,null):o.a.createElement(ee,null),this.props.showAnalytics?o.a.createElement(f,null):null)}}]),n}(o.a.Component),ae=Object(m.b)((function(e){return{showThrobber:e.showThrobber,showAnalytics:e.analytics.show}}),null)(ne);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=n(9),se={analytics:{currentPortfolioValue:4e5},currentSection:"portfolios",columns:[{width:"200px",field:"name",text:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",visible:!0},{width:"160px",field:"isActive",text:"\u0421\u0442\u0430\u0442\u0443\u0441",format:function(e){return e?"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439":"\u041d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439"},visible:!0},{width:"150px",field:"amount",text:"\u0421\u0443\u043c\u043c\u0430",type:"float",headerClassName:"header-amount",style:{textAlign:"right",paddingRight:"15px"},format:I,visible:!0}],items:g,selectedItems:[],settings:{rowsinPage:5,activePage:0,withCheckBoxes:!1,showDisplaySettings:!1,showAddEditBlock:!1,editItem:null,shiftClickItemId:null,toolBarRowId:null},showThrobber:!1,sortParams:[{field:"name",type:"default",ascOrder:!0}]},ie={toggle:function(e,t){var n=Object.assign({},e);return n.analytics.show=t.show,n},transfers:function(e,t){var n=Object.assign({},e);if("transfers"!==n.currentSection)return console.warn("\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430 \u043f\u043e\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0437\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439"),n;n.analytics.show=!0;var a=[{width:"100px",field:"dt",text:"\u0414\u0430\u0442\u0430",format:function(e){return new Date(e).toLocaleDateString()},visible:!0},{width:"200px",field:"Portfolio",text:"\u041f\u043e\u0440\u0442\u0444\u0435\u043b\u044c",format:function(e){return e.name},visible:!0},{width:"120px",field:"Portfolio",text:"\u0421\u0442\u0430\u0442\u0443\u0441",format:function(e){return e.isActive?"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439":"\u041d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439"},visible:!0},{width:"150px",field:"amount",text:"\u0421\u0443\u043c\u043c\u0430",type:"float",headerClassName:"header-amount",style:{textAlign:"right",paddingRight:"15px"},format:I,visible:!0},{width:"140px",field:"daysCount",text:"\u041a\u043e\u043b-\u0432\u043e \u0434\u043d\u0435\u0439",type:"float",headerClassName:"header-amount",style:{textAlign:"right",paddingRight:"15px"},format:I,visible:!0},{width:"120px",field:"amountDisc",text:"\u041f\u043e\u0434 6 %",type:"float",headerClassName:"header-amount",style:{textAlign:"right",paddingRight:"15px"},format:I,visible:!0}];return n.columns=a,function(e){for(var t=0;t<e.length;t++){var n=e[t],a=new Date(n.dt),r=new Date;n.daysCount=(r-a)/864e5,n.amountDisc=n.amount*(1+.06*n.daysCount/366)}}(n.items),n.settings.activePage=0,n}},oe={add:function(e,t){var n=Object.assign({},e),a=Object.assign([],n.items);return a.push(t.item),y(a,n.sortParams),n.items=a,n.settings.showAddEditBlock=!1,n},edit:function(e,t){var n=Object.assign({},e),a=Object.assign([],n.items);return O(a,t.item.id),a.push(t.item),y(a,n.sortParams),n.items=a,n.settings.showAddEditBlock=!1,n},delete:function(e,t){var n=Object.assign({},e),a=Object.assign([],n.items);return O(a,t.itemId),n.selectedItems=[],n.items=a,n}},ce={toggle:function(e,t){var n={field:t.field,type:t.sortType,ascOrder:!0},a=Object.assign({},e),r=Object.assign([],a.sortParams);if(r.length>0&&r[0].field===n.field&&(n.ascOrder=!r[0].ascOrder),t.ctrlPressed){for(var s=!1,i=0;i<r.length;i++)r[i].field===n.field&&(n.ascOrder=!r[i].ascOrder,r[i]=n,s=!0);s||r.push(n)}else(r=[]).push(n);var o=Object.assign([],a.items);return y(o,r),a.items=o,a.sortParams=r,a},run:function(e,t){var n=Object.assign({},e),a=Object.assign([],n.items);return y(a,n.sortParams),n.items=a,n}},le={toggle:function(e,t){var n=Object.assign({},e);return n.settings.showDisplaySettings=t.showDisplaySettings,n},save:function(e,t){var n=Object.assign({},e);return n.columns=t.columns,n.settings.rowsinPage=t.rowsinPage,n.settings.withCheckBoxes=t.withCheckBoxes,n.settings.showDisplaySettings=!1,n.settings.activePage=0,n}},ue={transfers:function(e,t){var n=Object.assign({},e);n.currentSection="transfers";var a=[{width:"100px",field:"dt",text:"\u0414\u0430\u0442\u0430",format:function(e){return new Date(e).toLocaleDateString()},visible:!0},{width:"200px",field:"Portfolio",text:"\u041f\u043e\u0440\u0442\u0444\u0435\u043b\u044c",format:function(e){return e.name},visible:!0},{width:"150px",field:"Portfolio",text:"\u0421\u0442\u0430\u0442\u0443\u0441",format:function(e){return e.isActive?"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439":"\u041d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439"},visible:!0},{width:"150px",field:"amount",text:"\u0421\u0443\u043c\u043c\u0430",type:"float",headerClassName:"header-amount",style:{textAlign:"right",paddingRight:"15px"},format:I,visible:!0}];return n.columns=a,n.items=t.items,n.page=0,n},portfolios:function(e,t){var n=Object.assign({},e);n.currentSection="portfolios";var a=[{width:"250px",field:"name",text:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",visible:!0},{width:"160px",field:"isActive",text:"\u0421\u0442\u0430\u0442\u0443\u0441",format:function(e){return e?"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439":"\u041d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439"},visible:!0},{width:"150px",field:"Transfers",text:"\u0421\u0443\u043c\u043c\u0430",type:"float",style:{textAlign:"right",paddingRight:"15px"},format:function(e){if(e)return I(e.reduce((function(e,t){return e+t.amount}),0))},visible:!0}];return n.columns=a,n.items=t.items,n.page=0,n}},pe=function(e,t){var n=Object.assign({},e);return n.settings.activePage=t.page,n},de=function(e,t){var n=Object.assign({},e);return n.items=t.items,y(n.items,n.sortParams),n},he=function(e,t){var n=Object.assign({},e);return n.settings.showAddEditBlock=t.showAddEditBlock,t.editItem?n.settings.editItem=t.editItem:n.settings.editItem=null,n},me=function(e,t){var n=t.item.id,a=Object.assign({},e),r=Object.assign([],a.selectedItems);return~r.indexOf(n)?r.splice(r.indexOf(n),1):r.push(n),a.selectedItems=r,a.showAddEditBlock=!1,a},fe=function(e,t){var n=Object.assign({},e);return n.showThrobber=t.showThrobber,n},ge=function(e,t){for(var n=Object.assign({},e),a=Object.assign([],n.items),r=Object.assign([],n.selectedItems),s=0;s<r.length;s++)O(a,r[s]);return n.selectedItems=[],n.items=a,n},ve=function(e,t){var n=Object.assign({},e),a=Object.assign([],n.selectedItems);if(t.selected){a=[];for(var r=w(n.items,n.page,n.rowsinPage),s=0;s<r.length;s++)a.push(r[s].id)}else a=[];return n.selectedItems=a,n.showAddEditBlock=!1,n},be=function(e,t){var n=Object.assign({},e);return n.settings.toolBarRowId===t.rowId?n.settings.toolBarRowId=null:n.settings.toolBarRowId=t.rowId,n},Oe=function(e,t){var n=Object.assign({},e),a=Object.assign([],n.selectedItems);if(n.settings.toolBarRowId=null,n.settings.showAddEditBlock=!1,n.settings.shiftClickItemId){var r=b(n.items,n.settings.shiftClickItemId),s=b(n.items,t.rowId);if(r>s){var i=r;r=s,s=i}a=[];for(var o=r;o<=s;o++)a.push(n.items[o].id);n.settings.shiftClickItemId=n.items[s].id}else n.settings.shiftClickItemId=t.rowId,a.push(t.rowId);return n.selectedItems=a,n},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANALYTICS.TOGGLE":return ie.toggle(e,t);case"ANALYTICS.TRANSFERS":return ie.transfers(e,t);case"ITEM.ADD":return oe.add(e,t);case"ITEM.DELETE":return oe.delete(e,t);case"ITEM.EDIT":return oe.edit(e,t);case"ITEMS.UPDATE":return de(e,t);case"DISPLAYSETTINGS.TOGGLE":return le.toggle(e,t);case"DISPLAYSETTINGS.SAVE":return le.save(e,t);case"SORT.RUN":return ce.run(e,t);case"SORT.TOGGLE":return ce.toggle(e,t);case"SWITCH.TRANSFERS":return ue.transfers(e,t);case"SWITCH.PORTFOLIOS":return ue.portfolios(e,t);case"DELETE_SELECTED_ITEMS":return ge(e);case"GO_TO_PAGE":return pe(e,t);case"TOGGLE_ACTIVE_PAGE_ROW_SELECTION":return ve(e,t);case"TOGGLE_ITEM_BLOCK":return he(e,t);case"TOGGLE_ROW_TOOLBAR":return be(e,t);case"TOGGLE_SELECT_ROW":return me(e,t);case"TOGGLE_THROBBER":return fe(e,t);case"SHIFT_CLICK":return Oe(e,t);default:return e}};(function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null,console.warn("\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0411\u0414, \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."),y(se.items,se.sortParams),e.abrupt("return",se);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){var t=e,n=Object(re.b)(Ee,t,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(o.a.createElement(m.a,{store:n},o.a.createElement(ae,null)),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.7f1483b1.chunk.js.map