'use strict';!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),c=require('./3bfffbe88b3d923921f851c0697974fe.js'),d=require('./d559680a1a0c2551cbce1a9fb152cb99.js'),e=require('./4389a88e405d1d37f36c16fc0ec96540.js'),{enterBackground:f,enterForeground:g}=require('./a3959bb900db9f65ed2e9c5dfa6977b7.js');class h extends a.Component{constructor(a){super(a)}componentDidMount(){f('chooseInvoiceTitle')}componentWillUnmount(){g('chooseInvoiceTitle')}render(){const b=this.props;return a.createElement('div',{className:'simulator',style:{display:b.show?'':'none',width:b.screenWidth,height:b.screenHeight,marginLeft:-b.screenWidth/2,transform:`scale(${b.deviceScale})`,transformOrigin:'50% 0'}},a.createElement(e,null),a.createElement(d,{frontColor:'#ffffff',backgroundColor:'#000000',showRightBtn:!0,onCustomRightClick:this.onRightButtonClick.bind(this),leftBtnText:'\u53D6\u6D88',rightBtnText:'\u786E\u5B9A',height:b.navigationbarHeight,showLeftBtn:!0,title:'\u9009\u62E9\u53D1\u7968\u62AC\u5934',onLeftBtnClick:this.onLeftButtonClick.bind(this)}),a.createElement('div',{className:'webview'},a.createElement('div',{className:'invoice'},a.createElement('div',{className:'weui-cells weui-cells_radio'},a.createElement('label',{className:'weui-cell weui-check__label',htmlFor:'x11'},a.createElement('div',{className:'weui-cell__hd'},a.createElement('input',{type:'checkbox',className:'weui-check',name:'checkbox1',id:'s11',checked:'checked',readOnly:!0}),a.createElement('i',{className:'weui-icon-checked'})),a.createElement('div',{className:'weui-cell__bd'},a.createElement('p',null,'\u5E7F\u5DDE\u817E\u8BAF\u79D1\u6280\u6709\u9650\u516C\u53F8'),a.createElement('p',{className:'ui-desc'},'\u5355\u4F4D')),a.createElement('div',{className:'weui-cell__ft'},a.createElement('i',{className:'weui-icon-info-circle'})))))))}onLeftButtonClick(){this.props.hideChooseInvoiceTitle&&this.props.hideChooseInvoiceTitle.call(null,{confirm:!1,callbackID:this.props.callbackID,api:this.props.api})}onRightButtonClick(){this.props.hideChooseInvoiceTitle&&this.props.hideChooseInvoiceTitle.call(null,{confirm:!0,callbackID:this.props.callbackID,api:this.props.api})}}module.exports=h}(require('lazyload'),require);