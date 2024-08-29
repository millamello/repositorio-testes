export const config = {
    //runner: 'local',
    //port: 4723,


    user: 'oauth-mello.milla1-943fa', //usuário retirado do Saucelabs
    key: 'a7941cf8-1927-4aa8-87ec-50e20566dd1a', //senha estava errada, coloquei de forma correta
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
 

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [
        //{
        //    platformName: 'Android',
        //   'appium:deviceName': 'ebaq-qe',
        //    'appium:platformVersion': '9.0',
        //    'appium:automationName': 'UiAutomator2',
        //    'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        //   'appium:appWaitActivity': '.MainActivity',
        //    'appium:disableIdLocatorAutocomplete': true,
    
        //}
        {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
            'appium:deviceName': 'Android GoogleAPI Emulator',
            'appium:platformVersion': '9.0', //versão mais antiga utilizada, pois é a unica que funciona sem travar no momento.
            'appium:automationName': 'UiAutomator2',
            "appium:disableIdLocatorAutocompletion": true,
            'sauce:options': {
                build: 'appium-build-teste-ebacshop',
                name: 'Ebac Shop Teste',
                deviceOrientation: 'PORTRAIT',
                appiumVersion: '2.5.1'
            },
       }
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
        ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTeste: async function(test, context, {error, result, duration, passed, retries}){
                    await driver.takeScreenshot();
        }

    }

