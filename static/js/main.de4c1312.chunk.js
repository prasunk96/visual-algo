(this["webpackJsonpvisual-algo"]=this["webpackJsonpvisual-algo"]||[]).push([[0],{12:function(e,t,n){e.exports={appBar:"style_appBar__Eh89b",logo:"style_logo__kfVgV"}},29:function(e,t,n){},3:function(e,t,n){e.exports={toolbar:"style_toolbar__3Qm40",generateButtonWrapper:"style_generateButtonWrapper__3JaPq",generateButton:"style_generateButton__10u3h",sortButtonWrapper:"style_sortButtonWrapper__1vcUV",sortButton:"style_sortButton__1JzcG",arraySize:"style_arraySize__11pEp",separator:"style_separator__3qnq7",slider:"style_slider__3hupk",currentAlgorithmButton:"style_currentAlgorithmButton__SHfAO",algorithmButton:"style_algorithmButton__1UrmF"}},30:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),o=n.n(a),c=n(9),u=n.n(c),i=(n(29),n(30),n(12)),l=n.n(i),s=function(e){return Object(r.jsx)("div",{className:l.a.appBar,children:Object(r.jsx)("div",{className:l.a.logo,children:Object(r.jsx)("p",{children:"VisualAlgo"})})})},p=n(5),h=n.n(p),d=n(6),_={STORE_BUBBLE_SORTED_RESULT:"STORE_BUBBLE_SORTED_RESULT",IS_ALGO_RUNNING:"IS_ALGO_RUNNING",SET_CURRENT_BUBBLETWO:"SET_CURRENT_BUBBLETWO",SET_CURRENT_SWAPPERS:"SET_CURRENT_SWAPPERS",SET_CURRENT_SORTED:"SET_CURRENT_SORTED",SET_ARRAY:"SET_ARRAY",SET_RUNNING:"SET_RUNNING",SET_ALGORITHM:"SET_ALGORITHM",SET_CURRENT_MERGEX:"SET_CURRENT_MERGEX",SET_CURRENT_QUICKTWO:"SET_CURRENT_QUICKTWO",SET_PIVOT:"SET_PIVOT",SET_CURRENT_HEAPTHREE:"SET_CURRENT_HEAPTHREE"},f=function(e){return{type:_.SET_CURRENT_BUBBLETWO,payload:e}},g=function(e){return{type:_.SET_CURRENT_SWAPPERS,payload:e}},b=function(e){return{type:_.SET_CURRENT_SORTED,payload:e}},E=function(e){return{type:_.SET_RUNNING,payload:e}},T=function(e){return{type:_.SET_ARRAY,payload:e}},y=function(e){return{type:_.SET_CURRENT_MERGEX,payload:e}},m=function(e){return{type:_.SET_CURRENT_QUICKTWO,payload:e}},j=function(e){return{type:_.SET_PIVOT,payload:e}},S=function(e){return{type:_.SET_CURRENT_HEAPTHREE,payload:e}},R=n(17),O=n.n(R),v=Object(d.b)((function(e){return{isAlgoRunning:e.app.isAlgoRunning,array:e.app.array,currentSwappers:e.app.currentSwappers,currentSorted:e.app.currentSorted,currentBubbleTwo:e.app.currentBubbleTwo,currentMergeX:e.app.currentMergeX,currentQuickTwo:e.app.currentQuickTwo,pivot:e.app.pivot,currentHeapThree:e.app.currentHeapThree}}),(function(e){return{handleStartAlgoExecution:function(t){return e(function(e){return{type:_.IS_ALGO_RUNNING,value:e}}(t))}}}))((function(e){var t=e.array,n=e.currentSwappers,a=e.currentSorted,o=e.currentBubbleTwo,c=e.currentMergeX,u=e.currentQuickTwo,i=e.pivot,l=e.currentHeapThree,s=Math.floor(O()(document).width()/(3*t.length)),p="".concat(s,"px"),d=t.length<5?10:t.length<8?8:t.length<11?6:t.length<20?4:t.length<50?3.5:t.length<100?3:t.length<130?2.5:2,_="".concat(d,"px"),f=s>20?"white":"transparent",g="".concat(s>70?20:s>60?18:s>50?16:s>40?14:s>30?12:s>20?10:8,"px");return Object(r.jsx)("div",{className:h.a.chartContainer,children:t.length?t.map((function(e,t){var s=n.includes(t)?h.a.swapElements:o.includes(t)||u.includes(t)||l.includes(t)||c.includes(t)?h.a.bubbleElement:i===t?h.a.pivotElement:(a.includes(t),h.a.defaultElement);return Object(r.jsx)("div",{className:"".concat(h.a.arrayElement," ").concat(s),style:{height:"".concat(3*e,"px"),width:p,marginLeft:_,marginRigh:_,color:f,fontSize:g},children:e},t)})):null})})),N=n(18),C=n(19),B=n(7),A=n(23),x=n(22),U=n(3),w=n.n(U);function k(e,t,n,r){if(!e.length)return t(f(n.map((function(e,t){return t})))),void setTimeout((function(){t(f([])),t(b(n.map((function(e,t){return t})))),t(E(!1))}),900);var a=e[0].length>3?T:3===e[0].length||0===e[0].length?g:2===e[0].length&&"boolean"===typeof e[0][0]?b:f;t(a(e.shift())),setTimeout((function(){k(e,t,n,r)}),r)}var I=function(e,t,n){for(var r=e.slice(0),a=[],o=!1,c=0;!o;){o=!0;for(var u=0;u<r.length-1-c;u++)if(a.push([u,u+1]),r[u]>r[u+1]){a.push([u,u+1,!0]);var i=r[u];r[u]=r[u+1],r[u+1]=i,o=!1,a.push(r.slice(0)),a.push([])}a.push([!0,r.length-1-c]),c++}return k(a,t,r,n),r},M=function(e,t,n){var r=e.slice(0),a=[];G(a,t,W(r.map((function(e,t){return[e,t]})),a,0,r.length-1,{array:r.slice(0)}),n)};function W(e,t,n,r,a){if(1===e.length)return e;var o=Math.floor(e.length/2),c=e.slice(0,o),u=e.slice(o),i=Math.floor((r+1+n)/2),l=W(c,t,n,i-1,a),s=W(u,t,i,r,a),p=!1;return l.length+s.length===a.array.length&&(p=!0),function(e,t,n,r,a,o,c){var u=[],i=a;for(;e.length&&t.length;)n.push([e[0][1],t[0][1]]),e[0][0]<=t[0][0]?(i++,u.push(e.shift())):(n.push([e[0][1],t[0][1],!0]),t[0][1]=i++,u.push(t.shift()),e.forEach((function(e){return e[1]++})),r.array=0===a?u.map((function(e){return e[0]})).concat(e.map((function(e){return e[0]}))).concat(t.map((function(e){return e[0]}))).concat(r.array.slice(o+1)):r.array.slice(0,a).concat(u.map((function(e){return e[0]}))).concat(e.map((function(e){return e[0]}))).concat(t.map((function(e){return e[0]}))).concat(r.array.slice(o+1)),n.push(r.array.concat([i-1,i])),n.push([])),c&&n.push([!0,i-1]);return u.concat(e).concat(t)}(l,s,t,a,n,r,p)}function G(e,t,n,r){if(!e.length)return t(y(n.map((function(e,t){return t})))),void setTimeout((function(){t(y([])),t(b(n.map((function(e,t){return t})))),t(E(!1))}),900);var a=e[0].length>3?T:3===e[0].length&&"boolean"===typeof e[0][2]||0===e[0].length?g:2===e[0].length&&"boolean"===typeof e[0][0]?b:y;if(a===T){var o=e.shift();t(a(o.slice(0,o.length-2))),t(g([])),t(y([])),t(g([o[o.length-2],o[o.length-1]])),t(y([o[o.length-2],o[o.length-1]]))}else t(a(e.shift()));setTimeout((function(){G(e,t,n,r)}),r)}var H=function(e,t,n){var r=e.slice(0),a=[];return L(r,0,r.length-1,a),P(a,t,r,n),r};function L(e,t,n,r){if(t>=n)r.push([!0,t]);else{var a=t,o=t+1,c=n;for(r.push(a),r.push([o,c]);c>=o;){if(e[c]<e[a]&&e[o]>e[a]){r.push([o,c,!0]);var u=e[c];e[c]=e[o],e[o]=u,r.push(e.slice(0)),r.push([])}e[c]>=e[a]&&c--,e[o]<=e[a]&&o++,c>=o&&r.push([o,c])}if(r.push([a,c]),a!==c){var i=e[c];e[c]=e[a],e[a]=i,r.push([a,c,!0]),r.push(e.slice(0)),r.push([]),r.push([!0,c])}L(e,t,c-1,r),L(e,c+1,n,r)}}function P(e,t,n,r){if(!e.length)return t(j(null)),t(m(n.map((function(e,t){return t})))),setTimeout((function(){t(m([])),t(E(!1))}),900),void console.log("quicksort");var a=e[0]instanceof Array?e[0].length>3?T:2!==e[0].length?g:2===e[0].length&&"boolean"===typeof e[0][0]?b:m:j;t(a(e.shift())),a===j&&t(m(e.shift())),setTimeout((function(){P(e,t,n,r)}),r)}var Q=function(e,t,n){var r=e.slice(0),a=[];!function(e,t){var n=Math.floor(e.length/2);for(;n>=0;)z(e,n,e.length,t),n--}(r,a);for(var o=r.length-1;o>0;){a.push([0,o]);var c=r[o];r[o]=r[0],r[0]=c,a.push([0,o,!0]),a.push(r.slice(0)),a.push([]),a.push([!0,o]),z(r,0,o,a),o--}return a.push([!0,o]),X(a,t,r,n),r};function z(e,t,n,r){if(!(t>=Math.floor(n/2))){var a,o=2*t+1,c=2*t+2<n?2*t+2:null;if(c?(r.push([t,o,c]),a=e[o]>e[c]?o:c):(r.push([t,o]),a=o),e[t]<e[a]){var u=e[a];e[a]=e[t],e[t]=u,r.push([t,a,!0]),r.push(e.slice(0)),r.push([]),z(e,a,n,r)}}}function X(e,t,n,r){if(!e.length)return t(S(n.map((function(e,t){return t})))),void setTimeout((function(){t(S([])),t(E(!1))}),900);var a=e[0].length>3?T:3===e[0].length&&"boolean"===typeof e[0][2]||!e[0].length?g:2===e[0].length&&"boolean"===typeof e[0][0]?b:S;t(a(e.shift())),setTimeout((function(){X(e,t,n,r)}),r)}var D=function(e){Object(A.a)(n,e);var t=Object(x.a)(n);function n(e){var r;return Object(N.a)(this,n),(r=t.call(this,e)).handleClick=r.handleClick.bind(Object(B.a)(r)),r.handleChange=r.handleChange.bind(Object(B.a)(r)),r}return Object(C.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.generateArray)(30),document.getElementById("changeSize").value=50}},{key:"handleClick",value:function(e){(0,this.props.updateAlgorithm)(e)}},{key:"handleChange",value:function(e){(0,this.props.generateArray)(Math.floor(1.65*(parseInt(e.target.value)+3)))}},{key:"render",value:function(){var e=this,t=this.props,n=t.array,a=t.algorithm,o=t.generateArray,c=t.sort,u=t.isRunning,i=570-Math.pow(n.length,2)>0?570-Math.pow(n.length,2):0;return Object(r.jsxs)("div",{id:"toolbar",className:w.a.toolbar,children:[Object(r.jsx)("div",{id:u?"generateArrayX":"generateArray",className:w.a.generateButtonWrapper,children:Object(r.jsx)("button",{className:w.a.generateButton,disabled:u,onClick:u?null:function(){return o(n.length)},children:"New Array"})}),Object(r.jsx)("div",{className:w.a.separator}),Object(r.jsxs)("div",{className:w.a.slider,children:[Object(r.jsx)("div",{id:"arraySize",className:w.a.arraySize,children:"Size & Speed"}),Object(r.jsx)("input",{id:"changeSize",type:"range",min:"0",max:"100",disabled:u,onChange:this.handleChange})]}),Object(r.jsx)("div",{className:w.a.separator}),Object(r.jsx)("div",{className:"mergeSort"===a?w.a.currentAlgorithmButton:w.a.algorithmButton,onClick:function(){return e.handleClick("mergeSort")},children:"Merge Sort"}),Object(r.jsx)("div",{className:w.a.separator}),Object(r.jsx)("div",{className:"quickSort"===a?w.a.currentAlgorithmButton:w.a.algorithmButton,onClick:function(){return e.handleClick("quickSort")},children:"Quick Sort"}),Object(r.jsx)("div",{className:w.a.separator}),Object(r.jsx)("div",{className:"heapSort"===a?w.a.currentAlgorithmButton:w.a.algorithmButton,onClick:function(){return e.handleClick("heapSort")},children:"Heap Sort"}),Object(r.jsx)("div",{className:w.a.separator}),Object(r.jsx)("div",{className:"bubbleSort"===a?w.a.currentAlgorithmButton:w.a.algorithmButton,onClick:function(){return e.handleClick("bubbleSort")},children:"Bubble Sort"}),Object(r.jsx)("div",{className:w.a.separator}),Object(r.jsx)("div",{id:"sort",className:w.a.sortButtonWrapper,children:Object(r.jsx)("button",{className:w.a.sortButton,disabled:u,onClick:u?null:function(){return c(a,n,i)},children:"Sort"})})]})}}]),n}(a.Component),q=Object(d.b)((function(e){return{array:e.app.array,algorithm:e.app.algorithm,isRunning:e.app.isRunning}}),(function(){return function(e){return{generateArray:function(t){var n=function(e,t,n){var r=Array(n).fill(0);return r.forEach((function(n,a){r[a]=Math.floor(Math.random()*(e-t))+t})),r}(10,90,t);e(T(n)),e(b([]))},updateAlgorithm:function(t){e({type:_.SET_ALGORITHM,payload:t})},sort:function(t,n,r){var a="bubbleSort"===t?I:"mergeSort"===t?M:"quickSort"===t?H:"heapSort"===t?Q:null;e(b([])),e(E(!0)),a(n,e,r)}}}}))(D),V=n(8),Y=n.n(V),J=function(e){return Object(r.jsxs)("div",{className:Y.a.container,children:[Object(r.jsx)(s,{}),Object(r.jsxs)("div",{className:Y.a.bodyWrapper,children:[Object(r.jsx)("div",{className:Y.a.toolbarContainer,children:Object(r.jsx)(q,{})}),Object(r.jsx)("div",{className:Y.a.bodyContainer,children:Object(r.jsx)(v,{})})]})]})};var K,F=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(J,{})})},$=n(21),Z=n(15),ee=function(e){return function(t,n,r){return e((function(e,n){var r,a=performance.now(),o=t(e,n),c=performance.now(),u=(r=c-a,Math.round(100*r)/100);return console.log("reducer process time:",u),o}),n,r)}},te=function(e){return function(t){return function(n){console.group(n.type),console.info("dispatching",n);var r=t(n);return console.log("next state",e.getState()),console.groupEnd(),r}}},ne=n(4),re=n(2),ae={isAlgoRunning:!1,array:[],currentSwappers:[],currentSorted:[],isRunning:!1,currentBubbleTwo:[],algorithm:"",currentMergeX:[],currentQuickTwo:[],pivot:null,currentHeapThree:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.IS_ALGO_RUNNING:return Object(re.a)(Object(re.a)({},e),{},{isAlgoRunning:t.value});case _.SET_CURRENT_BUBBLETWO:return Object(re.a)(Object(re.a)({},e),{},{currentBubbleTwo:t.payload});case _.SET_CURRENT_SWAPPERS:return Object(re.a)(Object(re.a)({},e),{},{currentSwappers:t.payload.length?t.payload:[]});case _.SET_CURRENT_SORTED:return Object(re.a)(Object(re.a)({},e),{},{currentSorted:t.payload.length?t.payload:[]});case _.SET_ARRAY:return Object(re.a)(Object(re.a)({},e),{},{array:t.payload});case _.SET_RUNNING:return Object(re.a)(Object(re.a)({},e),{},{isRunning:t.payload});case _.SET_ALGORITHM:return Object(re.a)(Object(re.a)({},e),{},{algorithm:t.payload});case _.SET_CURRENT_MERGEX:return Object(re.a)(Object(re.a)({},e),{},{currentMergeX:t.payload});case _.SET_CURRENT_QUICKTWO:return Object(re.a)(Object(re.a)({},e),{},{currentQuickTwo:t.payload});case _.SET_PIVOT:return Object(re.a)(Object(re.a)({},e),{},{pivot:t.payload});case _.SET_CURRENT_HEAPTHREE:return Object(re.a)(Object(re.a)({},e),{},{currentHeapThree:t.payload});default:return Object(re.a)({},e)}},ce=Object(ne.c)({app:oe}),ue=n(20),ie=n.n(ue),le=Object(Z.a)({reducer:ce,middleware:[te].concat(Object($.a)(Object(Z.b)())),preloadedState:K,enhancers:[ee]});ie()(le);var se=le;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(d.a,{store:se,children:Object(r.jsx)(F,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,n){e.exports={container:"style_container__3mvY9",swapElements:"style_swapElements__12zp1",bubbleElement:"style_bubbleElement__7HHox",sorted:"style_sorted__1vREg",defaultElement:"style_defaultElement__3vqmD",pivotElement:"style_pivotElement__38pD4",chartContainer:"style_chartContainer__3oh47",arrayElement:"style_arrayElement__3us9C"}},8:function(e,t,n){e.exports={container:"style_container__1U94F",bodyWrapper:"style_bodyWrapper__z5vru",toolbarContainer:"style_toolbarContainer__3udxF",bodyContainer:"style_bodyContainer__33BQE"}}},[[38,1,2]]]);
//# sourceMappingURL=main.de4c1312.chunk.js.map