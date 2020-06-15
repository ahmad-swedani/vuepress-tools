(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{671:function(t,s,e){"use strict";e.r(s);var a=e(50),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"kawarimidoll-vuepress-plugin-tailwind"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kawarimidoll-vuepress-plugin-tailwind"}},[t._v("#")]),t._v(" @kawarimidoll/vuepress-plugin-tailwind")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/kawarimidoll/vuepress-plugin-tailwind/blob/master/package.json",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/github/package-json/v/kawarimidoll/vuepress-plugin-tailwind?logo=github&style=for-the-badge",alt:"GitHub package.json version"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.npmjs.com/package/@kawarimidoll/vuepress-plugin-tailwind",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/dt/@kawarimidoll/vuepress-plugin-tailwind?logo=npm&style=for-the-badge",alt:"npm downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/kawarimidoll/vuepress-plugin-tailwind/pulls?q=dependabot",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/david/kawarimidoll/vuepress-plugin-tailwind?color=blue&logo=dependabot&style=for-the-badge",alt:"Dependencies"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/kawarimidoll/vuepress-plugin-tailwind/blob/master/index.js",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/github/languages/code-size/kawarimidoll/vuepress-plugin-tailwind?logo=javascript&style=for-the-badge",alt:"GitHub code size in bytes"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/kawarimidoll/vuepress-plugin-tailwind/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/github/license/kawarimidoll/vuepress-plugin-tailwind?style=for-the-badge",alt:"LICENSE"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("A VuePress plugin to use "),e("a",{attrs:{href:"https://github.com/tailwindcss/tailwindcss",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("tailwindcss")]),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://github.com/FullHuman/purgecss",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("postcss-purgecss")]),e("OutboundLink")],1),t._v(" easily.")]),t._v(" "),e("p",[t._v("With this plugin, you can use any classes defined by Tailwind CSS, and the unused classes are automatically purged by PurgeCSS (production only).")]),t._v(" "),e("p",[t._v("This plugin is based on "),e("a",{attrs:{href:"https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css",target:"_blank",rel:"noopener noreferrer"}},[t._v("the official guide of Tailwind CSS"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("ol",[e("li",[t._v("Install this plugin :")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @kawarimidoll/vuepress-plugin-tailwind\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Add "),e("code",[t._v("@tailwind")]),t._v(" import statements to the beginning of "),e("code",[t._v(".vuepress/styles/index.styl")]),t._v(" with "),e("a",{attrs:{href:"https://purgecss.com/whitelisting.html#in-the-css-directly",target:"_blank",rel:"noopener noreferrer"}},[t._v("whitelisting feature"),e("OutboundLink")],1),t._v(" :")])]),t._v(" "),e("div",{staticClass:"language-styl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-styl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* purgecss start ignore */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token atrule-declaration"}},[e("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@tailwind")]),t._v(" base"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token atrule-declaration"}},[e("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@tailwind")]),t._v(" components"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* purgecss end ignore */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token atrule-declaration"}},[e("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@tailwind")]),t._v(" utilities"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add your style definitions...")]),t._v("\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Load this plugin in "),e("code",[t._v(".vuepress/config.js")]),t._v(" :")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@kawarimidoll/tailwind"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// with options")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ["@kawarimidoll/tailwind", { tailwindConfig: { important: true } }]')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("⚠️\n"),e("em",[t._v("These configuration files are not created automatically. You have to create them if not exist.")])]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("h3",{attrs:{id:"tailwindconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tailwindconfig"}},[t._v("#")]),t._v(" tailwindConfig")]),t._v(" "),e("ul",[e("li",[t._v("default: "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("If you want to use this option, refer to "),e("a",{attrs:{href:"https://tailwindcss.com/docs/configuration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the Tailwind CSS configuration guide"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"purgecssconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#purgecssconfig"}},[t._v("#")]),t._v(" purgecssConfig")]),t._v(" "),e("ul",[e("li",[t._v("default:")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  content"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("sourceDir"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("/**/*.@(js|md|vue|html)")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("vuepressDir"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("/**/*.@(js|md|vue|html)")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("cwd"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("/node_modules/**/*vuepress*/!(node_modules)/**/*.@(js|md|vue|html)")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("defaultExtractor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("content")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" content"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/[\\w-\\/:]+(?<!:)/g")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This default value is adjusted for VuePress from "),e("a",{attrs:{href:"https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css",target:"_blank",rel:"noopener noreferrer"}},[t._v("the document"),e("OutboundLink")],1),t._v(' to include all files in the source directory and all plugins with "vuepress" in the name.\nIf you want to use this option, refer to '),e("a",{attrs:{href:"https://purgecss.com/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("the PurgeCSS configuration guide"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("💡\n"),e("em",[e("code",[t._v("sourceDir")]),t._v(", "),e("code",[t._v("vuepressDir")]),t._v(" and "),e("code",[t._v("cwd")]),t._v(" above are "),e("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/context-api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Context API"),e("OutboundLink")],1),t._v(" of VuePress.")])]),t._v(" "),e("p",[t._v("⚠️\n"),e("em",[t._v("If you use "),e("code",[t._v("purgecssConfig")]),t._v(", the default value is overwritten, not merged.")])]),t._v(" "),e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/kawarimidoll/vuepress-plugin-tailwind/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);