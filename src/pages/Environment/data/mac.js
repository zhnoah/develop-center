export default [
    {
        id: 'basic',
        caption: '装机',
        softwares: [
            {
                id: 'qq',
                caption: 'QQ',
                loginFlag: true,
                configFlag: false,
                licenseFlag: false,
                storeFlag: true,
                downloadFlag: false,
                downloadUrl: '',
                optionUrl: '',
            }, {
                id: 'shadowsocks',
                caption: 'Shadowsocks',
                loginFlag: false,
                configFlag: true,
                licenseFlag: false,
                storeFlag: false,
                downloadFlag: false,
                downloadUrl: 'https://github.com/shadowsocks/ShadowsocksX-NG/releases',
                optionUrl: '',
            }, {
                id: 'chrome',
                caption: 'Google Chrome',
                loginFlag: true,
                configFlag: false,
                licenseFlag: false,
                storeFlag: false,
                downloadFlag: true,
                downloadUrl: 'https://www.google.com/chrome/browser/thankyou.html?standalone=1&platform=mac&installdataindex=defaultbrowser',
                optionUrl: '',
            }, {
                id: 'alfred',
                caption: 'Alfred',
                loginFlag: false,
                configFlag: false,
                licenseFlag: false,
                storeFlag: true,
                downloadFlag: false,
                downloadUrl: '',
                optionUrl: '',
            }, {
                id: 'unarchiver',
                caption: 'The Unarchiver',
                loginFlag: false,
                configFlag: false,
                licenseFlag: false,
                storeFlag: true,
                downloadFlag: false,
                downloadUrl: '',
                optionUrl: '',
            }, {
                id: 'cleaner',
                caption: 'Dr.Cleaner',
                loginFlag: false,
                configFlag: false,
                licenseFlag: false,
                storeFlag: true,
                downloadFlag: false,
                downloadUrl: '',
                optionUrl: '',
            },
        ],
        more: [
            {
                id: 'enpass',
                caption: 'Enpass',
                loginFlag: true,
                configFlag: false,
                licenseFlag: false,
                storeFlag: false,
                downloadFlag: false,
                downloadUrl: 'https://www.enpass.io/downloads/',
                optionUrl: '',
            }, {
                id: 'player',
                caption: 'MPlayerX',
                loginFlag: false,
                configFlag: false,
                licenseFlag: false,
                storeFlag: true,
                downloadFlag: false,
                downloadUrl: '',
                optionUrl: '',
            }
        ]
    }, {
        id: 'tools',
        caption: '前端开发',
        softwares: [
            {
                id: 'vscode',
                caption: 'Visual Studio Code',
                loginFlag: false,
                configFlag: true,
                licenseFlag: false,
                storeFlag: false,
                downloadFlag: false,
                downloadUrl: 'https://code.visualstudio.com/Download',
                optionUrl: '',
            },{
                id: 'homebrew',
                caption: 'Homebrew',
                loginFlag: false,
                configFlag: false,
                licenseFlag: false,
                storeFlag: false,
                downloadFlag: false,
                downloadUrl: 'http://brew.sh/index_zh-cn.html',
                optionUrl: '',
            }, {
                id: 'git',
                caption: 'Git',
                loginFlag: false,
                configFlag: false,
                licenseFlag: false,
                storeFlag: false,
                downloadFlag: false,
                downloadUrl: 'https://git-scm.com/downloads/',
                optionUrl: '',
            }, {
                id: 'dash',
                caption: 'Dash',
                loginFlag: false,
                configFlag: false,
                licenseFlag: false,
                storeFlag: true,
                downloadFlag: false,
                downloadUrl: '',
                optionUrl: '',
            },
        ],
        more: [
            {
                id: 'sublime',
                caption: 'Sublime Text 3',
                loginFlag: false,
                configFlag: false,
                licenseFlag: true,
                storeFlag: false,
                downloadFlag: false,
                downloadUrl: 'http://www.sublimetext.com/3',
                optionUrl: '',
            }, {
                id: 'packagecontrol',
                caption: 'Package Control',
                loginFlag: false,
                configFlag: false,
                licenseFlag: false,
                storeFlag: false,
                downloadFlag: false,
                downloadUrl: 'https://packagecontrol.io/installation',
                optionUrl: '',
            }, {
                id: 'iterm',
                caption: 'iTerm',
                loginFlag: false,
                configFlag: false,
                licenseFlag: false,
                storeFlag: false,
                downloadFlag: false,
                downloadUrl: 'https://www.iterm2.com/',
                optionUrl: '',
            }, {
                id: 'svnx',
                caption: 'svnX',
                loginFlag: true,
                configFlag: false,
                licenseFlag: false,
                storeFlag: false,
                downloadFlag: false,
                downloadUrl: 'https://subversion.assembla.com/svn/svnx/html/Downloads.html',
                optionUrl: '',
            }, {
                id: 'github',
                caption: 'GitHub Desktop',
                loginFlag: true,
                configFlag: false,
                licenseFlag: false,
                storeFlag: false,
                downloadFlag: false,
                downloadUrl: 'https://desktop.github.com/',
                optionUrl: '',
            }, {
                id: 'fiddler',
                caption: 'Fiddler',
                loginFlag: false,
                configFlag: false,
                licenseFlag: false,
                storeFlag: false,
                downloadFlag: false,
                downloadUrl: 'https://www.telerik.com/download/fiddler',
                optionUrl: '',
            },
        ]
    },
    {
        id: 'graphics',
        caption: '图形图像、视音频处理',
        softwares: [
            {
                id: 'ps',
                caption: 'Photoshop',
                loginFlag: false,
                configFlag: false,
                licenseFlag: false,
                storeFlag: false,
                downloadFlag: false,
                downloadUrl: 'cloud-disk',
                optionUrl: '',
            },
        ],
        more: [
            {
                id: 'prepo',
                caption: 'Prepo',
                loginFlag: false,
                configFlag: false,
                licenseFlag: false,
                storeFlag: true,
                downloadFlag: false,
                downloadUrl: '',
                optionUrl: '',
            }, {
                id: 'mockups',
                caption: 'Balsamiq Mockups',
                loginFlag: false,
                configFlag: false,
                licenseFlag: false,
                storeFlag: false,
                downloadFlag: false,
                downloadUrl: 'https://balsamiq.com/download/',
                optionUrl: '',
            }
        ]
    },
    // {
    //     id: 'node',
    //     caption: 'Node.js 开发',
    //     softwares: [
    //         {
    //             id: 'mongodb',
    //             caption: 'MongoDB',
    //             loginFlag: false,
    //             configFlag: true,
    //             licenseFlag: false,
    //             storeFlag: false,
    //             downloadFlag: false,
    //             downloadUrl: 'https://www.mongodb.com/download-center',
    //             optionUrl: '',
    //         }, {
    //             id: 'robo',
    //             caption: 'Robo 3T',
    //             loginFlag: false,
    //             configFlag: false,
    //             licenseFlag: false,
    //             storeFlag: false,
    //             downloadFlag: false,
    //             downloadUrl: 'https://robomongo.org/download',
    //             optionUrl: '',
    //         },
    //     ],
    //     more: []
    // },
    // {
    //     id: 'mobile',
    //     caption: 'Mobile App 开发',
    //     softwares: [
    //         {
    //             id: 'jdk',
    //             caption: 'Java SE Development Kit',
    //             loginFlag: false,
    //             configFlag: false,
    //             licenseFlag: false,
    //             storeFlag: false,
    //             downloadFlag: false,
    //             downloadUrl: 'http://www.oracle.com/technetwork/java/javase/downloads/index.html',
    //             optionUrl: '',
    //         }, {
    //             id: 'python',
    //             caption: 'Python',
    //             loginFlag: false,
    //             configFlag: false,
    //             licenseFlag: false,
    //             storeFlag: false,
    //             downloadFlag: false,
    //             downloadUrl: 'https://www.python.org/downloads/',
    //             optionUrl: '',
    //         }, {
    //             id: 'androidstudio',
    //             caption: 'Android Studio',
    //             loginFlag: false,
    //             configFlag: true,
    //             licenseFlag: false,
    //             storeFlag: false,
    //             downloadFlag: false,
    //             downloadUrl: 'https://developer.android.com/studio/index.html',
    //             optionUrl: '',
    //         },
    //     ],
    //     more: []
    // }
]