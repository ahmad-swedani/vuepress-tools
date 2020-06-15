(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{727:function(e,t,a){"use strict";a.r(t);var s=a(50),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-theme-canvas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-theme-canvas"}},[e._v("#")]),e._v(" Vuepress theme Canvas")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress"),a("OutboundLink")],1),e._v(" custom theme for blogging inspired on "),a("a",{attrs:{href:"https://github.com/cnvs/canvas",target:"_blank",rel:"noopener noreferrer"}},[e._v("Canvas: a Simple, Powerful Blog Publishing Platform"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("You can see "),a("a",{attrs:{href:"https://whoan.me",target:"_blank",rel:"noopener noreferrer"}},[e._v("my own blog"),a("OutboundLink")],1),e._v(" as an example.")]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[a("strong",[e._v("As Easy as 1,2,3")])]),e._v(" "),a("p",[e._v("First, create a docs folder if you don't have one yet:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" docs "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" docs\n")])])]),a("p",[e._v("Clone the repo:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/whoan/vuepress-theme-canvas.git .vuepress\n")])])]),a("p",[e._v("See it run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v(".vuepress/run.sh\n")])])]),a("hr"),e._v(" "),a("p",[e._v("You will see a README file in your docs folder and it's there to let "),a("code",[e._v("vuepress")]),e._v(" render the "),a("em",[e._v("Home")]),e._v(" page. See more information "),a("a",{attrs:{href:"https://vuepress.vuejs.org/default-theme-config/#homepage",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("blockquote",[a("p",[e._v("Important note: The root README will be ignored by the theme and it won't be listed as a blog post. For the same reason, all its content (except for the front matter) will be ignored.")])]),e._v(" "),a("h2",{attrs:{id:"building-your-brand-new-blog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-your-brand-new-blog"}},[e._v("#")]),e._v(" Building your brand new blog")]),e._v(" "),a("blockquote",[a("p",[e._v("IMPORTANT! You must always use "),a("code",[e._v(".vuepress/node_modules/.bin/vuepress")]),e._v(" instead of the global "),a("code",[e._v("vuepress")]),e._v(" for this project")])]),e._v(" "),a("p",[e._v("Once you placed your fantastic posts in your docs folder, build your blog like this:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# cd $your_docs_dir")]),e._v("\n.vuepress/node_modules/.bin/vuepress build\n")])])]),a("h2",{attrs:{id:"set-the-config-file-to-your-needs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-the-config-file-to-your-needs"}},[e._v("#")]),e._v(" Set the config file to your needs")]),e._v(" "),a("p",[e._v("Now it's time to personalize your blog's information. Go and change the "),a("em",[e._v("congif.js")]),e._v(" file with your personal data.")]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("p",[e._v("You can set the "),a("strong",[e._v("lastModified")]),e._v(" date of a blog post in the Front Matter like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("lastModified: '2019-09-09'\n")])])]),a("p",[e._v("And you can set "),a("strong",[e._v("prev")]),e._v(" and "),a("strong",[e._v("next")]),e._v(" posts in the footer of your posts adding something like this also in the Front Matter:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("prev: /some-prev-blog\nnext: /some-next-blog\n")])])]),a("p",[e._v("To set your personal links in the header of the pages, you have the array "),a("code",[e._v("usefulLinks")]),e._v(" in the config file."),a("br"),e._v("\nYou can also set the icon you want to show in each link. Here an example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("[{\n  href: 'https://github.com/whoan',\n  cssIcon: 'fa fa-fw fa-github'\n}]\n")])])]),a("h2",{attrs:{id:"limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),a("p",[e._v("This project is meant to be simple and it has some limitations. Some of them can be addressed with the time, others will never be implemented to maintain its simplicity.")]),e._v(" "),a("p",[e._v("These are the current limitations, based on what you can expect for a blog:")]),e._v(" "),a("ul",[a("li",[e._v("It lists all the markdown files at the same level regardless the directory they are placed in.")]),e._v(" "),a("li",[e._v("It doesn't have tags.")]),e._v(" "),a("li",[e._v("It doesn't have a search bar.")]),e._v(" "),a("li",[e._v("It doesn't have a lot of other things you can find in other blogs; but it's beautiful, something you don't find in a lot of other blogs.")])]),e._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("h4",{attrs:{id:"i-get-a-404-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-get-a-404-error"}},[e._v("#")]),e._v(" I get a 404 error")]),e._v(" "),a("p",[e._v("It's due to you need a README.md in the root of the project. See "),a("a",{attrs:{href:"#installation"}},[e._v("the installation section")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"i-can-t-see-the-posts-titles-in-the-main-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-can-t-see-the-posts-titles-in-the-main-page"}},[e._v("#")]),e._v(" I can't see the posts titles in the main page")]),e._v(" "),a("p",[e._v("Each markdown file (your posts) need a "),a("code",[e._v("h1")]),e._v(" header, so here you have a suggestion to write:")]),e._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("#")]),e._v(" My Awesome Post")]),e._v("\n")])])]),a("h4",{attrs:{id:"i-get-compiling-template-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-get-compiling-template-errors"}},[e._v("#")]),e._v(" I get compiling template errors")]),e._v(" "),a("p",[e._v("You need to see which are the hurting files and modify them accordingly to make them markdown compliant. Don't know really which are the common reasons for this problem.")]),e._v(" "),a("p",[e._v("Now you will see the titles the Home page.")]),e._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/whoan/vuepress-canvas/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[e._v("MIT"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);