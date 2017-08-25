// Karma configuration
// Generated on Thu Aug 24 2017 19:59:38 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
        // 'node_modules/babel-polyfill/dist/polyfill.js',
        // 'build/**/*.js',
        'test/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: ['karma.conf.js'],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        "test/**/*.js": ["browserify"]
    },

    // preprocessors: {
    //     "src/**/*.js": ["babel"],
    //     "test/**/*.js": ["babel"]
    // },

    // babelPreprocessor: {
    //   options: {
    //     presets: ['es2015']
    //   }
    // },

    // 'karma-babel-preprocessor',
    plugins: [
        'karma-jasmine',
        // 'karma-systemjs',
        'karma-browserify',
        'karma-firefox-launcher',
    ],

    // systemjs: {                             // <---
    //     configFile: 'system.config.js',     // <---
    //     files: [
    //         './test/*.spec.js'
    //     ],
    //     config: {
    //         transpiler: 'traceur',
    //         baseUrl: '/',
    //         paths: {                          // <---
    //             'asset':  'location'          // <---
    //         }
    //     },
    //     testFileSuffix: '.spec.js'
    // },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
