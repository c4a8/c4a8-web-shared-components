(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./assets/js/components/contact.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _base_component_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./assets/js/components/base-component.js"),_state_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("./assets/js/components/form.js"),__webpack_require__("./assets/js/state.js")),_events_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./assets/js/events.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var Contact=function(_BaseComponent){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Contact,_BaseComponent);var _super=_createSuper(Contact);function Contact(root,options){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Contact),(_this=_super.call(this,root,options)).mailSelector='a[href^="mailto:"]',_this.formSelector=".contact__form",_this.boxSelector=".contact__box",_this.mail=_this.root.querySelector(_this.mailSelector),_this.form=_this.root.querySelector(_this.formSelector),_this.box=_this.root.querySelector(_this.boxSelector),_this.init(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Contact,[{key:"init",value:function init(){this.bindEvents()}},{key:"bindEvents",value:function bindEvents(){this.mail&&this.form&&this.box&&(this.mail.addEventListener("click",this.handleClick.bind(this)),document.addEventListener(_events_js__WEBPACK_IMPORTED_MODULE_9__.a.FAB_BUTTON_CLOSE,this.reset.bind(this)))}},{key:"handleClick",value:function handleClick(e){e.preventDefault();var height=this.root.offsetHeight,heightWithUnits=height+"px";this.root.classList.add(_state_js__WEBPACK_IMPORTED_MODULE_8__.a.SHOW),this.root.style.height=heightWithUnits,this.form.style.height=heightWithUnits;var formHeight=this.form.scrollHeight;if(!(formHeight<height)){var formHeightWithUnits=formHeight+40+"px";this.root.style.height=formHeightWithUnits,this.form.style.height=formHeightWithUnits}}},{key:"reset",value:function reset(){var _this$form$querySelec;this.root.classList.remove(_state_js__WEBPACK_IMPORTED_MODULE_8__.a.SHOW),this.form.style.height="",this.root.style.height="",null===(_this$form$querySelec=this.form.querySelector("form"))||void 0===_this$form$querySelec||_this$form$querySelec.reset()}}]),Contact}(_base_component_js__WEBPACK_IMPORTED_MODULE_6__.a);Contact.rootSelector=".contact.is-collapsed",__webpack_exports__.default=Contact}}]);