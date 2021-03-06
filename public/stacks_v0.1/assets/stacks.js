var stacks = [{
    name: "工程化",
    items: [{
        name: "Node.js",
        description: "基础平台",
        github_name: "node",
        github_url: "https://github.com/nodejs/node",
        website_url: "https://nodejs.org",
        npm_name: "",
        npm_url: "",
        version: "",
        ie_support: "",
        browser_support_url: ""
    }, {
        name: "npm",
        description: "包管理",
        github_name: "npm",
        github_url: "https://github.com/npm/npm",
        website_url: "http://www.npmjs.com",
        npm_name: "npm",
        npm_url: "https://www.npmjs.com/package/npm",
        version: "",
        ie_support: "",
        browser_support_url: ""
    }, {
        name: "Gulp",
        description: "任务构建",
        github_name: "gulp",
        github_url: "https://github.com/gulpjs/gulp",
        website_url: "http://gulpjs.com",
        npm_name: "gulp",
        npm_url: "https://www.npmjs.com/package/gulp",
        version: "",
        ie_support: "",
        browser_support_url: ""
    }, {
        name: "webpack",
        description: "模块加载及打包",
        github_name: "webpack",
        github_url: "https://github.com/webpack/webpack",
        website_url: "https://webpack.js.org/",
        npm_name: "webpack",
        npm_url: "https://www.npmjs.com/package/webpack",
        version: "",
        ie_support: "",
        browser_support_url: ""
    }, {
        name: "Less",
        description: "CSS 预编译",
        github_name: "less.js",
        github_url: "https://github.com/less/less.js",
        website_url: "http://lesscss.org",
        npm_name: "less",
        npm_url: "https://www.npmjs.com/package/less",
        version: "",
        ie_support: "",
        browser_support_url: ""
    }, {
        name: "PostCSS",
        description: "CSS 处理器",
        github_name: "postcss",
        github_url: "https://github.com/postcss/postcss",
        website_url: "http://postcss.org",
        npm_name: "postcss",
        npm_url: "https://www.npmjs.com/package/postcss",
        version: "",
        ie_support: "",
        browser_support_url: ""
    }, {
        name: "Babel",
        description: "JS 编译器",
        github_name: "babel",
        github_url: "https://github.com/babel/babel",
        website_url: "https://babeljs.io",
        npm_name: "babel",
        npm_url: "https://www.npmjs.com/package/babel",
        version: "",
        ie_support: "",
        browser_support_url: ""
    }, {
        name: "ESLint",
        description: "JS 语法检查",
        github_name: "eslint",
        github_url: "https://github.com/eslint/eslint",
        website_url: "http://eslint.org",
        npm_name: "eslint",
        npm_url: "https://www.npmjs.com/package/eslint",
        version: "",
        ie_support: "",
        browser_support_url: ""
    }, {
        name: "vue-cli",
        description: "Vue.js 脚手架",
        github_name: "vue-cli",
        github_url: "https://github.com/vuejs/vue-cli",
        website_url: "",
        npm_name: "vue-cli",
        npm_url: "https://www.npmjs.com/package/vue-cli",
        version: "",
        ie_support: "",
        browser_support_url: "",
        unSelect: true
    }, {
        name: "Cordova CLI",
        description: "移动端应用构建、打包",
        github_name: "cordova-cli",
        github_url: "https://github.com/apache/cordova-cli",
        website_url: "http://cordova.apache.org/",
        npm_name: "cordova",
        npm_url: "https://www.npmjs.com/package/cordova",
        version: "",
        ie_support: "",
        browser_support_url: "",
        unSelect: true
    }]
}, {
    name: "jQuery/Knockout/RequireJS 技术栈",
    has_npm_output: true,
    items: [{
        name: "RequireJS",
        description: "模块加载",
        github_name: "requirejs",
        github_url: "https://github.com/requirejs/requirejs",
        website_url: "http://requirejs.org",
        npm_name: "requirejs",
        npm_url: "https://www.npmjs.com/package/requirejs",
        version: "",
        ie_support: "ie6+",
        browser_support_url: "http://requirejs.org",
        selected: true,
        dependencies: ['requirejs/text', 'require-css']
    }, {
        name: "Knockout",
        description: "MVVM",
        github_name: "knockout",
        github_url: "https://github.com/knockout/knockout",
        website_url: "http://knockoutjs.com/",
        npm_name: "knockout",
        npm_url: "https://www.npmjs.com/package/knockout",
        version: "",
        ie_support: "ie6+",
        browser_support_url: "http://knockoutjs.com/documentation/browser-support.html",
        selected: true
    }, {
        name: "knockout.mapping",
        description: "Mapping",
        github_name: "knockout.mapping",
        github_url: "https://github.com/SteveSanderson/knockout.mapping",
        website_url: "http://knockoutjs.com/documentation/plugins-mapping.html",
        npm_name: "shimney-knockout-mapping",
        npm_url: "https://www.npmjs.com/package/shimney-knockout-mapping",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: true
    }, {
        name: "jQuery",
        description: "DOM 操作",
        github_name: "jquery",
        github_url: "https://github.com/jquery/jquery",
        website_url: "https://jquery.com/",
        npm_name: "jquery",
        npm_url: "https://www.npmjs.com/package/jquery",
        version: "1",
        ie_support: "ie6+",
        browser_support_url: "https://jquery.com/browser-support/",
        selected: true
    }, {
        name: "jQuery Validation Plugin",
        description: "表单验证",
        github_name: "jquery-validation",
        github_url: "https://github.com/jzaefferer/jquery-validation",
        website_url: "http://jqueryvalidation.org/",
        npm_name: "jquery-validation",
        npm_url: "https://www.npmjs.com/package/jquery-validation",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: true
    }, {
        name: "Bootstrap",
        description: "UI",
        github_name: "bootstrap",
        github_url: "https://github.com/twbs/bootstrap",
        website_url: "http://getbootstrap.com/",
        npm_name: "bootstrap",
        npm_url: "https://www.npmjs.com/package/bootstrap",
        version: "3",
        ie_support: "ie8+",
        browser_support_url: "http://getbootstrap.com/getting-started/#support",
        selected: true
    }, {
        name: "Bootstrap Modal",
        description: "Modal 扩展",
        github_name: "bootstrap-modal",
        github_url: "https://github.com/jschr/bootstrap-modal",
        website_url: "http://jschr.github.io/bootstrap-modal/",
        npm_name: "jschr-bootstrap-modal",
        npm_url: "https://www.npmjs.com/package/jschr-bootstrap-modal",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: true
    }, {
        name: "bootstrap-datetimepicker",
        description: "日期选择器",
        github_name: "bootstrap-datetimepicker",
        github_url: "https://github.com/smalot/bootstrap-datetimepicker",
        website_url: "http://www.malot.fr/bootstrap-datetimepicker/",
        npm_name: "bootstrap-datetime-picker",
        npm_url: "https://www.npmjs.com/package/bootstrap-datetime-picker",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: false
    }, {
        name: "Date Range Picker for Bootstrap",
        description: "日期范围选择器",
        github_name: "bootstrap-daterangepicker",
        github_url: "https://github.com/dangrossman/bootstrap-daterangepicker",
        website_url: "http://www.daterangepicker.com",
        npm_name: "bootstrap-daterangepicker",
        npm_url: "https://www.npmjs.com/package/bootstrap-daterangepicker",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: false
    }, {
        name: "slick",
        description: "轮播图",
        github_name: "slick",
        github_url: "https://github.com/kenwheeler/slick",
        website_url: "http://kenwheeler.github.io/slick",
        npm_name: "slick-carousel",
        npm_url: "https://www.npmjs.com/package/slick-carousel",
        version: "",
        ie_support: "ie8+",
        browser_support_url: "https://github.com/kenwheeler/slick",
        selected: false
    }]
}, {
    name: "Vue.js 技术栈",
    has_npm_output: true,
    items: [{
        name: "Vue.js",
        description: "MVVM",
        github_name: "vue",
        github_url: "https://github.com/vuejs/vue",
        website_url: "https://vuejs.org/",
        npm_name: "vue",
        npm_url: "https://www.npmjs.com/package/vue",
        version: "",
        ie_support: "ie9+",
        browser_support_url: "https://github.com/vuejs/vue",
        selected: true
    }, {
        name: "vue-router",
        description: "路由",
        github_name: "vue-router",
        github_url: "https://github.com/vuejs/vue-router",
        website_url: "https://router.vuejs.org",
        npm_name: "vue-router",
        npm_url: "https://www.npmjs.com/package/vue-router",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: true
    }, {
        name: "vue-validator",
        description: "表单验证",
        github_name: "vue-validator",
        github_url: "https://github.com/kazupon/vue-validator",
        website_url: "",
        npm_name: "vue-validator",
        npm_url: "https://www.npmjs.com/package/vue-validator",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: true
    }, {
        name: "VueStrap",
        description: "UI 组件",
        github_name: "vue-strap",
        github_url: "https://github.com/yuche/vue-strap",
        website_url: "http://yuche.github.io/vue-strap/",
        npm_name: "vue-strap",
        npm_url: "https://www.npmjs.com/package/vue-strap",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: true,
        dependencies: ['bootstrap@3']
    }, {
        name: "Vux",
        description: "移动端 UI",
        github_name: "vux",
        github_url: "https://github.com/airyland/vux",
        website_url: "https://vux.li/",
        npm_name: "vux",
        npm_url: "https://www.npmjs.com/package/vux",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: false
    }]
}, {
    name: "常用功能库",
    has_npm_output: true,
    items: [{
        name: "axios",
        description: "HTTP 请求",
        github_name: "axios",
        github_url: "https://github.com/mzabriskie/axios",
        website_url: "",
        npm_name: "axios",
        npm_url: "https://www.npmjs.com/package/axios",
        version: "",
        ie_support: "ie8+",
        browser_support_url: "https://github.com/mzabriskie/axios",
        selected: false
    }, {
        name: "Lodash",
        description: "扩展函数",
        github_name: "lodash",
        github_url: "https://github.com/lodash/lodash",
        website_url: "https://lodash.com/",
        npm_name: "lodash",
        npm_url: "https://www.npmjs.com/package/lodash",
        version: "",
        ie_support: "ie6+",
        browser_support_url: "https://lodash.com/",
        selected: false
    }, {
        name: "Font-Awesome",
        description: "字体图标",
        github_name: "Font-Awesome",
        github_url: "https://github.com/FortAwesome/Font-Awesome",
        website_url: "http://fontawesome.io/",
        npm_name: "font-awesome",
        npm_url: "https://www.npmjs.com/package/font-awesome",
        version: "",
        ie_support: "ie7+",
        browser_support_url: "http://fontawesome.io/get-started/",
        selected: false
    }, {
        name: "hello.js",
        description: "OAuth2 认证",
        github_name: "hello.js",
        github_url: "https://github.com/MrSwitch/hello.js",
        website_url: "http://adodson.com/hello.js/",
        npm_name: "hellojs",
        npm_url: "https://www.npmjs.com/package/hellojs",
        version: "",
        ie_support: "ie6+",
        browser_support_url: "https://github.com/MrSwitch/hello.js",
        selected: false
    }, {
        name: "i18next",
        description: "国际化",
        github_name: "i18next",
        github_url: "https://github.com/i18next/i18next",
        website_url: "http://i18next.com/",
        npm_name: "i18next",
        npm_url: "https://www.npmjs.com/package/i18next",
        version: "",
        ie_support: "ie9+",
        browser_support_url: "http://i18next.com/",
        selected: false
    }, {
        name: "pace",
        description: "Ajax 请求进度条",
        github_name: "pace",
        github_url: "https://github.com/HubSpot/pace",
        website_url: "http://github.hubspot.com/pace/docs/welcome/",
        npm_name: "pace-js",
        npm_url: "https://www.npmjs.com/package/pace-js",
        version: "",
        ie_support: "ie8+",
        browser_support_url: "http://github.hubspot.com/pace/",
        selected: true
    }, {
        name: "fecha",
        description: "日期时间格式化",
        github_name: "fecha",
        github_url: "https://github.com/taylorhakes/fecha",
        website_url: "",
        npm_name: "fecha",
        npm_url: "https://www.npmjs.com/package/fecha",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: true
    }, {
        name: "store.js",
        description: "本地存储",
        github_name: "store.js",
        github_url: "https://github.com/marcuswestin/store.js",
        website_url: "http://i18next.com/",
        npm_name: "store",
        npm_url: "https://www.npmjs.com/package/store",
        version: "",
        ie_support: "ie6+",
        browser_support_url: "https://github.com/marcuswestin/store.js",
        selected: true
    }, {
        name: "Summernote",
        description: "富文本编辑器",
        github_name: "summernote",
        github_url: "https://github.com/summernote/summernote",
        website_url: "http://summernote.org",
        npm_name: "summernote",
        npm_url: "https://www.npmjs.com/package/summernote",
        version: "",
        ie_support: "ie9+",
        browser_support_url: "http://summernote.org/",
        selected: false
    }, {
        name: "Chart.js",
        description: "图表",
        github_name: "Chart.js",
        github_url: "https://github.com/chartjs/Chart.js",
        website_url: "http://www.chartjs.org/",
        npm_name: "chart.js",
        npm_url: "https://www.npmjs.com/package/chart.js",
        version: "",
        ie_support: "ie9+",
        browser_support_url: "http://www.chartjs.org/",
        selected: false
    }, {
        name: "Plyr",
        description: "视频播放器",
        github_name: "plyr",
        github_url: "https://github.com/Selz/plyr",
        website_url: "http://plyr.io/",
        npm_name: "plyr",
        npm_url: "https://www.npmjs.com/package/plyr",
        version: "",
        ie_support: "ie9+",
        browser_support_url: "https://github.com/Selz/plyr",
        selected: false
    }, {
        name: "Plupload",
        description: "文件上传",
        github_name: "plupload",
        github_url: "https://github.com/moxiecode/plupload",
        website_url: "http://www.plupload.com",
        npm_name: "plupload",
        npm_url: "https://www.npmjs.com/package/plupload",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: false
    }, {
        name: "Bowser",
        description: "浏览器版本检测",
        github_name: "bowser",
        github_url: "https://github.com/ded/bowser",
        website_url: "",
        npm_name: "bowser",
        npm_url: "https://www.npmjs.com/package/bowser",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: true
    }, {
        name: "typeahead.js",
        description: "输入提示",
        github_name: "typeahead.js",
        github_url: "https://github.com/twitter/typeahead.js",
        website_url: "http://twitter.github.io/typeahead.js/",
        npm_name: "typeahead.js",
        npm_url: "https://www.npmjs.com/package/typeahead.js",
        version: "",
        ie_support: "ie8+",
        browser_support_url: "https://github.com/twitter/typeahead.js",
        selected: false
    }, {
        name: "Modernizr",
        description: "浏览器特性支持检测",
        github_name: "Modernizr",
        github_url: "https://github.com/Modernizr/Modernizr",
        website_url: "https://modernizr.com",
        npm_name: "modernizr",
        npm_url: "https://www.npmjs.com/package/modernizr",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: false
    }, {
        name: "base64.js",
        description: "Base64 编码/解码",
        github_name: "js-base64",
        github_url: "https://github.com/dankogai/js-base64",
        website_url: "",
        npm_name: "js-base64",
        npm_url: "https://www.npmjs.com/package/js-base64",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: false
    }, {
        name: "QRCode.js",
        description: "二维码生成",
        github_name: "qrcodejs",
        github_url: "https://github.com/davidshimjs/qrcodejs",
        website_url: "",
        npm_name: "qrcodejs-fixed",
        npm_url: "https://www.npmjs.com/package/qrcodejs-fixed",
        version: "",
        ie_support: "ie6+",
        browser_support_url: "https://github.com/davidshimjs/qrcodejs",
        selected: false
    }, {
        name: "clipboard.js",
        description: "剪贴板",
        github_name: "clipboard.js",
        github_url: "https://github.com/zenorocha/clipboard.js",
        website_url: "https://clipboardjs.com/",
        npm_name: "clipboard",
        npm_url: "https://www.npmjs.com/package/clipboard",
        version: "",
        ie_support: "ie9+",
        browser_support_url: "https://github.com/zenorocha/clipboard.js",
        selected: false
    }]
}, {
    name: "Polyfills",
    has_npm_output: true,
    items: [{
        name: "ES6-Promise",
        description: "ES6 Promise",
        github_name: "es6-promise",
        github_url: "https://github.com/stefanpenner/es6-promise",
        website_url: "",
        npm_name: "es6-promise",
        npm_url: "https://www.npmjs.com/package/es6-promise",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: false
    }, {
        name: "JSON-js",
        description: "JSON",
        github_name: "JSON-js",
        github_url: "https://github.com/douglascrockford/JSON-js",
        website_url: "http://www.json.org/",
        npm_name: "JSON",
        npm_url: "https://www.npmjs.com/package/JSON",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: false
    }, {
        name: "Respond.js",
        description: "CSS3 媒体查询",
        github_name: "Respond",
        github_url: "https://github.com/scottjehl/Respond",
        website_url: "",
        npm_name: "respond.js",
        npm_url: "https://www.npmjs.com/package/respond.js",
        version: "",
        ie_support: "ie6+",
        browser_support_url: "https://github.com/scottjehl/Respond",
        selected: true
    }, {
        name: "HTML5 Shiv",
        description: "HTML5 元素",
        github_name: "html5shiv",
        github_url: "https://github.com/aFarkas/html5shiv",
        website_url: "",
        npm_name: "html5shiv",
        npm_url: "https://www.npmjs.com/package/html5shiv",
        version: "",
        ie_support: "ie6+",
        browser_support_url: "https://github.com/aFarkas/html5shiv",
        selected: true
    }, {
        name: "es5-shim",
        description: "ES5 特性",
        github_name: "es5-shim",
        github_url: "https://github.com/es-shims/es5-shim",
        website_url: "",
        npm_name: "es5-shim",
        npm_url: "https://www.npmjs.com/package/es5-shim",
        version: "",
        ie_support: "",
        browser_support_url: "",
        selected: false
    }, {
        name: "webcomponents.js",
        description: "Web Components",
        github_name: "webcomponentsjs",
        github_url: "https://github.com/webcomponents/webcomponentsjs",
        website_url: "http://webcomponents.org/polyfills/",
        npm_name: "webcomponents.js",
        npm_url: "https://www.npmjs.com/package/webcomponents.js",
        version: "",
        ie_support: "ie10+",
        browser_support_url: "https://github.com/webcomponents/webcomponentsjs",
        selected: false
    }]
}];
