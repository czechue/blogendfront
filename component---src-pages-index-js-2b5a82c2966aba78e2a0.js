(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});n(51);var a=n(0),r=n.n(a),o=n(152),i=n(142);t.default=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Amazing Pandas Eating Things"),r.a.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement(i.Link,{to:t.fields.slug},r.a.createElement("h3",null,t.frontmatter.title," ",r.a.createElement("span",null,"— ",t.frontmatter.date)),r.a.createElement("p",null,t.excerpt)))}))};var u="2068765159"},141:function(e,t,n){"use strict";var a=n(35);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(144)),o=a(n(145)),i=a(n(7)),u=a(n(48)),l=a(n(49)),s=a(n(4)),c=a(n(0)),d=n(13),p=n(142);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:s.default.string,activeStyle:s.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,l.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,l=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=f(n);return c.default.createElement(d.Link,(0,o.default)({to:v,state:s,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:s,replace:h})),!0}},m))},t}(c.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v=m;t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(141),l=n.n(u);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(143),c=n.n(s);n.d(t,"PageRenderer",function(){return c.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},143:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},144:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},145:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},146:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(50),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},147:function(e){e.exports={data:{site:{siteMetadata:{title:"blogendFront"}}}}},148:function(e,t,n){e.exports={containerWrapper:"container-module--containerWrapper--1bVO_"}},150:function(e,t,n){e.exports={listLink:"layout-module--listLink--3dT87",logoLink:"layout-module--logoLink--2KrGY",header:"layout-module--header--379cn",heading:"layout-module--heading--2yLVd",list:"layout-module--list--VUtJK"}},152:function(e,t,n){"use strict";var a=n(147),r=n(0),o=n.n(r),i=n(148),u=n.n(i),l=function(e){var t=e.children;return o.a.createElement("div",{className:u.a.containerWrapper},t)},s=n(142),c=n(150),d=n.n(c),p=function(e){return o.a.createElement("li",{className:d.a.listLink},o.a.createElement(s.Link,{to:e.to},e.children))};t.a=function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"3892401927",render:function(e){return o.a.createElement(l,null,o.a.createElement("header",{className:d.a.header},o.a.createElement(s.Link,{to:"/",className:d.a.logoLink},o.a.createElement("h3",{className:d.a.heading},e.site.siteMetadata.title)),o.a.createElement("ul",{className:d.a.list},o.a.createElement(p,{to:"/"},"Home"),o.a.createElement(p,{to:"/about/"},"About"),o.a.createElement(p,{to:"/contact/"},"Contact"))),t)},data:a})}}}]);
//# sourceMappingURL=component---src-pages-index-js-2b5a82c2966aba78e2a0.js.map