(this["webpackJsonpchemilea-dash"]=this["webpackJsonpchemilea-dash"]||[]).push([[10],{612:function(e,t,o){"use strict";o.r(t);var n=o(16),a=o(17),s=o(19),i=o(18),r=o(30),l=o(1),c=o.n(l),d=o(170),p=o(27),h=o(2),u=o(6),m=o(7),b=o(0),f=o.n(b),g=o(4),O=o.n(g),C=o(25),k=o.n(C),y=o(3),_={children:f.a.node.isRequired,node:f.a.any},v=function(e){function t(){return e.apply(this,arguments)||this}Object(m.a)(t,e);var o=t.prototype;return o.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},o.render=function(){return y.e?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),k.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(c.a.Component);v.propTypes=_;var j=v,E=o(36);function N(){}var T=f.a.shape(E.a.propTypes),A={isOpen:f.a.bool,autoFocus:f.a.bool,centered:f.a.bool,scrollable:f.a.bool,size:f.a.string,toggle:f.a.func,keyboard:f.a.bool,role:f.a.string,labelledBy:f.a.string,backdrop:f.a.oneOfType([f.a.bool,f.a.oneOf(["static"])]),onEnter:f.a.func,onExit:f.a.func,onOpened:f.a.func,onClosed:f.a.func,children:f.a.node,className:f.a.string,wrapClassName:f.a.string,modalClassName:f.a.string,backdropClassName:f.a.string,contentClassName:f.a.string,external:f.a.node,fade:f.a.bool,cssModule:f.a.object,zIndex:f.a.oneOfType([f.a.number,f.a.string]),backdropTransition:T,modalTransition:T,innerRef:f.a.oneOfType([f.a.object,f.a.string,f.a.func]),unmountOnClose:f.a.bool,returnFocusAfterClose:f.a.bool,container:y.q},B=Object.keys(A),S={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:N,onClosed:N,modalTransition:{timeout:y.d.Modal},backdropTransition:{mountOnEnter:!0,timeout:y.d.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body"},w=function(e){function t(t){var o;return(o=e.call(this,t)||this)._element=null,o._originalBodyPadding=null,o.getFocusableChildren=o.getFocusableChildren.bind(Object(u.a)(o)),o.handleBackdropClick=o.handleBackdropClick.bind(Object(u.a)(o)),o.handleBackdropMouseDown=o.handleBackdropMouseDown.bind(Object(u.a)(o)),o.handleEscape=o.handleEscape.bind(Object(u.a)(o)),o.handleStaticBackdropAnimation=o.handleStaticBackdropAnimation.bind(Object(u.a)(o)),o.handleTab=o.handleTab.bind(Object(u.a)(o)),o.onOpened=o.onOpened.bind(Object(u.a)(o)),o.onClosed=o.onClosed.bind(Object(u.a)(o)),o.manageFocusAfterClose=o.manageFocusAfterClose.bind(Object(u.a)(o)),o.clearBackdropAnimationTimeout=o.clearBackdropAnimationTimeout.bind(Object(u.a)(o)),o.state={isOpen:!1,showStaticBackdropAnimation:!1},o}Object(m.a)(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this.props,t=e.isOpen,o=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),o&&this.setFocus()),n&&n(),this._isMounted=!0},o.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},o.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),this._isMounted=!1},o.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||N)(e,t)},o.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||N)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},o.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},o.getFocusableChildren=function(){return this._element.querySelectorAll(y.g.join(", "))},o.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(o){e=t[0]}return e},o.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},o.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),o=t.length;if(0!==o){for(var n=this.getFocusedChild(),a=0,s=0;s<o;s+=1)if(t[s]===n){a=s;break}e.shiftKey&&0===a?(e.preventDefault(),t[o-1].focus()):e.shiftKey||a!==o-1||(e.preventDefault(),t[0].focus())}}},o.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},o.handleEscape=function(e){this.props.isOpen&&e.keyCode===y.k.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},o.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},o.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(y.i)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(y.h)(),Object(y.f)(),0===t.openCount&&(document.body.className=O()(document.body.className,Object(y.l)("modal-open",this.props.cssModule))),t.openCount+=1},o.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},o.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},o.close=function(){if(t.openCount<=1){var e=Object(y.l)("modal-open",this.props.cssModule),o=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(o," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(y.o)(this._originalBodyPadding)},o.renderModalDialog=function(){var e,t=this,o=Object(y.m)(this.props,B);return c.a.createElement("div",Object(h.a)({},o,{className:Object(y.l)(O()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),c.a.createElement("div",{className:Object(y.l)(O()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},o.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var o=this.props,n=o.wrapClassName,a=o.modalClassName,s=o.backdropClassName,i=o.cssModule,r=o.isOpen,l=o.backdrop,d=o.role,u=o.labelledBy,m=o.external,b=o.innerRef,f={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":u,role:d,tabIndex:"-1"},g=this.props.fade,C=Object(p.a)({},E.a.defaultProps,{},this.props.modalTransition,{baseClass:g?this.props.modalTransition.baseClass:"",timeout:g?this.props.modalTransition.timeout:0}),k=Object(p.a)({},E.a.defaultProps,{},this.props.backdropTransition,{baseClass:g?this.props.backdropTransition.baseClass:"",timeout:g?this.props.backdropTransition.timeout:0}),_=l&&(g?c.a.createElement(E.a,Object(h.a)({},k,{in:r&&!!l,cssModule:i,className:Object(y.l)(O()("modal-backdrop",s),i)})):c.a.createElement("div",{className:Object(y.l)(O()("modal-backdrop","show",s),i)}));return c.a.createElement(j,{node:this._element},c.a.createElement("div",{className:Object(y.l)(n)},c.a.createElement(E.a,Object(h.a)({},f,C,{in:r,onEntered:this.onOpened,onExited:this.onClosed,cssModule:i,className:Object(y.l)(O()("modal",a,this.state.showStaticBackdropAnimation&&"modal-static"),i),innerRef:b}),m,this.renderModalDialog()),_))}return null},o.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(c.a.Component);w.propTypes=A,w.defaultProps=S,w.openCount=0;var M=w,F=o(5),x={tag:y.p,className:f.a.string,cssModule:f.a.object},D=function(e){var t=e.className,o=e.cssModule,n=e.tag,a=Object(F.a)(e,["className","cssModule","tag"]),s=Object(y.l)(O()(t,"modal-body"),o);return c.a.createElement(n,Object(h.a)({},a,{className:s}))};D.propTypes=x,D.defaultProps={tag:"div"};var z=D,P=function(e){Object(s.a)(o,e);var t=Object(i.a)(o);function o(){var e;Object(n.a)(this,o);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={show:!0,authState:r.STATE_LOGIN},e.toggle=function(){e.setState({show:!e.state.show})},e.handleAuthState=function(t){e.setState({authState:t})},e}return Object(a.a)(o,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,{color:"danger",onClick:this.toggle},"Login"),c.a.createElement(M,{isOpen:this.state.show,toggle:this.toggle,size:"sm",fade:!1,centered:!0},c.a.createElement(z,null,c.a.createElement(r.default,{authState:this.state.authState,onChangeAuthState:this.handleAuthState}))))}}]),o}(c.a.Component);t.default=P}}]);
//# sourceMappingURL=10.570f6464.chunk.js.map