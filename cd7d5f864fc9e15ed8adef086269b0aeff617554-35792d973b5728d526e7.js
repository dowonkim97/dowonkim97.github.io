/*! For license information please see cd7d5f864fc9e15ed8adef086269b0aeff617554-35792d973b5728d526e7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1jzt":function(e,t,r){(function(r){var a,o;o=void 0!==r?r:"undefined"!=typeof window?window:this,void 0===(a=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},r=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var r in t){if(!t.hasOwnProperty(r))return;e[r]=t[r]}})),e},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,r=String(e),a=r.length,o=-1,i="",n=r.charCodeAt(0);++o<a;){if(0===(t=r.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===o&&48<=t&&t<=57||1===o&&48<=t&&t<=57&&45===n?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?r.charAt(o):"\\"+r.charAt(o)}return"#"+i},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,r,a){0===t&&document.body.focus(),a||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,r))},n=function(t,r,a,o){if(r.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:a,toggle:o}});document.dispatchEvent(i)}};return function(s,l){var c,d,u,f,h={cancelScroll:function(e){cancelAnimationFrame(f),f=null,e||n("scrollCancel",c)},animateScroll:function(a,s,l){h.cancelScroll();var d=r(c||t,l||{}),p="[object Number]"===Object.prototype.toString.call(a),m=p||!a.tagName?null:a;if(p||m){var g=e.pageYOffset;d.header&&!u&&(u=document.querySelector(d.header));var y,v,b,S,w,E,L,I,O=function(t){return t?(r=t,parseInt(e.getComputedStyle(r).height,10)+t.offsetTop):0;var r}(u),R=p?a:function(t,r,a,i){var n=0;if(t.offsetParent)for(;n+=t.offsetTop,t=t.offsetParent;);return n=Math.max(n-r-a,0),i&&(n=Math.min(n,o()-e.innerHeight)),n}(m,O,parseInt("function"==typeof d.offset?d.offset(a,s):d.offset,10),d.clip),x=R-g,T=o(),H=0,C=(y=x,b=(v=d).speedAsDuration?v.speed:Math.abs(y/1e3*v.speed),v.durationMax&&b>v.durationMax?v.durationMax:v.durationMin&&b<v.durationMin?v.durationMin:parseInt(b,10)),M=function(t){var r,o,l;S||(S=t),H+=t-S,E=g+x*(o=w=1<(w=0===C?0:H/C)?1:w,"easeInQuad"===(r=d).easing&&(l=o*o),"easeOutQuad"===r.easing&&(l=o*(2-o)),"easeInOutQuad"===r.easing&&(l=o<.5?2*o*o:(4-2*o)*o-1),"easeInCubic"===r.easing&&(l=o*o*o),"easeOutCubic"===r.easing&&(l=--o*o*o+1),"easeInOutCubic"===r.easing&&(l=o<.5?4*o*o*o:(o-1)*(2*o-2)*(2*o-2)+1),"easeInQuart"===r.easing&&(l=o*o*o*o),"easeOutQuart"===r.easing&&(l=1- --o*o*o*o),"easeInOutQuart"===r.easing&&(l=o<.5?8*o*o*o*o:1-8*--o*o*o*o),"easeInQuint"===r.easing&&(l=o*o*o*o*o),"easeOutQuint"===r.easing&&(l=1+--o*o*o*o*o),"easeInOutQuint"===r.easing&&(l=o<.5?16*o*o*o*o*o:1+16*--o*o*o*o*o),r.customEasing&&(l=r.customEasing(o)),l||o),e.scrollTo(0,Math.floor(E)),function(t,r){var o=e.pageYOffset;if(t==r||o==r||(g<r&&e.innerHeight+o)>=T)return h.cancelScroll(!0),i(a,r,p),n("scrollStop",d,a,s),!(f=S=null)}(E,R)||(f=e.requestAnimationFrame(M),S=t)};0===e.pageYOffset&&e.scrollTo(0,0),L=a,I=d,p||history.pushState&&I.updateURL&&history.pushState({smoothScroll:JSON.stringify(I),anchor:L.id},document.title,L===document.documentElement?"#top":"#"+L.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?i(a,Math.floor(R),!1):(n("scrollStart",d,a,s),h.cancelScroll(!0),e.requestAnimationFrame(M))}}},p=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(d=t.target.closest(s))&&"a"===d.tagName.toLowerCase()&&!t.target.closest(c.ignore)&&d.hostname===e.location.hostname&&d.pathname===e.location.pathname&&/#/.test(d.href)){var r,o;try{r=a(decodeURIComponent(d.hash))}catch(t){r=a(d.hash)}if("#"===r){if(!c.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(r);(o=o||"#top"!==r?o:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var r=e.location.hash;r=r||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:r||e.pageYOffset},document.title,r||e.location.href)}}(c),h.animateScroll(o,d))}},m=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(a(history.state.anchor)))||h.animateScroll(t,null,{updateURL:!1})}};return h.destroy=function(){c&&(document.removeEventListener("click",p,!1),e.removeEventListener("popstate",m,!1),h.cancelScroll(),f=u=d=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";h.destroy(),c=r(t,l||{}),u=c.header?document.querySelector(c.header):null,document.addEventListener("click",p,!1),c.updateURL&&c.popstate&&e.addEventListener("popstate",m,!1)}(),h}}(o)}.apply(t,[]))||(e.exports=a)}).call(this,r("yLpj"))},"9H8W":function(e,t,r){},"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var o,i=a(r("PJYZ")),n=a(r("VbXa")),s=a(r("8OQS")),l=a(r("pVnL")),c=a(r("q1tI")),d=a(r("17x9")),u=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,o=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),o&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,r=e.fixed,a=p(t||r||[]);return a&&a.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),g=function(e){var t=u(e),r=h(t);return m[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,b=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,o=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:o,srcSet:a,sizes:i}),r&&c.default.createElement("source",{media:o,srcSet:r,sizes:i}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function L(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e,t){var r=e.srcSet,a=e.srcSetWebp,o=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(o?'media="'+o+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var R=function(e,t){var r=(void 0===o&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),o);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",o=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+c+n+s+r+a+t+i+o+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},T=c.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,o=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=c.default.createElement(H,(0,l.default)({ref:t,src:r},i,{ariaHidden:n}));return a.length>1?c.default.createElement("picture",null,o(a),s):s})),H=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,o=e.src,i=e.style,n=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,h=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":h,sizes:r,srcSet:a,src:o},p,{onLoad:n,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));H.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var C=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&b&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||v&&(y||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,n.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),(r=h(t))&&(m[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,o=e.style,i=void 0===o?{}:o,n=e.imgStyle,s=void 0===n?{}:n,d=e.placeholderStyle,f=void 0===d?{}:d,h=e.placeholderClassName,m=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,b=e.Tag,S=e.itemProp,E=e.loading,O=e.draggable,R=m||g;if(!R)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,M=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:C?1:0,transition:M?"opacity "+v+"ms":"none"},s),V="boolean"==typeof y?"lightgray":y,z={transitionDelay:v+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},M&&z,s,f),j={title:t,alt:this.state.isVisible?"":r,style:k,className:h,itemProp:S},q=this.state.isHydrated?p(R):R[0];if(m)return c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),V&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},M&&z)}),q.base64&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:j,imageVariants:R,generateSources:I}),q.tracedSVG&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:j,imageVariants:R,generateSources:L}),this.state.isVisible&&c.default.createElement("picture",null,w(R),c.default.createElement(H,{alt:r,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:r,title:t,loading:E},q,{imageVariants:R}))}}));if(g){var P=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete P.display,c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},V&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:V,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},M&&z)}),q.base64&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:j,imageVariants:R,generateSources:I}),q.tracedSVG&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:j,imageVariants:R,generateSources:L}),this.state.isVisible&&c.default.createElement("picture",null,w(R),c.default.createElement(H,{alt:r,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:r,title:t,loading:E},q,{imageVariants:R}))}}))}return null},t}(c.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var M=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),N=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function V(e){return function(t,r,a){var o;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");d.default.checkPropTypes(((o={})[r]=e,o),t,"prop",a)}}C.propTypes={resolutions:M,sizes:N,fixed:V(d.default.oneOfType([M,d.default.arrayOf(M)])),fluid:V(d.default.oneOfType([N,d.default.arrayOf(N)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var z=C;t.default=z},EXIE:function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d}));var a=r("1jzt"),o=r.n(a),i=r("dwco"),n=r.n(i);let s;function l(){return n.a.polyfill(),s=new o.a('a[href*="#"]',{speed:500,speedAsDuration:!0}),s}function c(){if(!s)throw Error("Not founded SmoothScroll instance");return s.destroy(),s=null,s}function d(e){if(!s)throw Error("Not founded SmoothScroll instance");return s.animateScroll(e),s}},dwco:function(e,t,r){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var r,a=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:a.prototype.scroll||s,scrollIntoView:a.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,n=(r=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},a.prototype.scroll=a.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var e=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},a.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},a.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var r=f(this),a=r.getBoundingClientRect(),i=this.getBoundingClientRect();r!==t.body?(p.call(this,r,r.scrollLeft+i.left-a.left,r.scrollTop+i.top-a.top),"fixed"!==e.getComputedStyle(r).position&&e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+n<e.scrollHeight:"X"===t?e.clientWidth+n<e.scrollWidth:void 0}function d(t,r){var a=e.getComputedStyle(t,null)["overflow"+r];return"auto"===a||"scroll"===a}function u(e){var t=c(e,"Y")&&d(e,"Y"),r=c(e,"X")&&d(e,"X");return t||r}function f(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function h(t){var r,a,o,n,s=(i()-t.startTime)/468;n=s=s>1?1:s,r=.5*(1-Math.cos(Math.PI*n)),a=t.startX+(t.x-t.startX)*r,o=t.startY+(t.y-t.startY)*r,t.method.call(t.scrollable,a,o),a===t.x&&o===t.y||e.requestAnimationFrame(h.bind(e,t))}function p(r,a,n){var l,c,d,u,f=i();r===t.body?(l=e,c=e.scrollX||e.pageXOffset,d=e.scrollY||e.pageYOffset,u=o.scroll):(l=r,c=r.scrollLeft,d=r.scrollTop,u=s),h({scrollable:l,method:u,startTime:f,startX:c,startY:d,x:a,y:n})}}}}()},lbRd:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r("q1tI"),o=r.n(a),i=r("Wbzz"),n=r("9eSz"),s=r.n(n);r("9H8W");const l=Object(a.forwardRef)((e,t)=>o.a.createElement(i.StaticQuery,{query:c,render:e=>{const{author:r,social:a,introduction:n}=e.site.siteMetadata;return o.a.createElement("div",{ref:t,className:"bio"},o.a.createElement("div",{className:"author"},o.a.createElement("div",{className:"author-description"},o.a.createElement(s.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:r,style:{borderRadius:"100%"}}),o.a.createElement("div",{className:"author-name"},o.a.createElement(i.Link,{to:"/about",className:"author-name-content"},o.a.createElement("span",null,r)),o.a.createElement("div",{className:"author-introduction"},n),o.a.createElement("p",{className:"author-socials"},a.instagram&&o.a.createElement("a",{href:"https://www.instagram.com/"+a.instagram},"Instagram"),a.github&&o.a.createElement("a",{href:"https://github.com/"+a.github},"GitHub"),a.medium&&o.a.createElement("a",{href:"https://medium.com/"+a.medium},"Medium"),a.twitter&&o.a.createElement("a",{href:"https://twitter.com/"+a.twitter},"Twitter"),a.facebook&&o.a.createElement("a",{href:"https://www.facebook.com/"+a.facebook},"Facebook"),a.linkedin&&o.a.createElement("a",{href:`https://www.linkedin.com/in/${a.linkedin}/`},"LinkedIn"))))))}})),c="2486386679"}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-35792d973b5728d526e7.js.map