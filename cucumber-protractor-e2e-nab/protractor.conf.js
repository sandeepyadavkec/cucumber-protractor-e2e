
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://www.ebay.com.au/',
    capabilities: {
        browserName:'chrome',
        args: ['no-sandbox']
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        './features/**/*.feature'
    ],
    // cucumber command line options
    cucumberOpts: {
        'no-colors': true,
        require: ['./steps/**/*.js', './features/support/chai.js'],
        tags: [],
        strict: true,
        dryRun: false,
        compiler: [],
        failFast: true
    },
    onPrepare: function () {
        browser.waitForAngularEnabled(false); //testing non-angular apps
        browser.manage().window().maximize();
    },
    getPageTimeout: 60000,
    allScriptsTimeout: 60000,
    plugins: []
};