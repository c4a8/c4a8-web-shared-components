(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./assets/js/components/back-to-top.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _tools_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./assets/js/tools.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var BackToTop=function(_BaseComponent){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(BackToTop,_BaseComponent);var _super=_createSuper(BackToTop);function BackToTop(root,options){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,BackToTop),(_this=_super.call(this,root,options)).init(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(BackToTop,[{key:"init",value:function init(){this.bindEvents()}},{key:"bindEvents",value:function bindEvents(){this.root.addEventListener("click",this.handleClick.bind(this))}},{key:"handleClick",value:function handleClick(){_tools_js__WEBPACK_IMPORTED_MODULE_6__.a.scrollToTop()}}]),BackToTop}(__webpack_require__("./assets/js/components/base-component.js").a);BackToTop.rootSelector=".back-to-top",__webpack_exports__.default=BackToTop},"./assets/js/components/base-component.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _state_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./assets/js/state.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var BaseComponent=function(){function BaseComponent(root,options){var _this$options;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,BaseComponent),this.root=root,this.options=options,null!==(_this$options=this.options)&&void 0!==_this$options&&_this$options.noInit||this.root.classList.add(_state_js__WEBPACK_IMPORTED_MODULE_3__.a.INITIALIZED)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(BaseComponent,null,[{key:"getInstancesKey",value:function getInstancesKey(){return this.rootSelector.substring(1)}},{key:"expose",value:function expose(instance){window[BaseComponent.namespacePrefix]||(window[BaseComponent.namespacePrefix]={});var instanceKey=this.getInstancesKey();window[BaseComponent.namespacePrefix][instanceKey]||(window[BaseComponent.namespacePrefix][instanceKey]=[]),window[BaseComponent.namespacePrefix][this.getInstancesKey()].push(instance)}},{key:"getInstance",value:function getInstance(element){var instance=window[BaseComponent.namespacePrefix][this.getInstancesKey()].filter((function(value){return(null==value?void 0:value.root)===element}));return instance?instance[0]:null}},{key:"initElement",value:function initElement(element,options){var instance=new this(element,options);return this.instances.push(instance),this.expose(instance),instance}},{key:"init",value:function init(element){var _this=this;this.instances=[];var selectedElement=element||document,notInitializedSelector=this.rootSelector+":not(."+_state_js__WEBPACK_IMPORTED_MODULE_3__.a.INITIALIZED+")";[].forEach.call(selectedElement.querySelectorAll(notInitializedSelector),(function(element){_this.initElement(element)}))}}]),BaseComponent}();BaseComponent.rootSelector="",BaseComponent.instances=[],BaseComponent.namespacePrefix="baseComponents",__webpack_exports__.a=BaseComponent},"./node_modules/core-js/modules/es.object.create.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/internals/export.js")({target:"Object",stat:!0,sham:!__webpack_require__("./node_modules/core-js/internals/descriptors.js")},{create:__webpack_require__("./node_modules/core-js/internals/object-create.js")})},"./node_modules/core-js/modules/es.object.set-prototype-of.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/internals/export.js")({target:"Object",stat:!0},{setPrototypeOf:__webpack_require__("./node_modules/core-js/internals/object-set-prototype-of.js")})}}]);