const categories = [{
    caption: '格式转换',
    id: 'conver',
}, {
    caption: '代码工具',
    id: 'code',
}, {
    caption: '图片处理',
    id: 'image',
}, {
    caption: '资源',
    id: 'resource',
}]

const tools = [
    {
        name: 'JS Bin',
        id: 'jsbin',
        categories: ['code'],
        url: 'http://jsbin.com/?js,console',
        describe: '在线代码编辑',
    }, {
        name: 'Can I use',
        id: 'caniuse',
        categories: ['code'],
        url: 'https://caniuse.com/',
        describe: '浏览器特性支持查询',
    }, {
        name: 'HTML2Jade',
        id: 'html2jade',
        categories: ['conver', 'code'],
        url: 'http://html2jade.org/',
        describe: 'HTML 代码转 Pug/Jade 格式代码',
    }, {
        name: 'icovert',
        id: 'icovert',
        categories: ['conver'],
        url: 'http://www.easyicon.net/covert/',
        describe: 'png 图片转 ico 格式',
    },
]

export {
    categories,
    tools,
}