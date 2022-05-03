(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./assets/js/components/base-component.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _state_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./assets/js/state.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var BaseComponent=function(){function BaseComponent(root,options){var _this$options;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,BaseComponent),this.root=root,this.options=options,null!==(_this$options=this.options)&&void 0!==_this$options&&_this$options.noInit||this.root.classList.add(_state_js__WEBPACK_IMPORTED_MODULE_3__.a.INITIALIZED)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(BaseComponent,null,[{key:"getInstancesKey",value:function getInstancesKey(){return this.rootSelector.substring(1)}},{key:"expose",value:function expose(instance){window[BaseComponent.namespacePrefix]||(window[BaseComponent.namespacePrefix]={});var instanceKey=this.getInstancesKey();window[BaseComponent.namespacePrefix][instanceKey]||(window[BaseComponent.namespacePrefix][instanceKey]=[]),window[BaseComponent.namespacePrefix][this.getInstancesKey()].push(instance)}},{key:"getInstance",value:function getInstance(element){var instance=window[BaseComponent.namespacePrefix][this.getInstancesKey()].filter((function(value){return(null==value?void 0:value.root)===element}));return instance?instance[0]:null}},{key:"initElement",value:function initElement(element,options){var instance=new this(element,options);return this.instances.push(instance),this.expose(instance),instance}},{key:"init",value:function init(element){var _this=this;this.instances=[];var selectedElement=element||document,notInitializedSelector=this.rootSelector+":not(."+_state_js__WEBPACK_IMPORTED_MODULE_3__.a.INITIALIZED+")";[].forEach.call(selectedElement.querySelectorAll(notInitializedSelector),(function(element){_this.initElement(element)}))}}]),BaseComponent}();BaseComponent.rootSelector="",BaseComponent.instances=[],BaseComponent.namespacePrefix="baseComponents",__webpack_exports__.a=BaseComponent},"./assets/js/components/text-animation.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.string.match.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _base_component_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./assets/js/components/base-component.js"),_tools_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./assets/js/tools.js"),_state_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./assets/js/state.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var TextAnimation=function(_BaseComponent){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(TextAnimation,_BaseComponent);var _super=_createSuper(TextAnimation);function TextAnimation(root,options){var _this$placeholder,_this$placeholder2,_this$placeholder3,_this$visible,_this$visible2,_this$visible3,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TextAnimation),_this=_super.call(this,root,options);var parent=_tools_js__WEBPACK_IMPORTED_MODULE_11__.a.getParentComponent(_this.root);return _this.iconSelector=".js-text-animation__icon",_this.iconStepSelector=".js-text-animation__step-",_this.buttonSelector=".text-animation__cta",_this.placeHolderSelector=".text-animation__placeholder",_this.visibleSelector=".text-animation__visible",_this.textSelector=".text-animation__text",_this.sublineSelector=".text-animation__subline",_this.icon=null==parent?void 0:parent.querySelector(_this.iconSelector),_this.placeholder=_this.root.querySelector(_this.placeHolderSelector),_this.visible=_this.root.querySelector(_this.visibleSelector),_this.placeholderButton=null===(_this$placeholder=_this.placeholder)||void 0===_this$placeholder?void 0:_this$placeholder.querySelector(_this.buttonSelector),_this.placeholderText=null===(_this$placeholder2=_this.placeholder)||void 0===_this$placeholder2?void 0:_this$placeholder2.querySelector(_this.textSelector),_this.placeholderSubline=null===(_this$placeholder3=_this.placeholder)||void 0===_this$placeholder3?void 0:_this$placeholder3.querySelector(_this.sublineSelector),_this.button=null===(_this$visible=_this.visible)||void 0===_this$visible?void 0:_this$visible.querySelector(_this.buttonSelector),_this.text=null===(_this$visible2=_this.visible)||void 0===_this$visible2?void 0:_this$visible2.querySelector(_this.textSelector),_this.subline=null===(_this$visible3=_this.visible)||void 0===_this$visible3?void 0:_this$visible3.querySelector(_this.sublineSelector),_this.defaultTextSize="font-size-6",_this.defaultSublineSize="font-size-2",_this.timeout=null,_this.letterDelay=120,_this.sizeBasedDelay=_this.letterDelay,_this.minDelay=2500,_this.currentDelay=0,_this.lastDelay=0,_this.delayOffset=2600,_this.sublineDelay=1150,_this.buttonDelay=800,_this.step=0,_this.sequence=_this.root.dataset.sequence?JSON.parse(_this.root.dataset.sequence):[],_this.start(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(TextAnimation,[{key:"getDelayByValue",value:function getDelayByValue(value){if(6===value)this.sizeBasedDelay=this.letterDelay/1.8;else this.sizeBasedDelay=this.letterDelay/10}},{key:"start",value:function start(){this.animate()}},{key:"calculateDelay",value:function calculateDelay(){var _this$currentSequence;this.currentSequenceStep=this.sequence[this.step],this.currentText=this.currentSequenceStep.text,this.currentTextSize=this.currentSequenceStep.textSize||this.defaultTextSize;var textSizeValue=parseInt(this.currentTextSize.match(/\d+/)[0]);this.getDelayByValue(textSizeValue),this.currentSubline=(null===(_this$currentSequence=this.currentSequenceStep)||void 0===_this$currentSequence?void 0:_this$currentSequence.subline)||"",this.currentDelay=this.currentText.length*this.sizeBasedDelay+this.delayOffset+(this.currentSubline.length>0?this.sublineDelay:0),this.currentDelay<this.minDelay&&(this.currentDelay=this.minDelay),this.lastDelay=this.lastDelay+this.currentDelay}},{key:"end",value:function end(){window.clearTimeout(this.timeout)}},{key:"updateStepAnimations",value:function updateStepAnimations(){if(this.icon){var updateDelay=this.lastDelay;[].forEach.call(this.icon.querySelectorAll(""+this.iconStepSelector+(this.step+1)),(function(animation){var delay=(updateDelay-150)/1e3+"s";animation.setAttribute("begin",delay)}))}}},{key:"next",value:function next(){this.step>=this.sequence.length-1||(this.step++,this.animate(),this.icon&&(this.icon.classList.remove("icon--step-"+(this.step-1)),this.icon.classList.add("icon--step-"+this.step)))}},{key:"resetText",value:function resetText(){this.text.innerHTML="",this.subline.innerHTML="",this.placeholderText.innerHTML="",this.placeholderSubline.innerHTML="",this.subline.classList.add(_state_js__WEBPACK_IMPORTED_MODULE_12__.a.INVISIBLE),this.oldStep=this.sequence[this.step-1],this.nextStep=this.sequence[this.step+1]||this.sequence[0],this.text.classList.remove(this.currentTextSize),this.subline.classList.remove(this.currentSublineSize),this.placeholderText.classList.remove(this.currentTextSize),this.placeholderSubline.classList.remove(this.currentSublineSize),this.currentTextSize=this.nextStep.textSize||this.defaultTextSize,this.text.classList.add(this.currentTextSize),this.placeholderText.classList.add(this.currentTextSize),this.currentSublineSize=this.nextStep.sublineSize||this.defaultSublineSize,this.subline.classList.add(this.currentSublineSize),this.placeholderSubline.classList.add(this.currentSublineSize)}},{key:"animate",value:function animate(){var _this2=this;this.calculateDelay(),this.updateStepAnimations(),this.animateText(),this.timeout=setTimeout((function(){_this2.resetText(),_this2.next()}),this.currentDelay)}},{key:"animateText",value:function animateText(){var textTimeout,_this3=this;this.text.classList.add(this.currentTextSize),this.currentSublineSize=this.currentSequenceStep.sublineSize||this.defaultSublineSize,this.subline.classList.add(this.currentSublineSize),this.placeholderText.classList.add(this.currentTextSize),this.placeholderText.innerHTML=this.currentText,this.placeholderSubline.classList.add(this.currentSublineSize),this.placeholderSubline.innerHTML=this.currentSubline,this.step+1===this.sequence.length?(this.root.classList.add(_state_js__WEBPACK_IMPORTED_MODULE_12__.a.END),this.icon.classList.add(_state_js__WEBPACK_IMPORTED_MODULE_12__.a.END),this.placeholderButton.classList.remove(_state_js__WEBPACK_IMPORTED_MODULE_12__.a.INVISIBLE)):this.placeholderButton.classList.add(_state_js__WEBPACK_IMPORTED_MODULE_12__.a.INVISIBLE);for(var _loop=function _loop(i){textTimeout=i*_this3.sizeBasedDelay+_this3.sizeBasedDelay,setTimeout((function(){_this3.typeLetter(_this3.currentText[i])}),textTimeout)},i=0;i<this.currentText.length;i++)_loop(i);this.currentSubline.length&&(textTimeout+=this.sublineDelay,setTimeout((function(){_this3.subline.innerHTML=_this3.currentSubline,_this3.subline.classList.remove(_state_js__WEBPACK_IMPORTED_MODULE_12__.a.INVISIBLE)}),textTimeout)),this.showButtonAtLastRun(textTimeout)}},{key:"showButtonAtLastRun",value:function showButtonAtLastRun(timeout){var _this4=this;this.step+1<this.sequence.length||setTimeout((function(){_this4.end(),_this4.button.classList.toggle(_state_js__WEBPACK_IMPORTED_MODULE_12__.a.INVISIBLE)}),timeout+this.buttonDelay)}},{key:"typeLetter",value:function typeLetter(letter){letter&&(this.text.innerHTML=this.text.innerHTML+letter)}}]),TextAnimation}(_base_component_js__WEBPACK_IMPORTED_MODULE_10__.a);TextAnimation.rootSelector=".text-animation",TextAnimation.instances=[],__webpack_exports__.default=TextAnimation},"./node_modules/core-js/modules/es.object.create.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/internals/export.js")({target:"Object",stat:!0,sham:!__webpack_require__("./node_modules/core-js/internals/descriptors.js")},{create:__webpack_require__("./node_modules/core-js/internals/object-create.js")})},"./node_modules/core-js/modules/es.object.set-prototype-of.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/internals/export.js")({target:"Object",stat:!0},{setPrototypeOf:__webpack_require__("./node_modules/core-js/internals/object-set-prototype-of.js")})}}]);