'use strict';

export let assets: mean.IAssets = {
  client: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.min.css',
        'public/assets/html-theme/css/w3.min.css',
        'public/assets/html-theme/css/w3-theme-black.min.css',
        'public/assets/fonts//roboto/roboto.min.css',
        'public/lib/font-awesome/css/font-awesome.min.css',
        // bower:css
        'public/lib/angular-motion/dist/angular-motion.min.css',
        // endbower
      ],
      js: [
        // bower:js
        'public/lib/jquery/dist/jquery.min.js',
        'public/lib/lodash/lodash.js',
        'public/lib/angular/angular.min.js',
        'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-resource/angular-resource.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/bootstrap/dist/js/bootstrap.min.js',
        'public/lib/angular-strap/dist/angular-strap.min.js',
        'public/lib/angular-strap/dist/angular-strap.tpl.min.js',
        'public/lib/angular-sanitize/angular-sanitize.min.js',
        // endbower
      ]
    },
    css: ['public/dist/application.min.css'],
    js: ['public/dist/application.min.js']
  }
};

export let env: mean.IEnv = {
  app: {
    title: 'MeanTS'
  },
  port: process.env.PORT || 8443,
  livereload: false,
  log: {
    // logging with Morgan - https://github.com/expressjs/morgan
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: process.env.LOG_FORMAT || 'combined',
    options: {
      // Stream defaults to process.stdout
      // Uncomment/comment to toggle the logging to a log on the file system
      stream: {
        directoryPath: process.env.LOG_DIR_PATH || process.cwd(),
        fileName: process.env.LOG_FILE || 'access.log',
        rotatingLogs: { // for more info on rotating logs - https://github.com/holidayextras/file-stream-rotator#usage
          active: process.env.LOG_ROTATING_ACTIVE === 'true' ? true : false, // activate to use rotating logs
          fileName: process.env.LOG_ROTATING_FILE || 'access-%DATE%.log', // if rotating logs are active, this fileName setting will be used
          frequency: process.env.LOG_ROTATING_FREQUENCY || 'daily',
          verbose: process.env.LOG_ROTATING_VERBOSE === 'true' ? true : false
        }
      }
    }
  },
};
