(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{587:function(t,a,s){"use strict";s.r(a);var e=s(50),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-plugin-img-lazy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-img-lazy"}},[t._v("#")]),t._v(" vuepress-plugin-img-lazy")]),t._v(" "),s("blockquote",[s("p",[t._v("a vuepress plugin to better supporting image lazy loading")])]),t._v(" "),s("p",[s("strong",[t._v("The plugin will preferentially use native image "),s("a",{attrs:{href:"https://caniuse.com/#feat=loading-lazy-attr",target:"_blank",rel:"noopener noreferrer"}},[t._v("lazy-loading"),s("OutboundLink")],1),t._v(", if the browser does not support it, it will be implemented through lozad")])]),t._v(" "),s("p",[t._v("base on "),s("a",{attrs:{href:"https://github.com/tolking/markdown-it-img-lazy",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-img-lazy"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/tatsy/markdown-it-imsize",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-imsize"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/ApoorvSaxena/lozad.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("lozad"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://tolking.github.io/vuepress-plugin-img-lazy/preview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Live Demo and Documentation"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-img-lazy\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vuepress-plugin-img-lazy\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img-lazy'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token url"}},[t._v("!["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("img")]),t._v("](/img.jpg)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" or")]),t._v("\n![img](/img.jpg =500x300) "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- better --\x3e")]),t._v("\n")])])]),s("h2",{attrs:{id:"use-in-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-in-theme"}},[t._v("#")]),t._v(" Use in theme")]),t._v(" "),s("ul",[s("li",[t._v("registered as global components")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// enhanceAppFile.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ImgLazy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-img-lazy/ImgLazy'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ImgLazy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ImgLazy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("or registered as components")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ImgLazy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-img-lazy/ImgLazy'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ImgLazy "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("use")])]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img-lazy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/img.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("If you registered as global components, you can use it directly in the "),s("code",[t._v("markdown")]),t._v(" file")])]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img-lazy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/img.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("h3",{attrs:{id:"useloading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useloading"}},[t._v("#")]),t._v(" useLoading")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Boolben")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("Use the native image lazy-loading for the web")]),t._v(" "),s("h3",{attrs:{id:"selector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selector"}},[t._v("#")]),t._v(" selector")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("lazy")])])]),t._v(" "),s("p",[t._v("Default class name for image")]),t._v(" "),s("h2",{attrs:{id:"other"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[t._v("#")]),t._v(" Other")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/assets.html#rBase%20URL",target:"_blank",rel:"noopener noreferrer"}},[t._v("Base URL"),s("OutboundLink")],1),t._v(" already included by default, But it does not include the "),s("code",[t._v("<img/>")]),t._v(" label in the markdown file "),s("Badge",{attrs:{text:"^1.0.2"}})],1)]),t._v(" "),s("p",[t._v("If you need to use both "),s("code",[t._v("Base URL")]),t._v(" and "),s("code",[t._v("<img/>")]),t._v(" labels, refer to")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":data-src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$withBase('/img.png')"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("loading")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lazy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lazy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("In order to better supporting image lazy loading, it is better to specify the size of the image (in some themes, you need to set "),s("code",[t._v("display")]),t._v(" as "),s("code",[t._v("inline block")]),t._v(" or "),s("code",[t._v("block")]),t._v(" separately), so as to ensure that the image can occupy the position it should occupy")])])])}),[],!1,null,null,null);a.default=n.exports}}]);