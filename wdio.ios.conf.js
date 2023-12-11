const { join } = require('path')

exports.config = {
    //hostname: 'localhost',
    //port: 4723,
    path: '/wd/hub',
    user: "luizmenon_46bPFI",
    key: "8NgvkQKxhnRpWEaHrxyo",

    // services: ['appium'],
    services: ['browserstack'],
    framework: 'mocha',
    capabilities: [
        {
            project: "Projeto Appium iOS BS",
            build: 'EBAC Teste',
            name: 'ebac_test',
            device: 'iPhone 12 Pro',
            os_version: "14",
            'browserstack.debug': true,
            app: "bs://67e40fe7f68ec00d52a6bc75f8e590b37dd71148"
        }
    ],
    waitforTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    maxInstances: 1
}