(this["webpackJsonpinvest-helper5"]=this["webpackJsonpinvest-helper5"]||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),s=n(8),i=n(0),o=n.n(i),c=n(9),l=n.n(c),u=(n(22),n(1)),p=n(2),d=n(4),h=n(3),m=n(5),f=n(6),g=(n(29),[{id:1,name:"\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0411\u0440\u043e\u043a\u0435\u0440",isActive:!0,amount:100500},{id:2,name:"\u0424\u0438\u043d\u0430\u043c",isActive:!0,amount:35e3},{id:3,name:"\u0422\u0438\u043d\u044c\u043a\u043e\u0444\u0444 \u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438",isActive:!0,amount:12e4},{id:4,name:"\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a",isActive:!0,amount:17e3},{id:5,name:"\u0412\u0422\u0411 \u041a\u0430\u043f\u0438\u0442\u0430\u043b",isActive:!0,amount:17e3},{id:6,name:"\u0411\u041a\u0421 \u0411\u0440\u043e\u043a\u0435\u0440",isActive:!1,amount:void 0},{id:7,name:"\u0418\u041a \u0424\u0440\u0438\u0434\u043e\u043c \u0424\u0438\u043d\u0430\u043d\u0441",isActive:!0,amount:17e3},{id:8,name:"Fidelity",isActive:!0,amount:17e3},{id:9,name:"Interactive brokers",isActive:!0,amount:8e5},{id:10,name:"TD Ameritrade",isActive:!1}]);function b(e,t){for(var n=0;n<e.length;n++)if(e[n].id===t)return n}function v(e,t){var n=b(e,t);e.splice(n,1)}function O(e){for(var t=0,n=0;n<e.length;n++)parseInt(e[n].id)>t&&(t=e[n].id);return t+1}function E(e,t,n){var a=e.length,r=(t+1)*n;r>a&&(r=a);for(var s=[],i=t*n;i<r;i++)s.push(e[i]);return s}function w(e,t){var n=function(e,t,n){return"float"===n.type?function(e,t,n,a){var r=isFinite(parseFloat(e[n]))?parseFloat(e[n]):0,s=isFinite(parseFloat(t[n]))?parseFloat(t[n]):0;return r>s?a?1:-1:r<s?a?-1:1:0}(e,t,n.field,n.ascOrder):"default"===n.type?function(e,t,n,a){return e[n]>t[n]?a?1:-1:e[n]<t[n]?a?-1:1:0}(e,t,n.field,n.ascOrder):void 0};return e.sort((function(e,a){for(var r,s=0;s<t.length;s++){r=t[s];var i=n(e,a,r);if(0!==i)return i}return 0}))}function y(e){if(!isFinite(e))return"";var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),t[1]=t[1]?t[1].substring(0,2):"00",t.join(".")}function I(e){return k.apply(this,arguments)}function k(){return(k=Object(s.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP: "+n.status),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j="\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0411\u0414, \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435";function C(e,t){e({type:"TOGGLE_THROBBER",showThrobber:t})}var T={portfolios:{backUrl:"/getportfolios",testItems:g,actionType:"SWITCH.PORTFOLIOS"},transfers:{backUrl:"/transfers.getall",testItems:[{id:1,portfolioId:2,currencyId:1,dt:"2018-08-20T14:00:00.000Z",amount:"60000.00",Portfolio:g[0]},{id:2,portfolioId:2,currencyId:1,dt:"2018-08-27T14:00:00.000Z",amount:"190000.00",Portfolio:g[0]},{id:3,portfolioId:2,currencyId:1,dt:"2018-12-03T14:00:00.000Z",amount:"50000.00",Portfolio:g[0]},{id:4,portfolioId:2,currencyId:1,dt:"2018-12-10T14:00:00.000Z",amount:"50000.00",Portfolio:g[0]}],actionType:"SWITCH.TRANSFERS"}};function x(e,t){return S.apply(this,arguments)}function S(){return(S=Object(s.a)(r.a.mark((function e(t,n){var a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(n,!0),a=T[t],e.next=4,I(a.backUrl);case 4:(s=e.sent)||(console.warn(j),s=a.testItems),console.log(s),n({type:a.actionType,items:s}),C(n,!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).testDataWarnText="\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0411\u0414, \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",n.switchToTransfers=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x("transfers",n.props.dispatch);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.switchToPortfolios=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x("portfolios",n.props.dispatch);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"MainMenu"},o.a.createElement("span",{onClick:this.switchToTransfers,className:"transfers"===this.props.currentSection?"MainMenu__Item MainMenu__Item-active":"MainMenu__Item"},"\u0417\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f"),o.a.createElement("span",{onClick:this.switchToPortfolios,className:"portfolios"===this.props.currentSection?"MainMenu__Item MainMenu__Item-active":"MainMenu__Item"},"\u041f\u043e\u0440\u0442\u0444\u0435\u043b\u0438"))}}]),t}(o.a.Component),_=Object(f.b)((function(e){return{currentSection:e.currentSection}}),null)(A),B=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).deleteSelectedItems=function(e){n.props.dispatch({type:"DELETE_SELECTED_ITEMS"})},n.showItemBlock=function(e){n.props.dispatch({type:"TOGGLE_ITEM_BLOCK",showAddEditBlock:!0})},n.showDisplaySettings=function(e){n.props.dispatch({type:"DISPLAYSETTINGS.TOGGLE",showDisplaySettings:!0})},n.showTransfersAnalytics=function(e){n.props.dispatch({type:"ANALYTICS.TRANSFERS",showDisplaySettings:!0})},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=[];return e.push(o.a.createElement("button",{key:"btnDel",onClick:this.deleteSelectedItems,className:"toolbarButton"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),e.push(o.a.createElement("button",{key:"btnAdd",onClick:this.showItemBlock,className:"toolbarButton"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),e.push(o.a.createElement("button",{key:"btnSettings",onClick:this.showDisplaySettings,className:"toolbarButton"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430")),"transfers"===this.props.currentSection&&e.push(o.a.createElement("button",{key:"transfers_Analytics",onClick:this.showTransfersAnalytics,className:"toolbarButton"},"\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430")),o.a.createElement("div",{className:"ToolbarTop"},e)}}]),t}(o.a.Component),P=Object(f.b)((function(e){return{currentSection:e.currentSection}}),null)(B),N=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onChangeCheckBox=function(){n.props.dispatch({type:"TOGGLE_SELECT_ROW",item:n.props.item})},n.rowClick=function(e){"rowCheck"!==e.target.name&&(e.shiftKey?n.props.dispatch({type:"SHIFT_CLICK",rowId:n.props.item.id}):n.props.dispatch({type:"TOGGLE_ROW_TOOLBAR",rowId:n.props.item.id}))},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.item,t=this.props.columns.filter((function(e){return e.visible})),n=[];this.props.withCheckBoxes&&n.push(o.a.createElement("td",{key:"td_checkBox_itemId_"+e.id},o.a.createElement("input",{type:"checkbox",name:"rowCheck",onChange:this.onChangeCheckBox,checked:this.props.selected})));for(var a=0;a<t.length;a++){var r="";t[a].format?r=t[a].format(e[t[a].field]):e[t[a].field]&&(r=e[t[a].field].toString()),n.push(o.a.createElement("td",{key:"td_itemId_"+e.id+"_col_"+a,style:t[a].style},r))}return o.a.createElement("tr",{key:e.id,className:this.props.selected?"rowSel":"",onClick:this.rowClick},n)}}]),t}(o.a.Component),L=Object(f.b)((function(e){return{columns:e.columns,items:e.items,withCheckBoxes:e.settings.withCheckBoxes,shiftClickItemId:e.settings.shiftClickItemId}}))(N),G=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).delete=function(e){n.props.dispatch({type:"ITEM.DELETE",itemId:n.props.item.id})},n.edit=function(e){n.props.dispatch({type:"TOGGLE_ITEM_BLOCK",showAddEditBlock:!0,editItem:n.props.item})},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"TOGGLE_ITEM_BLOCK",showAddEditBlock:!1})}},{key:"render",value:function(){return o.a.createElement("tr",null,o.a.createElement("td",{colSpan:this.props.columns.filter((function(e){return e.visible})).length},o.a.createElement("button",{onClick:this.delete,className:"toolbarButton"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),o.a.createElement("button",{onClick:this.edit,className:"toolbarButton"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))}}]),t}(o.a.Component),R=Object(f.b)((function(e){return{columns:e.columns}}),null)(G),D=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(L,{key:e.id,item:e,selected:this.props.selected}),this.props.needShowToolbar?o.a.createElement(R,{item:e}):null)}}]),t}(o.a.Component),M=Object(f.b)(null)(D),F=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){for(var e=E(this.props.items,this.props.activePage,this.props.rowsinPage),t=[],n=0;n<e.length;n++){var a=!!~this.props.selectedItems.indexOf(e[n].id),r=this.props.toolBarRowId===e[n].id;t.push(o.a.createElement(M,{key:"scrollerRow_"+n,data:e[n],selected:a,needShowToolbar:r}))}return o.a.createElement("tbody",null,t)}}]),t}(o.a.Component),W=Object(f.b)((function(e){return{items:e.items,activePage:e.settings.activePage,rowsinPage:e.settings.rowsinPage,toolBarRowId:e.settings.toolBarRowId,selectedItems:e.selectedItems}}))(F),H=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).goToPage=function(e){n.props.dispatch({type:"GO_TO_PAGE",page:n.props.data.pageNum})},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.data;return o.a.createElement("span",{onClick:this.goToPage,className:this.props.isActive?"activePage":""},e.pageNum+1)}}]),t}(o.a.Component),V=Object(f.b)(null,null)(H),K=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("span",{className:"pagerFiller"},"...")}}]),t}(o.a.Component),U=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.rowsinPage,t=this.props.rowsCount,n=this.props.activePage,a=[],r=(t-t%e)/e;t%e>0&&(r+=1);for(var s=0;s<r;s++){var i={};i.pageNum=s;var c=o.a.createElement(V,{key:"pg"+i.pageNum,data:i,isActive:n===s});r>10?(0===s&&s<n-2&&(a.push(c),n-2!==1&&a.push(o.a.createElement(K,{key:"filler"+i.pageNum}))),s>=n-2&&s<=n+2&&a.push(c),s===r-1&&s>n+2&&(n+2!==r-2&&a.push(o.a.createElement(K,{key:"filler"+i.pageNum})),a.push(c))):a.push(c)}return o.a.createElement("div",{className:"pageBlock"},a)}}]),t}(o.a.Component),Y=Object(f.b)((function(e){return{activePage:e.settings.activePage,rowsinPage:e.settings.rowsinPage,rowsCount:e.items.length}}))(U),X=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).sort=function(e){var t=n.props.type?n.props.type:"default",a=n.props.field,r=e.ctrlKey;n.props.toggleSortParams(a,t,r)},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("td",{className:this.props.headerClassName,style:this.props.headerStyle},o.a.createElement("span",{className:"sortHeader",onClick:this.sort},this.props.text),o.a.createElement("span",{className:this.props.sortOrderClassName}),o.a.createElement("span",{className:"sortNumber"},this.props.sortIndex))}}]),t}(o.a.Component),Z=Object(f.b)(null,(function(e){return{toggleSortParams:function(t,n,a){e(function(e,t,n){return{type:"SORT.TOGGLE",field:e,sortType:t,ctrlPressed:n}}(t,n,a))}}}))(X),J=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onChangeCheckBox=function(e){n.props.dispatch({type:"TOGGLE_ACTIVE_PAGE_ROW_SELECTION",selected:e.target.checked})},n.isAllRowsSelectedInPage=function(e){for(var t=E(n.props.items,n.props.page,n.props.rowsinPage),a=!0,r=0;r<t.length;r++)-1===n.props.selectedItems.indexOf(t[r].id)&&(a=!1);return 0===t.length&&(a=!1),a},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.sortParams,t=this.props.columns.filter((function(e){return e.visible})),n=[],a=[];this.props.withCheckBoxes&&(n.push(o.a.createElement("col",{key:"col_cb",width:"50"})),a.push(o.a.createElement("td",{key:"headItem_cb"},o.a.createElement("input",{type:"checkbox",name:"rowCheck",onChange:this.onChangeCheckBox,checked:this.isAllRowsSelectedInPage()}))));for(var r=0;r<t.length;r++){var s=void 0,i=void 0;if(e.length>0)for(var c=0;c<e.length;c++)e[c].field===t[r].field&&(s=c+1,i=e[c].ascOrder?"sortArrowUp":"sortArrowDown");n.push(o.a.createElement("col",{key:"col_"+r,width:t[r].width})),a.push(o.a.createElement(Z,{key:"headItem_"+r,field:t[r].field,type:t[r].type,headerClassName:t[r].headerClassName,headerStyle:t[r].headerStyle,text:t[r].text,sortIndex:s,sortOrderClassName:i}))}return o.a.createElement(o.a.Fragment,null,o.a.createElement("colgroup",null,n),o.a.createElement("thead",null,o.a.createElement("tr",null,a)))}}]),t}(o.a.Component),$=Object(f.b)((function(e){return{columns:e.columns,items:e.items,page:e.page,withCheckBoxes:e.settings.withCheckBoxes,rowsinPage:e.settings.rowsinPage,selectedItems:e.selectedItems,sortParams:e.sortParams}}))(J),q=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={id:n.props.editItem?n.props.editItem.id:0,name:n.props.editItem?n.props.editItem.name:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",isActive:!!n.props.editItem&&n.props.editItem.isActive},n.save=function(e){var t={};t.id=n.state.id,t.name=n.state.name,t.isActive=n.state.isActive,console.log(t),n.props.editItem?n.props.dispatch({type:"ITEM.EDIT",item:t}):(t.id=O(n.props.items),n.props.dispatch({type:"ITEM.ADD",item:t}))},n.close=function(e){n.props.dispatch({type:"TOGGLE_ITEM_BLOCK",showAddEditBlock:!1})},n.onNameChange=function(e){n.setState({name:e.target.value})},n.onStatusChange=function(e){console.log(e.target.value),n.setState({isActive:e.target.checked})},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"TOGGLE_ROW_TOOLBAR",rowId:null})}},{key:"render",value:function(){var e={};return this.props.editItem?e=this.props.editItem:(e.name="\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u04351",e.isActive=!1),o.a.createElement("div",{className:"itemBlock"},o.a.createElement("button",{onClick:this.close,className:"toolbarButton",style:{float:"right",height:"25px",width:"25px"}},"X"),o.a.createElement("div",null,o.a.createElement("span",{className:"itemBlock__label"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"),o.a.createElement("input",{id:"fio",onChange:this.onNameChange,type:"text",defaultValue:e.name})),o.a.createElement("div",null,o.a.createElement("span",{className:"itemBlock__label"},"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439"),o.a.createElement("input",{id:"status",onChange:this.onStatusChange,type:"checkbox",defaultChecked:e.isActive})),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.save,className:"toolbarButton",style:{marginTop:"25px"}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))}}]),t}(o.a.Component),z=Object(f.b)((function(e){return{items:e.items,editItem:e.settings.editItem}}))(q),Q=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={columns:n.props.columns,rowsinPage:n.props.rowsinPage,withCheckBoxes:n.props.withCheckBoxes},n.save=function(e){n.props.dispatch({type:"DISPLAYSETTINGS.SAVE",columns:n.state.columns,rowsinPage:n.state.rowsinPage,withCheckBoxes:n.state.withCheckBoxes})},n.close=function(e){n.props.dispatch({type:"DISPLAYSETTINGS.TOGGLE",showDisplaySettings:!1})},n.onVisibleChange=function(e){var t=Object.assign([],n.state.columns);t[e.target.getAttribute("colnumber")].visible=e.target.checked,n.setState({columns:t})},n.onNeedCheckBoxesChange=function(e){n.setState({withCheckBoxes:e.target.checked})},n.onRowsPerPageChange=function(e){var t=parseInt(e.target.value),a=parseInt(e.target.getAttribute("max"));t>a&&(e.target.value=a),n.setState({rowsinPage:t})},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"TOGGLE_ROW_TOOLBAR",rowId:null})}},{key:"render",value:function(){for(var e=this.props.columns,t=[],n=0;n<e.length;n++)t.push(o.a.createElement("div",{key:"columnSettings_"+n},o.a.createElement("label",{htmlFor:"columnSettingsInp_"+n},e[n].text),o.a.createElement("input",{id:"columnSettingsInp_"+n,colnumber:n,field:e[n].field,onChange:this.onVisibleChange,type:"checkbox",defaultChecked:e[n].visible})));return o.a.createElement("div",{className:"itemBlock"},o.a.createElement("button",{onClick:this.close,className:"toolbarButton",style:{float:"right",height:"25px",width:"25px"}},"X"),o.a.createElement("div",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0435\u0439"),t,o.a.createElement("div",null,o.a.createElement("span",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435:"),o.a.createElement("input",{type:"number",min:1,max:100,name:"rowsPerPage",onChange:this.onRowsPerPageChange,defaultValue:this.props.rowsinPage,style:{marginLeft:"10px",width:"50px"}})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"inp_needCheckBoxes"},"\u0427\u0435\u043a\u0431\u043e\u043a\u0441\u044b"),o.a.createElement("input",{id:"inp_needCheckBoxes",type:"checkbox",onChange:this.onNeedCheckBoxesChange,defaultChecked:this.props.withCheckBoxes})),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.save,className:"toolbarButton",style:{marginTop:"25px"}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))}}]),t}(o.a.Component),ee=Object(f.b)((function(e){return{columns:e.columns,rowsinPage:e.settings.rowsinPage,withCheckBoxes:e.settings.withCheckBoxes}}))(Q),te=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:"inline-block",position:"relative"}},this.props.showAddEditBlock?o.a.createElement(z,null):null,this.props.showDisplaySettings?o.a.createElement(ee,null):null,o.a.createElement("div",{className:"rScroller"},o.a.createElement("div",{className:"rScrollerHeader"},o.a.createElement(P,null)),o.a.createElement("table",{cellSpacing:"0"},o.a.createElement($,null),o.a.createElement(W,null)),o.a.createElement(Y,null)))}}]),t}(o.a.Component),ne=Object(f.b)((function(e){return{showAddEditBlock:e.settings.showAddEditBlock,showDisplaySettings:e.settings.showDisplaySettings}}),null)(te),ae=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Throbber"})}}]),t}(o.a.Component),re=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(_,null),this.props.showThrobber?o.a.createElement(ae,null):o.a.createElement(ne,null))}}]),t}(o.a.Component),se=Object(f.b)((function(e){return{showThrobber:e.showThrobber}}),null)(re);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=n(10),oe={transfers:function(e,t){var n=Object.assign({},e);if("transfers"===n.currentSection)return n.columns=[{width:"100px",field:"dt",text:"\u0414\u0430\u0442\u0430",format:function(e){return new Date(e).toLocaleDateString()},visible:!0},{width:"200px",field:"Portfolio",text:"\u041f\u043e\u0440\u0442\u0444\u0435\u043b\u044c",format:function(e){return e.name},visible:!0},{width:"150px",field:"Portfolio",text:"\u0421\u0442\u0430\u0442\u0443\u0441",format:function(e){return e.isActive?"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439":"\u041d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439"},visible:!0},{width:"150px",field:"amount",text:"\u0421\u0443\u043c\u043c\u0430",type:"float",headerClassName:"header-amount",style:{textAlign:"right",paddingRight:"15px"},format:y,visible:!0},{width:"120px",field:"daysCount",text:"\u041a\u043e\u043b-\u0432\u043e \u0434\u043d\u0435\u0439",type:"float",style:{textAlign:"right",paddingRight:"15px"},format:y,visible:!0},{width:"120px",field:"amountDisc",text:"\u041f\u043e\u0434 6 %",type:"float",headerClassName:"header-amount",style:{textAlign:"right",paddingRight:"15px"},format:y,visible:!0}],function(e){for(var t=0;t<e.length;t++){var n=e[t],a=new Date(n.dt),r=new Date;n.daysCount=(r-a)/864e5,n.amountDisc=n.amount*(1+.06*n.daysCount/366)}}(n.items),n.page=0,n;console.warn("\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430 \u043f\u043e\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0437\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439")}},ce={add:function(e,t){var n=Object.assign({},e),a=Object.assign([],n.items);return a.push(t.item),w(a,n.sortParams),n.items=a,n.settings.showAddEditBlock=!1,n},edit:function(e,t){var n=Object.assign({},e),a=Object.assign([],n.items);return v(a,t.item.id),a.push(t.item),w(a,n.sortParams),n.items=a,n.settings.showAddEditBlock=!1,n},delete:function(e,t){var n=Object.assign({},e),a=Object.assign([],n.items);return v(a,t.itemId),n.selectedItems=[],n.items=a,n}},le={toggle:function(e,t){var n={field:t.field,type:t.sortType,ascOrder:!0},a=Object.assign({},e),r=Object.assign([],a.sortParams);if(r.length>0&&r[0].field===n.field&&(n.ascOrder=!r[0].ascOrder),t.ctrlPressed){for(var s=!1,i=0;i<r.length;i++)r[i].field===n.field&&(n.ascOrder=!r[i].ascOrder,r[i]=n,s=!0);s||r.push(n)}else(r=[]).push(n);var o=Object.assign([],a.items);return w(o,r),a.items=o,a.sortParams=r,a},run:function(e,t){var n=Object.assign({},e),a=Object.assign([],n.items);return w(a,n.sortParams),n.items=a,n}},ue={toggle:function(e,t){var n=Object.assign({},e);return n.settings.showDisplaySettings=t.showDisplaySettings,n},save:function(e,t){var n=Object.assign({},e);return n.columns=t.columns,n.settings.rowsinPage=t.rowsinPage,n.settings.withCheckBoxes=t.withCheckBoxes,n.settings.showDisplaySettings=!1,n.settings.activePage=0,n}},pe={transfers:function(e,t){var n=Object.assign({},e);return n.currentSection="transfers",n.columns=[{width:"100px",field:"dt",text:"\u0414\u0430\u0442\u0430",format:function(e){return new Date(e).toLocaleDateString()},visible:!0},{width:"200px",field:"Portfolio",text:"\u041f\u043e\u0440\u0442\u0444\u0435\u043b\u044c",format:function(e){return e.name},visible:!0},{width:"150px",field:"Portfolio",text:"\u0421\u0442\u0430\u0442\u0443\u0441",format:function(e){return e.isActive?"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439":"\u041d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439"},visible:!0},{width:"150px",field:"amount",text:"\u0421\u0443\u043c\u043c\u0430",type:"float",headerClassName:"header-amount",style:{textAlign:"right",paddingRight:"15px"},format:y,visible:!0}],n.items=t.items,n.page=0,n},portfolios:function(e,t){var n=Object.assign({},e);return n.currentSection="portfolios",n.columns=[{width:"250px",field:"name",text:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",visible:!0},{width:"160px",field:"isActive",text:"\u0421\u0442\u0430\u0442\u0443\u0441",format:function(e){return e?"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439":"\u041d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439"},visible:!0},{width:"150px",field:"Transfers",text:"\u0421\u0443\u043c\u043c\u0430",type:"float",style:{textAlign:"right",paddingRight:"15px"},format:function(e){if(e)return y(e.reduce((function(e,t){return e+parseFloat(t.amount)}),0))},visible:!0}],n.items=t.items,n.page=0,n}},de=function(e,t){var n=Object.assign({},e);return n.settings.activePage=t.page,n},he=function(e,t){var n=Object.assign({},e);return n.items=t.items,w(n.items,n.sortParams),n},me=function(e,t){var n=Object.assign({},e);return n.settings.showAddEditBlock=t.showAddEditBlock,t.editItem?n.settings.editItem=t.editItem:n.settings.editItem=null,n},fe=function(e,t){var n=t.item.id,a=Object.assign({},e),r=Object.assign([],a.selectedItems);return~r.indexOf(n)?r.splice(r.indexOf(n),1):r.push(n),a.selectedItems=r,a.showAddEditBlock=!1,a},ge=function(e,t){var n=Object.assign({},e);return n.showThrobber=t.showThrobber,n},be=function(e,t){for(var n=Object.assign({},e),a=Object.assign([],n.items),r=Object.assign([],n.selectedItems),s=0;s<r.length;s++)v(a,r[s]);return n.selectedItems=[],n.items=a,n},ve=function(e,t){var n=Object.assign({},e),a=Object.assign([],n.selectedItems);if(t.selected){a=[];for(var r=E(n.items,n.page,n.rowsinPage),s=0;s<r.length;s++)a.push(r[s].id)}else a=[];return n.selectedItems=a,n.showAddEditBlock=!1,n},Oe=function(e,t){var n=Object.assign({},e);return n.settings.toolBarRowId===t.rowId?n.settings.toolBarRowId=null:n.settings.toolBarRowId=t.rowId,n},Ee=function(e,t){var n=Object.assign({},e),a=Object.assign([],n.selectedItems);if(n.settings.toolBarRowId=null,n.settings.showAddEditBlock=!1,n.settings.shiftClickItemId){var r=b(n.items,n.settings.shiftClickItemId),s=b(n.items,t.rowId);if(r>s){var i=r;r=s,s=i}a=[];for(var o=r;o<=s;o++)a.push(n.items[o].id);n.settings.shiftClickItemId=n.items[s].id}else n.settings.shiftClickItemId=t.rowId,a.push(t.rowId);return n.selectedItems=a,n},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANALYTICS.TRANSFERS":return oe.transfers(e,t);case"ITEM.ADD":return ce.add(e,t);case"ITEM.DELETE":return ce.delete(e,t);case"ITEM.EDIT":return ce.edit(e,t);case"ITEMS.UPDATE":return he(e,t);case"DISPLAYSETTINGS.TOGGLE":return ue.toggle(e,t);case"DISPLAYSETTINGS.SAVE":return ue.save(e,t);case"SORT.RUN":return le.run(e,t);case"SORT.TOGGLE":return le.toggle(e,t);case"SWITCH.TRANSFERS":return pe.transfers(e,t);case"SWITCH.PORTFOLIOS":return pe.portfolios(e,t);case"DELETE_SELECTED_ITEMS":return be(e);case"GO_TO_PAGE":return de(e,t);case"TOGGLE_ACTIVE_PAGE_ROW_SELECTION":return ve(e,t);case"TOGGLE_ITEM_BLOCK":return me(e,t);case"TOGGLE_ROW_TOOLBAR":return Oe(e,t);case"TOGGLE_SELECT_ROW":return fe(e,t);case"TOGGLE_THROBBER":return ge(e,t);case"SHIFT_CLICK":return Ee(e,t);default:return e}};(function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={currentSection:"portfolios",columns:[{width:"200px",field:"name",text:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",visible:!0},{width:"160px",field:"isActive",text:"\u0421\u0442\u0430\u0442\u0443\u0441",format:function(e){return e?"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439":"\u041d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439"},visible:!0},{width:"150px",field:"amount",text:"\u0421\u0443\u043c\u043c\u0430",type:"float",headerClassName:"header-amount",style:{textAlign:"right",paddingRight:"15px"},format:y,visible:!0}],items:g,selectedItems:[],settings:{rowsinPage:5,activePage:0,withCheckBoxes:!1,showDisplaySettings:!1,showAddEditBlock:!1,editItem:null,shiftClickItemId:null,toolBarRowId:null},showThrobber:!1,sortParams:[{field:"name",type:"default",ascOrder:!0}]},null,console.warn("\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0411\u0414, \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."),w(t.items,t.sortParams),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){var t=e,n=Object(ie.b)(we,t,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(o.a.createElement(f.a,{store:n},o.a.createElement(se,null)),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.fb9026a4.chunk.js.map