webpackJsonp([7243222379581],{40:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(1),u=n(s),i=a(4),c=n(i),f=a(18),p=n(f),d=a(69),m=n(d);a(48);var h=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data,t={title:e.node.frontmatter.title,slug:e.node.fields.slug,description:e.node.frontmatter.description,date:e.node.frontmatter.date,category:e.node.frontmatter.category,categorySlug:e.node.fields.categorySlug};return u.default.createElement("div",{className:"post"},u.default.createElement("div",{className:"post__meta"},u.default.createElement("time",{className:"post__meta-time",dateTime:(0,m.default)(t.date).locale("pt-BR").format("MMMM D, YYYY")},(0,m.default)(t.date).locale("pt-BR").format("LL")),u.default.createElement("span",{className:"post__meta-divider"}),u.default.createElement("span",{className:"post__meta-category",key:t.categorySlug},u.default.createElement(p.default,{to:t.categorySlug,className:"post__meta-category-link"},t.category))),u.default.createElement("h2",{className:"post__title"},u.default.createElement(p.default,{className:"post__title-link",to:t.slug},t.title)),u.default.createElement("p",{className:"post__description"},t.description),u.default.createElement(p.default,{className:"post__readmore",to:t.slug},"Chega mais"))},t}(u.default.Component);h.propTypes={data:c.default.object.isRequired},t.default=h,e.exports=t.default},48:function(e,t){},208:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(1),u=n(s),i=a(4),c=n(i),f=a(40),p=n(f),d=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=[],t=this.props.pathContext.tag,a=this.props.data.allMarkdownRemark.edges;return a.forEach(function(t){e.push(u.default.createElement(p.default,{data:t,key:t.node.fields.slug}))}),u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"content__inner"},u.default.createElement("div",{className:"page"},u.default.createElement("h1",{className:"page__title"},'Artigos com a tag "',t,'"'),u.default.createElement("div",{className:"page__body"},e))))},t}(u.default.Component);d.propTypes={data:c.default.shape({allMarkdownRemark:c.default.shape({edges:c.default.array.isRequired})}),pathContext:c.default.shape({tag:c.default.string.isRequired})},t.default=d,e.exports=t.default},217:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=a(1),u=n(s),i=a(4),c=n(i),f=a(23),p=n(f),d=a(24),m=n(d),h=a(208),y=n(h),_=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pathContext.tag;return u.default.createElement("div",null,u.default.createElement(p.default,{title:'Artigos com a tag "'+t+'" - '+e}),u.default.createElement(m.default,this.props),u.default.createElement(y.default,this.props))},t}(u.default.Component);_.propTypes={data:c.default.shape({site:c.default.shape({siteMetadata:c.default.shape({title:c.default.string.isRequired})})}),pathContext:c.default.shape({tag:c.default.string.isRequired})},t.default=_;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-template-js-d5fd8425888243cd057f.js.map