!function t(e,n,r){function i(a,s){if(!n[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var h=n[a]={exports:{}};e[a][0].call(h.exports,function(t){var n=e[a][1][t];return i(n?n:t)},h,h.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(e){r(this,t),this.color=e}return i(t,[{key:"isOpaque",get:function(){return 0!==this.color.a}}]),t}();n["default"]=o,e.exports=n["default"]},{}],2:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){return new c["default"](t.clientX,t.clientY)}Object.defineProperty(n,"__esModule",{value:!0});var a,s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=t("./Renderer"),l=r(u),h=t("./Point"),c=r(h),f=t("./Color"),d=r(f),v=t("./Transform"),m=r(v),p=t("./Background"),y=r(p);!function(t){t[t.None=0]="None",t[t.Pressed=1]="Pressed",t[t.Pinching=2]="Pinching"}(a||(a={}));var g=function(){function t(){i(this,t),this.interactionState=a.None,this.transform=m["default"].identity(),this.initialTransform=m["default"].identity(),this.isStroking=!1,this.strokeWidth=10,this.strokeColor=new d["default"](0,0,0,1),this.renderer=new l["default"]({background:new y["default"](new d["default"](255,255,255,1))});var e=this.element=document.createElement("div");e.className="canvas-area",e.appendChild(this.renderer.element),e.addEventListener("mousemove",this.onMouseMove.bind(this)),e.addEventListener("mousedown",this.onMouseDown.bind(this)),e.addEventListener("mouseup",this.onMouseUp.bind(this)),e.addEventListener("touchmove",this.onTouchMove.bind(this)),e.addEventListener("touchstart",this.onTouchStart.bind(this)),e.addEventListener("touchend",this.onTouchEnd.bind(this)),e.addEventListener("wheel",this.onWheel.bind(this))}return s(t,[{key:"pinchStart",value:function(t){this.interactionState=a.Pinching,this.pinchStartPoints=t,this.initialTransform=this.transform}},{key:"pinchMove",value:function(t){this.interactionState!==a.Pinching&&this.pinchStart(t);var e=t[0].sub(t[1]).length/this.pinchStartPoints[0].sub(this.pinchStartPoints[1]).length,n=this.pinchStartPoints[0].add(this.pinchStartPoints[1]).mul(.5),r=t[0].add(t[1]).mul(.5),i=r.sub(n.mul(e)),o=m["default"].scale(e,e).merge(m["default"].translation(i)),o=this.initialTransform.merge(o);this.updateTransform(o),this.renderer.update()}},{key:"pinchEnd",value:function(){this.interactionState=a.None}},{key:"pressStart",value:function(t){this.interactionState=a.Pressed,t=t.transform(this.transform.invert());var e=this.currentStroke=this.renderer.newStroke();e.width=this.strokeWidth,e.color=this.strokeColor,e.addPoint(t),this.renderer.addStroke(e),this.renderer.update(!0)}},{key:"pressMove",value:function(t){this.interactionState===a.Pressed&&(t=t.transform(this.transform.invert()),this.currentStroke.addPoint(t),this.renderer.update(!0))}},{key:"pressEnd",value:function(){this.interactionState===a.Pressed&&(this.interactionState=a.None)}},{key:"updateTransform",value:function(t){this.transform=t,this.renderer.transform=t}},{key:"onMouseMove",value:function(t){this.pressMove(new c["default"](t.clientX,t.clientY))}},{key:"onMouseDown",value:function(t){this.pressStart(new c["default"](t.clientX,t.clientY))}},{key:"onMouseUp",value:function(t){this.pressEnd()}},{key:"onTouchMove",value:function(t){if(1===t.touches.length){var e=t.touches[0];this.pressMove(o(e))}else 2===t.touches.length&&this.pinchMove([0,1].map(function(e){return o(t.touches[e])}));t.preventDefault()}},{key:"onTouchStart",value:function(t){if(1===t.touches.length){var e=t.touches[0];this.pressStart(o(e))}else 2===t.touches.length&&this.pinchStart([0,1].map(function(e){return o(t.touches[e])}));t.preventDefault()}},{key:"onTouchEnd",value:function(t){this.pressEnd(),this.pinchEnd(),t.preventDefault()}},{key:"onWheel",value:function(t){var e=this.transform.translate(new c["default"](-t.deltaX,-t.deltaY));this.updateTransform(e),this.renderer.update(),t.preventDefault()}}]),t}();n["default"]=g,e.exports=n["default"]},{"./Background":1,"./Color":3,"./Point":5,"./Renderer":6,"./Transform":8}],3:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(e,n,i,o){r(this,t),this.r=e,this.g=n,this.b=i,this.a=o}return i(t,[{key:"toString",value:function(){return"rgba("+this.r+", "+this.g+", "+this.b+", "+this.a+")"}},{key:"toData",value:function(){return new Float32Array([this.r,this.g,this.b,this.a])}}]),t}();n["default"]=o,e.exports=n["default"]},{}],4:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function(t,e,n){for(var r=!0;r;){var i=t,o=e,a=n;s=l=u=void 0,r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return void 0;t=l,e=o,n=a,r=!0}},u=t("./shader"),l=r(u),h=t("./Transform"),c=r(h),f=function(t){function e(t){i(this,e),s(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t),this.width=0,this.sceneTransform=c["default"].identity(),this.aPosition=t.getAttribLocation(this.program,"aPosition"),this.aUVCoord=t.getAttribLocation(this.program,"aUVCoord"),this.uTransform=t.getUniformLocation(this.program,"uTransform"),this.uColor=t.getUniformLocation(this.program,"uColor"),this.uAntialiasEdge=t.getUniformLocation(this.program,"uAntialiasEdge"),t.enableVertexAttribArray(this.aPosition),t.enableVertexAttribArray(this.aUVCoord)}return o(e,t),a(e,[{key:"setColor",value:function(t){this.gl.uniform4fv(this.uColor,t.toData())}},{key:"setWidth",value:function(t){this.width=t,this.updateRadius()}},{key:"setTransforms",value:function(t,e){this.sceneTransform=e;var n=e.merge(t);this.gl.uniformMatrix3fv(this.uTransform,!1,n.toData()),this.updateRadius()}},{key:"updateRadius",value:function(){var t=this.width*this.sceneTransform.m11*.5,e=(t-1)/t;console.log("radius: "+t),console.log("edge: "+e),this.gl.uniform1f(this.uAntialiasEdge,e)}},{key:"vertexShader",get:function(){return"\n      uniform mat3 uTransform;\n      attribute vec2 aPosition;\n      attribute vec2 aUVCoord;\n      varying vec2 vUVCoord;\n      void main(void) {\n        vUVCoord = aUVCoord;\n        vec3 pos = uTransform * vec3(aPosition, 1.0);\n        gl_Position = vec4(pos.xy, 0.0, 1.0);\n      }\n    "}},{key:"fragmentShader",get:function(){return"\n      precision mediump float;\n      uniform vec4 uColor;\n      uniform float uAntialiasEdge;\n      varying highp vec2 vUVCoord;\n      void main(void) {\n        float dist = length(vUVCoord);\n        float alpha = 1.0 - smoothstep(uAntialiasEdge, 1.0, dist);\n        gl_FragColor = uColor * alpha;\n      }\n    "}}]),e}(l["default"]);n["default"]=f,e.exports=n["default"]},{"./Transform":8,"./shader":10}],5:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=t("./util"),s=r(a),u=function(){function t(e,n){i(this,t),this.x=e,this.y=n}return o(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"sub",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"mul",value:function(e){return new t(this.x*e,this.y*e)}},{key:"div",value:function(e){return new t(this.x/e,this.y/e)}},{key:"negate",value:function(){return new t(-this.x,-this.y)}},{key:"rotate90",value:function(){return new t(-this.y,this.x)}},{key:"rotate270",value:function(){return new t(this.y,-this.x)}},{key:"normalize",value:function(){return this.div(this.length)}},{key:"midpoint",value:function(t){return this.add(t).mul(.5)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"lengthSquare",value:function(){return this.length*this.length}},{key:"floor",value:function(){return new t(Math.floor(this.x),Math.floor(this.y))}},{key:"ceil",value:function(){return new t(Math.ceil(this.x),Math.ceil(this.y))}},{key:"transform",value:function(e){var n=e.m11*this.x+e.m21*this.y+e.dx,r=e.m12*this.x+e.m22*this.y+e.dy;return new t(n,r)}},{key:"toString",value:function(){return"Point("+this.x+","+this.y+")"}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y}},{key:"fuzzyEquals",value:function(t){return Math.abs(this.x-t.x)<s["default"].EPSILON&&Math.abs(this.y-t.y)<s["default"].EPSILON}},{key:"length",get:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}}]),t}();n["default"]=u,e.exports=n["default"]},{"./util":11}],6:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=t("./Point"),s=r(a),u=t("./Transform"),l=r(u),h=t("./Stroke"),c=r(h),f=t("./FillShader"),d=r(f),v=function(){function t(e){i(this,t),this.element=document.createElement("canvas"),this.strokes=[],this.isUpdateQueued=!1,this.devicePixelRatio=1,this.width=0,this.height=0,this.transform=l["default"].identity();var n=this.gl=this.element.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,premultipliedAlpha:!0});n.getExtension("OES_standard_derivatives")||console.warn("OES_standard_derivatives not supported"),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),this.shader=new d["default"](n),this.background=e.background;var r=this.background.color;n.clearColor(r.r,r.g,r.b,r.a),this.element.className="canvas-area__renderer",window.addEventListener("resize",this.onResize.bind(this)),this.onResize()}return o(t,[{key:"addStroke",value:function(t){this.strokes.push(t)}},{key:"newStroke",value:function(){return new c["default"](this.gl)}},{key:"update",value:function(){var t=this,e=void 0===arguments[0]?!1:arguments[0];if(!this.isUpdateQueued){this.isUpdateQueued=!0;var n=function(){t.render(),t.isUpdateQueued=!1};e?setImmediate(n):requestAnimationFrame(n)}}},{key:"render",value:function(){var t=this,e=this.gl,n=this.shader;e.clear(e.COLOR_BUFFER_BIT),n.use(),n.setTransforms(this.viewportTransform,this.transform),this.strokes.forEach(function(r){n.setColor(r.color),n.setWidth(r.width*t.transform.m11),e.bindBuffer(e.ARRAY_BUFFER,r.buffer),e.vertexAttribPointer(t.shader.aPosition,2,e.FLOAT,!1,16,0),e.vertexAttribPointer(t.shader.aUVCoord,2,e.FLOAT,!1,16,8),e.drawArrays(e.TRIANGLE_STRIP,0,r.polygon.length)})}},{key:"onResize",value:function(){var t=this.width=window.innerWidth,e=this.height=window.innerHeight,n=this.devicePixelRatio=window.devicePixelRatio||1;this.viewportTransform=l["default"].scale(2/t,2/e).translate(new s["default"](-1,-1)).scale(1,-1),this.element.width=t*n,this.element.height=e*n,this.gl.viewport(0,0,t*n,e*n),console.log("resized to "+t+" * "+e+", pixel ratio "+devicePixelRatio),this.update()}}]),t}();n["default"]=v,e.exports=n["default"]},{"./FillShader":4,"./Point":5,"./Stroke":7,"./Transform":8}],7:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){i=!0,o=u}finally{try{!r&&s["return"]&&s["return"]()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=t("./Point"),u=r(s),l=t("./Color"),h=r(l),c=function(){function t(e){i(this,t),this.points=[],this.color=new h["default"](0,0,0,1),this.width=1,this.type="pen",this.polygon=[],this.gl=e,this.buffer=e.createBuffer()}return a(t,[{key:"addPoint",value:function(t){if(this.points.push(t),this.points.length>=2){var e=this.points[this.points.length-2],n=t.sub(e).normalize().rotate90(),r=n.mul(this.width/2),i=n.mul(-this.width/2);this.polygon.push([e.add(r),new u["default"](-1,0)]),this.polygon.push([e.add(i),new u["default"](1,0)]),this.polygon.push([t.add(r),new u["default"](-1,0)]),this.polygon.push([t.add(i),new u["default"](1,0)])}this._updatePolygon()}},{key:"_updatePolygon",value:function(){var t=this.polygon.map(function(t){var e=o(t,2),n=e[0],r=e[1];return[n.x,n.y,r.x,r.y]}).reduce(function(t,e){return t.concat(e)},[]),e=new Float32Array(t),n=this.gl;n.bindBuffer(n.ARRAY_BUFFER,this.buffer),n.bufferData(n.ARRAY_BUFFER,e,n.STREAM_DRAW)}}]),t}();n["default"]=c,e.exports=n["default"]},{"./Color":3,"./Point":5}],8:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(e,n,i,o,a,s){r(this,t),this.m11=e,this.m12=n,this.m21=i,this.m22=o,this.dx=a,this.dy=s}return i(t,[{key:"merge",value:function(e){var n=e.m11*this.m11+e.m21*this.m12,r=e.m11*this.m21+e.m21*this.m22,i=e.m12*this.m11+e.m22*this.m12,o=e.m12*this.m21+e.m22*this.m22,a=e.m11*this.dx+e.m21*this.dy+e.dx,s=e.m12*this.dx+e.m22*this.dy+e.dy;return new t(n,i,r,o,a,s)}},{key:"invert",value:function(){var e=this.m11*this.m22-this.m12*this.m21,n=this.m22/e,r=-this.m12/e,i=-this.m21/e,o=this.m11/e,a=-(n*this.dx+i*this.dy),s=-(r*this.dx+o*this.dy);return new t(n,r,i,o,a,s)}},{key:"translate",value:function(e){return new t(this.m11,this.m12,this.m21,this.m22,this.dx+e.x,this.dy+e.y)}},{key:"scale",value:function(e,n){return new t(this.m11*e,this.m12*e,this.m21*n,this.m22*n,this.dx*e,this.dy*n)}},{key:"toData",value:function(){return new Float32Array([this.m11,this.m12,0,this.m21,this.m22,0,this.dx,this.dy,1])}},{key:"toString",value:function(){return"Transform(["+this.m11+","+this.m12+"],["+this.m21+","+this.m22+"],["+this.dx+","+this.dy+"])"}}],[{key:"identity",value:function(){return new t(1,0,0,1,0,0)}},{key:"scale",value:function(e,n){return new t(e,0,0,n,0,0)}},{key:"translation",value:function(e){return new t(1,0,0,1,e.x,e.y)}},{key:"fromPoints",value:function(e,n,r,i,o,a){var s=n.sub(e),u=r.sub(e),l=o.sub(i),h=a.sub(i),c=t.translation(e.negate()).merge(new t(s.x,s.y,u.x,u.y,0,0).invert()).merge(new t(l.x,l.y,h.x,h.y,0,0)).merge(t.translation(i));return c}}]),t}();n["default"]=o,e.exports=n["default"]},{}],9:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var i=t("./CanvasController"),o=r(i);t("setimmediate"),document.addEventListener("DOMContentLoaded",function(){var t=new o["default"];document.body.appendChild(t.element)})},{"./CanvasController":2,setimmediate:13}],10:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(e){r(this,t),this.gl=e,this._setup()}return i(t,[{key:"use",value:function(){this.gl.useProgram(this.program)}},{key:"_compile",value:function(t,e){var n=this.gl,r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)?r:(console.warn("An error occurred compiling the shaders"),console.warn(n.getShaderInfoLog(r)),null)}},{key:"_setup",value:function(){var t=this.gl,e=this.program=t.createProgram();t.attachShader(e,this._compile(this.vertexShader,t.VERTEX_SHADER)),t.attachShader(e,this._compile(this.fragmentShader,t.FRAGMENT_SHADER)),t.linkProgram(e),t.getProgramParameter(e,t.LINK_STATUS)||console.warn("Failed to link shader program"),t.useProgram(e)}},{key:"vertexShader",get:function(){throw new Error("vertex shader not specified")}},{key:"fragmentShader",get:function(){throw new Error("fragment shader not specified")}}]),t}();n["default"]=o,e.exports=n["default"]},{}],11:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={EPSILON:1.1920929e-7};n["default"]=r,e.exports=n["default"]},{}],12:[function(t,e,n){function r(){h=!1,s.length?l=s.concat(l):c=-1,l.length&&i()}function i(){if(!h){var t=setTimeout(r);h=!0;for(var e=l.length;e;){for(s=l,l=[];++c<e;)s[c].run();c=-1,e=l.length}s=null,h=!1,clearTimeout(t)}}function o(t,e){this.fun=t,this.array=e}function a(){}var s,u=e.exports={},l=[],h=!1,c=-1;u.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new o(t,e)),1!==l.length||h||setTimeout(i,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=a,u.addListener=a,u.once=a,u.off=a,u.removeListener=a,u.removeAllListeners=a,u.emit=a,u.binding=function(t){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(t){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},{}],13:[function(t,e,n){(function(t){!function(e,n){"use strict";function r(t){return m[v]=i.apply(n,t),v++}function i(t){var e=[].slice.call(arguments,1);return function(){"function"==typeof t?t.apply(n,e):new Function(""+t)()}}function o(t){if(p)setTimeout(i(o,t),0);else{var e=m[t];if(e){p=!0;try{e()}finally{a(t),p=!1}}}}function a(t){delete m[t]}function s(){d=function(){var e=r(arguments);return t.nextTick(i(o,e)),e}}function u(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function l(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&o(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),d=function(){var n=r(arguments);return e.postMessage(t+n,"*"),n}}function h(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;o(e)},d=function(){var e=r(arguments);return t.port2.postMessage(e),e}}function c(){var t=y.documentElement;d=function(){var e=r(arguments),n=y.createElement("script");return n.onreadystatechange=function(){o(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n),e}}function f(){d=function(){var t=r(arguments);return setTimeout(i(o,t),0),t}}if(!e.setImmediate){var d,v=1,m={},p=!1,y=e.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(e);g=g&&g.setTimeout?g:e,"[object process]"==={}.toString.call(e.process)?s():u()?l():e.MessageChannel?h():y&&"onreadystatechange"in y.createElement("script")?c():f(),g.setImmediate=d,g.clearImmediate=a}}(new Function("return this")())}).call(this,t("_process"))},{_process:12}]},{},[9]);
//# sourceMappingURL=bundle.js.map