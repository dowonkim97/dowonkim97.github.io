(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1QcF":function(e,t,n){},RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n("q1tI")),i=s(n("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],f=!1;function m(e,t){var n=t.onNewComment,r=t.language,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var o in a)e.page[o]=a[o];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var d=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return u.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!f){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),f=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){m(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){m(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);d.displayName="DisqusThread",d.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},d.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=d},TsVF:function(e,t,n){},jmfv:function(e,t,n){},"n1n/":function(e,t,n){},uhgt:function(e,t,n){},vg9a:function(e,t,n){},yZlL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r);n("TsVF");const o=()=>a.a.createElement("hr",{className:"custom-hr"});var i=n("hpys"),s=n("CC2r");const c=e=>{let{title:t}=e;return a.a.createElement("h1",null,t)};var l=n("WlAH");n("1QcF");const u=e=>{let{date:t}=e;return a.a.createElement("p",{className:"post-date"},`${t} ${l.d[new Date(t).getDay()]}`)},f=e=>{let{html:t}=e;return a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})};n("jmfv");var m=n("lbRd"),d=n("Wbzz");n("n1n/");const p=e=>{let{pageContext:t}=e;const{previous:n,next:r}=t;return a.a.createElement("ul",{className:"navigator"},a.a.createElement("li",null,n&&a.a.createElement(d.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),a.a.createElement("li",null,r&&a.a.createElement(d.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →")))};function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=n("dI71"),y=n("RPjP"),b=n.n(y);let v=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(h(n)),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(h(n)),n}Object(g.a)(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){const[,...e]=this.state.toasts;this.setState({toasts:e})},n.notifyAboutComment=function(){const e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},n.render=function(){const{post:e,shortName:t,siteUrl:n,slug:r}=this.props,o=n+r;return a.a.createElement(b.a,{shortname:t,identifier:e.frontmatter.title,title:e.frontmatter.title,url:o,category_id:e.frontmatter.category_id,onNewComment:this.notifyAboutComment})},t}(r.Component);var E=n("JqEL");const w=e=>{let{repo:t}=e;const n=a.a.createRef();return Object(r.useEffect)(()=>{const e=E.f(l.c.DARK),r=document.createElement("script"),a={src:"https://utteranc.es/client.js",repo:t,branch:"master",theme:e?"photon-dark":"github-light",label:"comment",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(a).forEach(e=>{r.setAttribute(e,a[e])}),n.current.appendChild(r)},[]),a.a.createElement("div",{className:"utterances",ref:n})};var j=n("EXIE");n("uhgt"),n("vg9a"),t.default=e=>{let{data:t,pageContext:n,location:l}=e;Object(r.useEffect)(()=>(j.c(),()=>j.a()),[]);const d=t.markdownRemark,h=t.site.siteMetadata,{title:g,comment:y,siteUrl:b,author:E,sponsor:C}=h,{disqusShortName:O,utterances:k}=y,{title:_,date:N}=d.frontmatter;return a.a.createElement(i.a,{location:l,title:g},a.a.createElement(s.a,{title:_,description:d.excerpt}),a.a.createElement(c,{title:_}),a.a.createElement(u,{date:N}),a.a.createElement(f,{html:d.html}),a.a.createElement(o,null),a.a.createElement(m.a,null),a.a.createElement(p,{pageContext:n}),!!O&&a.a.createElement(v,{post:d,shortName:O,siteUrl:b,slug:n.slug}),!!k&&a.a.createElement(w,{repo:k}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-625e320d1ddc88c5d816.js.map