---
author:
  avatar: https://avatars.githubusercontent.com/u/3678770?v=4
  email: christopher@padarom.xyz
  name: "Christopher M\xFChl"
  url: https://padarom.xyz
  username: padarom
bugs: https://github.com/padarom/vuepress-plugin-code-switcher/issues
category: plugin
date: '2021-04-20T09:26:52.124Z'
deprecated: false
description: Component that allows having synchronized language switchable code blocks
  (e.g. to switch between Java and Kotlin examples). Selected languages are persisted
  to local storage to have language selection be permanent across page requests.
downloads: null
homepage: https://github.com/padarom/vuepress-plugin-code-switcher#readme
keywords: null
license: MIT License
maintainers: null
name: vuepress-plugin-code-switcher
npm: https://www.npmjs.com/package/vuepress-plugin-code-switcher
publisher:
  avatar: null
  email: npm@padarom.xyz
  name: null
  url: null
  username: padarom
repository: https://github.com/padarom/vuepress-plugin-code-switcher
score: 0.520139186148279
stars: 35
unstable: false
version: 1.1.0
watchers: 35

---

# vuepress-plugin-code-switcher
Component that allows having synchronized language switchable code blocks (e.g. to switch between Java and Kotlin examples). Selected languages are persisted to local storage to have language selection be permanent across page requests.

_Requires Vuepress 1.0+_

## Demo
A live demo is available at https://code-switcher.padarom.xyz.

![](preview.gif)
## Installation
```
$ npm install vuepress-plugin-code-switcher --save
```

After installing, add it to your Vuepress configuration's plugin list:

```js
module.exports = {
    // Your remaining configuration ...
    plugins: [ 'code-switcher' ],
}
```

### Usage
````markdown
<CodeSwitcher :languages="{js:'JavaScript',ts:'TypeScript'}">
<template v-slot:js>

```js
module.exports = function (str) {
    return typeof str === 'string' && str.trim() === str
}
```

</template>
<template v-slot:ts>

```ts
export default function isString (str: string) : str is string {
    return typeof str === 'string' && str.trim() === str
}
```

</template>
</CodeSwitcher>
````

> The extra newline between the `<template>` tags and their content is necessary if you want to have Markdown interpreted within the component.

### With options
If you have a lot of code switchers in your documentation you might not want to
specify your languages every single time. Therefore you can instantiate the
plugin with options and name the default languages for a given group:

```js
module.exports = {
    // Your remaining configuration ...
    plugins: [
        [
            'code-switcher',
            {
                groups: {
                    default: { ts: 'TypeScript', js: 'JavaScript' },
                    jvm: { java: 'Java', kotlin: 'Kotlin', jruby: 'JRuby' },
                },
            },
        ],
    ],
}
```

You then want to give your `CodeSwitcher` components the `name` prop to match them
with the configured language group. If you omit the `name` prop, it uses the group
named `default`.

````markdown
<!-- Uses the "default" languages defined above -->
<CodeSwitcher>
<template v-slot:js>
    <!-- ... (see above) -->
</template>
<template v-slot:ts>
    <!-- ... (see above) -->
</template>
</CodeSwitcher>

<!-- Uses the "jvm" languages defined above -->
<CodeSwitcher name="jvm">
<template v-slot:java>
    <!-- ... (see above) -->
</template>
<template v-slot:kotlin>
    <!-- ... (see above) -->
</template>
<template v-slot:jruby>
    <!-- ... (see above) -->
</template>
</CodeSwitcher>
````

#### Props
| Prop | Description | Type | Default |
| ----- | ----- | ---- | ---- |
| languages | The languages that can be switched between. The object expects shorthands as keys and the tab title as values. The shorthands will also be used as slot names | Object | --- |
| name | All code switchers on one page with the same name will be synchronized. When using the `groups` plugin option, this will also determine the default value for the `languages` prop. | String | `'default'` |
| isolated | if true, this block will not synchronize with any others or load/save its state to/from localstorage | Boolean | `false` |
